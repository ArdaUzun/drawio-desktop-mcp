import http from "http";
import crypto from "crypto";
import { BrowserWindow } from "electron";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
import { TOOL_DEFINITIONS } from "./tools.js";
import { INSTRUCTIONS } from "./instructions.js";

function createMcpServer(bridge) {
  const server = new McpServer(
    {
      name: "drawio-desktop",
      version: "1.0.0",
    },
    {
      instructions: INSTRUCTIONS,
      capabilities: {
        tools: {},
      },
    },
  );

  for (const tool of TOOL_DEFINITIONS) {
    server.tool(
      tool.name,
      tool.description,
      tool.schema,
      async (args) => {
        try {
          const result = await bridge.request(tool.name, args);
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(result),
              },
            ],
          };
        } catch (err) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({ error: err.message }),
              },
            ],
            isError: true,
          };
        }
      },
      { annotations: tool.annotations },
    );
  }

  return server;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : undefined);
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

export async function startMcpServer(port, bridge) {
  // Per-session transports and servers
  const transports = new Map();

  const httpServer = http.createServer(async (req, res) => {
    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Accept, Mcp-Session-Id, Last-Event-ID, Mcp-Protocol-Version",
    );
    res.setHeader("Access-Control-Expose-Headers", "Mcp-Session-Id, Mcp-Protocol-Version");

    if (req.method === "OPTIONS") {
      res.writeHead(204);
      res.end();
      return;
    }

    const url = new URL(req.url, `http://localhost:${port}`);

    if (url.pathname === "/health") {
      const windows = BrowserWindow.getAllWindows().length;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          status: "ok",
          tools: TOOL_DEFINITIONS.length,
          windows,
          pending: bridge.getPendingCount(),
        }),
      );
      return;
    }

    if (url.pathname === "/mcp") {
      try {
        const sessionId = req.headers["mcp-session-id"];

        if (req.method === "POST") {
          const body = await readBody(req);

          if (sessionId && transports.has(sessionId)) {
            // Existing session
            const transport = transports.get(sessionId);
            await transport.handleRequest(req, res, body);
            return;
          }

          if (!sessionId && isInitializeRequest(body)) {
            // New session
            const transport = new StreamableHTTPServerTransport({
              sessionIdGenerator: () => crypto.randomUUID(),
              onsessioninitialized: (sid) => {
                transports.set(sid, transport);
              },
            });

            transport.onclose = () => {
              const sid = transport.sessionId;
              if (sid) {
                transports.delete(sid);
              }
            };

            const server = createMcpServer(bridge);
            await server.connect(transport);
            await transport.handleRequest(req, res, body);
            return;
          }

          // Invalid: not an init request and no session
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              jsonrpc: "2.0",
              error: { code: -32000, message: "Bad Request: No valid session ID provided" },
              id: null,
            }),
          );
          return;
        }

        if (req.method === "GET") {
          if (sessionId && transports.has(sessionId)) {
            const transport = transports.get(sessionId);
            await transport.handleRequest(req, res);
            return;
          }

          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Invalid or missing session ID" }));
          return;
        }

        if (req.method === "DELETE") {
          if (sessionId && transports.has(sessionId)) {
            const transport = transports.get(sessionId);
            await transport.handleRequest(req, res);
            return;
          }

          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Invalid or missing session ID" }));
          return;
        }
      } catch (err) {
        console.error("[MCP] Error handling request:", err);
        if (!res.headersSent) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              jsonrpc: "2.0",
              error: { code: -32603, message: "Internal server error" },
              id: null,
            }),
          );
        }
        return;
      }
    }

    // Unknown route
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        error: "not_found",
        error_description: "Route not found.",
      }),
    );
  });

  httpServer.listen(port, "127.0.0.1", () => {
    console.log(`[MCP] Server listening on http://127.0.0.1:${port}/mcp`);
    console.log(`[MCP] Health check: http://127.0.0.1:${port}/health`);
  });

  return httpServer;
}
