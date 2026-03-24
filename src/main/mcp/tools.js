import { z } from "zod";

const Attributes = z.lazy(() =>
  z
    .array(
      z.union([
        z.string(),
        Attributes, // recursion: nested arrays
      ]),
    )
    .refine((arr) => arr.length === 0 || typeof arr[0] === "string", {
      message: "If not empty, the first element must be a string operator",
    })
    .default([]),
);

export const TOOL_DEFINITIONS = [
  // ── New tools ──────────────────────────────────────────────────────

  {
    name: "get-diagram-info",
    description:
      "Get essential context about the current diagram: file name, page count, cell count, layer list, diagram bounds, and active page.",
    schema: {},
    annotations: { readOnlyHint: true },
  },

  {
    name: "get-diagram-screenshot",
    description:
      "Capture the current diagram state as XML. Returns the diagram's mxGraph XML representation for the AI agent to understand the visual layout.",
    schema: {},
    annotations: { readOnlyHint: true },
  },

  // ── Original tools ─────────────────────────────────────────────────

  {
    name: "get-selected-cell",
    description:
      "This tool allows you to retrieve selected cell (whether vertex or edge) on the current page of a Draw.io diagram. The response is a JSON containing attributes of the cell.",
    schema: {},
    annotations: { readOnlyHint: true },
  },

  {
    name: "add-rectangle",
    description:
      "This tool allows you to add new Rectangle vertex cell (object) on the current page of a Draw.io diagram. It accepts multiple optional input parameter.",
    schema: {
      x: z.number().optional().describe("X-axis position of the Rectangle vertex cell").default(100),
      y: z.number().optional().describe("Y-axis position of the Rectangle vertex cell").default(100),
      width: z.number().optional().describe("Width of the Rectangle vertex cell").default(200),
      height: z.number().optional().describe("Height of the Rectangle vertex cell").default(100),
      text: z
        .string()
        .optional()
        .describe("Text content placed inside of the Rectangle vertex cell")
        .default("New Cell"),
      style: z
        .string()
        .optional()
        .describe(
          "Semi-colon separated list of Draw.io visual styles, in the form of `key=value`. Example: `whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#666666;`",
        )
        .default("whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;"),
    },
    annotations: { destructiveHint: true },
  },

  {
    name: "add-edge",
    description: "This tool creates an edge, sometimes called also a relation, between two vertexes (cells).",
    schema: {
      source_id: z.string().describe("Source ID of a cell. It is represented by `id` attribute."),
      target_id: z.string().describe("Target ID of a cell. It is represented by `id` attribute."),
      text: z.string().optional().describe("Text content placed over the edge cell"),
      style: z
        .string()
        .optional()
        .describe(
          "Semi-colon separated list of Draw.io visual styles, in the form of `key=value`. Example: `edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;`",
        )
        .default(
          "edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;",
        ),
    },
    annotations: { destructiveHint: true },
  },

  {
    name: "delete-cell-by-id",
    description: "Deletes a cell, whether it is a vertex or edge.",
    schema: {
      cell_id: z
        .string()
        .describe(
          "The ID of a cell to delete. The cell can be either vertex or edge. The ID is located in `id` attribute.",
        ),
    },
    annotations: { destructiveHint: true },
  },

  {
    name: "get-shape-categories",
    description:
      "Retrieves available shape categories from the diagram's library. Library is split into multiple categories.",
    schema: {},
    annotations: { readOnlyHint: true },
  },

  {
    name: "get-shapes-in-category",
    description:
      "Retrieve all shapes in the provided category from the diagram's library. A shape primarily contains `style` based on which you can create new vertex cells.",
    schema: {
      category_id: z
        .string()
        .describe("Identifier (ID / key) of the category from which all the shapes should be retrieved."),
    },
    annotations: { readOnlyHint: true },
  },

  {
    name: "get-shape-by-name",
    description:
      "Retrieve a specific shape by its name from all available shapes in the diagram's library. It returns the shape and also the category it belongs.",
    schema: {
      shape_name: z.string().describe("Name of the shape to retrieve from the shape library of the current diagram."),
    },
    annotations: { readOnlyHint: true },
  },

  {
    name: "add-cell-of-shape",
    description:
      "This tool allows you to add new vertex cell (object) on the current page of a Draw.io diagram by its shape name. It accepts multiple optional input parameter.",
    schema: {
      shape_name: z.string().describe("Name of the shape to retrieved from the shape library of the current diagram."),
      x: z.number().optional().describe("X-axis position of the vertex cell of the shape").default(100),
      y: z.number().optional().describe("Y-axis position of the vertex cell of the shape").default(100),
      width: z.number().optional().describe("Width of the vertex cell of the shape").default(200),
      height: z.number().optional().describe("Height of the vertex cell of the shape").default(100),
      text: z.string().optional().describe("Text content placed inside of the vertex cell of the shape"),
      style: z
        .string()
        .optional()
        .describe(
          "Semi-colon separated list of Draw.io visual styles, in the form of `key=value`. Example: `whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#666666;`",
        ),
    },
    annotations: { destructiveHint: true },
  },

  {
    name: "set-cell-shape",
    description: "Updates the visual style of an existing vertex cell to match a library shape by name.",
    schema: {
      cell_id: z.string().describe("Identifier (`id` attribute) of the cell whose shape should change."),
      shape_name: z.string().describe("Name of the library shape whose style should be applied to the existing cell."),
    },
    annotations: { destructiveHint: true },
  },

  {
    name: "set-cell-data",
    description: "Sets or updates a custom attribute on an existing cell.",
    schema: {
      cell_id: z.string().describe("Identifier (`id` attribute) of the cell to update with custom data."),
      key: z.string().describe("Name of the attribute to set on the cell."),
      value: z
        .union([z.string(), z.number(), z.boolean()])
        .describe("Value to store for the attribute. Non-string values are stringified before storage."),
    },
    annotations: { destructiveHint: true },
  },

  {
    name: "edit-cell",
    description:
      "Update properties of an existing vertex/shape cell by its ID. Only provided fields are modified; unspecified properties remain unchanged.",
    schema: {
      cell_id: z.string().describe("Identifier (`id` attribute) of the cell to update. Applies to vertex/shape cells."),
      text: z.string().optional().describe("Replace the cell's text/label content."),
      x: z.number().optional().describe("Set a new X-axis position for the cell."),
      y: z.number().optional().describe("Set a new Y-axis position for the cell."),
      width: z.number().optional().describe("Set a new width for the cell."),
      height: z.number().optional().describe("Set a new height for the cell."),
      style: z
        .string()
        .optional()
        .describe("Replace the cell's style string (semi-colon separated `key=value` pairs)."),
    },
    annotations: { destructiveHint: true },
  },

  {
    name: "edit-edge",
    description:
      "Update properties of an existing edge by its ID. Only provided fields are modified; unspecified properties remain unchanged.",
    schema: {
      cell_id: z
        .string()
        .describe("Identifier (`id` attribute) of the edge cell to update. The ID must reference an edge."),
      text: z.string().optional().describe("Replace the edge's label text."),
      source_id: z.string().optional().describe("Reassign the edge's source terminal to a different cell ID."),
      target_id: z.string().optional().describe("Reassign the edge's target terminal to a different cell ID."),
      style: z
        .string()
        .optional()
        .describe("Replace the edge's style string (semi-colon separated `key=value` pairs)."),
    },
    annotations: { destructiveHint: true },
  },

  {
    name: "list-paged-model",
    description:
      "Retrieves a paginated view of all cells (vertices and edges) in the current Draw.io diagram. This tool provides access to the complete model data with essential fields only, sanitized to remove circular dependencies and excessive data. It allows to filter based on multiple criteria and attribute boolean logic. Useful for programmatic inspection of diagram structure without overwhelming response sizes.",
    schema: {
      page: z
        .number()
        .optional()
        .describe(
          "Zero-based page number for pagination. Page 0 returns the first batch of cells, page 1 returns the next batch, etc. Default is 0.",
        )
        .default(0),
      page_size: z
        .number()
        .optional()
        .describe(
          "Maximum number of cells to return in a single page. Controls response size and performance. Must be between 1 and 1000. Default is 50.",
        )
        .default(50),
      filter: z
        .object({
          cell_type: z
            .enum(["edge", "vertex", "object", "layer", "group"])
            .optional()
            .describe(
              "Filter by cell type: 'edge' for connection lines, 'vertex' for vertices/shapes, 'object' for any cell type, 'layer' for layer cells, 'group' for grouped cells",
            ),
          parent_ids: z
            .array(z.string())
            .optional()
            .describe("Filter cells to only those whose parent is one of the specified parent IDs."),
          layer_ids: z
            .array(z.string())
            .optional()
            .describe(
              "Filter cells to only those whose parent is one of the specified layer IDs. Alias for parent_ids.",
            ),
          ids: z
            .array(z.string())
            .optional()
            .describe("Filter cells to only those whose ID is one of the specified IDs."),
          attributes: Attributes.optional().describe(
            'Boolean logic array expressions for filtering cell attributes. Format: ["and" | "or", ...expressions] or ["equal", key, value]. Matches against cell attributes and parsed style properties.',
          ),
        })
        .optional()
        .describe("Optional filter criteria to apply to cells before pagination")
        .default({}),
    },
    annotations: { readOnlyHint: true },
  },

  {
    name: "list-layers",
    description: "Lists all available layers in the diagram with their IDs and names.",
    schema: {},
    annotations: { readOnlyHint: true },
  },

  {
    name: "set-active-layer",
    description:
      "Sets the active layer for creating new elements. All subsequent element creation will happen in this layer.",
    schema: {
      layer_id: z.string().describe("ID of the layer to set as active"),
    },
    annotations: { destructiveHint: true },
  },

  {
    name: "move-cell-to-layer",
    description: "Moves a cell from its current layer to a target layer.",
    schema: {
      cell_id: z.string().describe("ID of the cell to move"),
      target_layer_id: z.string().describe("ID of the target layer where the cell will be moved"),
    },
    annotations: { destructiveHint: true },
  },

  {
    name: "get-active-layer",
    description: "Gets the currently active layer information.",
    schema: {},
    annotations: { readOnlyHint: true },
  },

  {
    name: "create-layer",
    description: "Creates a new layer in the diagram.",
    schema: {
      name: z.string().describe("Name for the new layer"),
    },
    annotations: { destructiveHint: true },
  },
];
