import { ipcMain, BrowserWindow } from "electron";
import crypto from "crypto";

export function createIpcBridge() {
  const pending = new Map();

  ipcMain.on("mcpResponse", (event, response) => {
    const { requestId, result, error } = response;
    const entry = pending.get(requestId);

    if (!entry) {
      return;
    }

    clearTimeout(entry.timeout);
    pending.delete(requestId);

    if (error) {
      entry.reject(new Error(typeof error === "string" ? error : JSON.stringify(error)));
    } else {
      entry.resolve(result);
    }
  });

  return {
    request(toolName, args) {
      return new Promise((resolve, reject) => {
        const win = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0];

        if (!win) {
          return reject(new Error("No active draw.io window"));
        }

        const requestId = crypto.randomUUID();
        const timeout = setTimeout(() => {
          pending.delete(requestId);
          reject(new Error(`MCP request '${toolName}' timed out after 30s`));
        }, 30000);

        pending.set(requestId, { resolve, reject, timeout });
        win.webContents.send("mcpRequest", { requestId, toolName, args });
      });
    },

    getPendingCount() {
      return pending.size;
    },
  };
}
