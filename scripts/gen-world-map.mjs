// Generates the dotted world map used as the footer background.
// Run: node scripts/gen-world-map.mjs
import DottedMap from "dotted-map";
import { writeFileSync } from "node:fs";

const map = new DottedMap({ height: 70, grid: "diagonal" });
// Highlight Dhaka, Bangladesh
map.addPin({ lat: 23.7337, lng: 90.4146, svgOptions: { color: "#ed1c24", radius: 0.6 } });
const svg = map.getSVG({
  radius: 0.22,
  color: "#ffffff",
  shape: "circle",
  backgroundColor: "transparent",
});

// Shrink output: hoist the shared fill onto a group
const compact = svg
  .replaceAll(' fill="#ffffff" />', "/>")
  .replace(/(<svg[^>]*>)/, '$1<g fill="#ffffff">')
  .replace("</svg>", "</g></svg>")
  .replace(/\n\s*/g, "");

writeFileSync(new URL("../public/images/world-map.svg", import.meta.url), compact);
console.log("world-map.svg written", compact.length, "bytes");
