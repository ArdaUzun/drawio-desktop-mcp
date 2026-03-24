export const INSTRUCTIONS = `\
Draw.io Desktop is a professional diagramming application for creating \
flowcharts, UML diagrams, network diagrams, ER diagrams, org charts, \
mind maps, and many other diagram types. It uses the mxGraph library \
internally and stores diagrams in an XML-based format.

== Core Concepts ==

Cells: Every element in a diagram is a "cell." There are two kinds:
  - Vertex (shape): A rectangular, circular, or custom-shaped node.
  - Edge (connection): A line or arrow connecting two vertices.
Each cell has a unique auto-generated ID, a text label, geometry \
(position + size for vertices, control points for edges), and a style string.

Layers: Diagrams can have multiple layers for logical grouping. \
New cells are added to the active layer. Use layers to organize \
related elements (e.g., "Infrastructure," "Labels," "Annotations").

Pages: A single .drawio file can contain multiple pages (tabs), \
each with its own independent set of cells and layers.

Styles: Every cell carries a style string — a semicolon-separated \
list of key=value pairs that controls its visual appearance.
Example: fillColor=#dae8fc;strokeColor=#6c8ebf;rounded=1;whiteSpace=wrap;html=1;

== Common Style Keys ==

  fillColor     — Background fill color (hex, e.g. #dae8fc)
  strokeColor   — Border / line color (hex, e.g. #6c8ebf)
  fontColor     — Text color (hex, e.g. #333333)
  fontSize      — Text size in points (e.g. 12)
  fontStyle     — Bitmask: 1=bold, 2=italic, 4=underline (combine by adding)
  rounded       — 1 for rounded corners, 0 for sharp
  shape         — Named shape identifier (e.g. mxgraph.flowchart.decision)
  whiteSpace    — Set to "wrap" to enable text wrapping
  html          — Set to 1 to allow HTML markup in labels
  edgeStyle     — Edge routing algorithm (orthogonalEdgeStyle, elbowEdgeStyle, etc.)
  endArrow      — Arrowhead at target end (classic, block, open, diamond, none)
  startArrow    — Arrowhead at source end (same options as endArrow)

== Recommended Workflow ==

1. Orientation — Start every session with get-diagram-info to learn the \
current file name, page count, cell count, layers, and diagram bounds.

2. Inspect — Use list-paged-model to browse existing cells. Filter by \
cell_type (vertex, edge, layer, group) or by parent/layer IDs to narrow \
results. Cell IDs are auto-generated; always discover them via this tool \
rather than guessing.

3. Build incrementally — Add one shape at a time with add-rectangle or \
add-cell-of-shape, then verify placement with list-paged-model before \
adding the next element. This avoids overlapping shapes and misaligned edges.

4. Visual verification — Call get-diagram-screenshot after every 3-5 \
modifications to confirm the layout matches expectations. This returns \
the diagram XML so you can reason about spatial relationships.

5. Browse the shape library — Use get-shape-categories to list all \
available categories, then get-shapes-in-category to see the shapes in \
a category, and finally add-cell-of-shape to place one. Use \
get-shape-by-name if you already know the shape name.

6. Connect elements — Use add-edge with source and target cell IDs. \
Customize routing with the edgeStyle property in the style string.

7. Organize with layers — Use list-layers and create-layer to manage \
layers. Set the active layer with set-active-layer before adding cells, \
or move existing cells with move-cell-to-layer.

8. Edit in place — Use edit-cell to update vertex properties (position, \
size, text, style) and edit-edge to update edge properties (endpoints, \
label, style). Use set-cell-data for custom attributes.

== Common Diagram Patterns ==

Flowcharts:
  Use rectangles for process steps, diamond shapes (shape=rhombus) for \
  decisions, and edges with orthogonalEdgeStyle for clean routing. \
  Label edges with "Yes"/"No" at decision points.

Sequence Diagrams:
  Create tall narrow rectangles as vertical lifelines. Use horizontal \
  edges for messages between lifelines. Position elements carefully \
  using Y coordinates to preserve message ordering.

ER Diagrams:
  Use rectangles for entities, listing attribute names as the label text. \
  Connect entities with edges and label the relationship and cardinality \
  (1, N, M) on each end.

Network Diagrams:
  Browse the shape library for built-in network icons — cloud, server, \
  router, switch, firewall, database, laptop, etc. Use \
  get-shape-categories to find the networking category, then place \
  shapes with add-cell-of-shape.

== Tips ==

- HTML label rendering (html=1) is enabled by default on all new cells. \
  You can use HTML in labels: <b>bold</b>, <i>italic</i>, <br> for \
  line breaks, <font color="#red">colored text</font>, etc.
- Always provide a style string when you want a specific look; the \
  defaults are generic.
- For edge routing, orthogonalEdgeStyle produces right-angle connectors; \
  leave edgeStyle unset for straight lines.
- Combine fontStyle values: bold + italic = 3, bold + underline = 5.
- When positioning shapes, leave ~40-60px gaps between elements for \
  readability and clean edge routing.

== Color Palette — Dark Mode Friendly ==

The app supports dark mode (auto-detected from system theme). Always use \
colors that work well on BOTH light and dark backgrounds. Avoid very \
light fills (like #ffffff or #f5f5f5) as they look harsh in dark mode.

Recommended fill/stroke pairs (designed for both themes):
  Blue:    fillColor=#1e3a5f  strokeColor=#4a90d9  fontColor=#e0e0e0
  Green:   fillColor=#1b4332  strokeColor=#52b788  fontColor=#e0e0e0
  Red:     fillColor=#5c1a1a  strokeColor=#e06666  fontColor=#e0e0e0
  Yellow:  fillColor=#4a3f10  strokeColor=#d4a843  fontColor=#e0e0e0
  Purple:  fillColor=#2d1b4e  strokeColor=#9b72cf  fontColor=#e0e0e0
  Teal:    fillColor=#134e4a  strokeColor=#2dd4bf  fontColor=#e0e0e0
  Gray:    fillColor=#2d2d2d  strokeColor=#888888  fontColor=#e0e0e0
  Orange:  fillColor=#4a2c10  strokeColor=#e09850  fontColor=#e0e0e0

For edges, use mid-brightness stroke colors like #888888 or #aaaaaa.
For text labels on edges, use fontColor=#cccccc.
For container/group backgrounds, use semi-transparent dark fills like \
  fillColor=#1a1a2e with strokeColor=#444444 and dashed=1.
For title text, use fontColor=#e0e0e0.

These colors have sufficient contrast on both light (#ffffff) and dark \
(#1e1e1e) canvas backgrounds. Prefer these over the legacy draw.io \
palette (like #dae8fc, #d5e8d4) which looks washed out in dark mode.
`;
