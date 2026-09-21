import {writeFileSync} from "node:fs";
const api=(process.env.VITE_API_BASE_URL || "/api").replace(/\/+$/,"");
writeFileSync("config.js", `window.__GWC_API_BASE__=${JSON.stringify(api)};\nwindow.GWC_CONFIG=Object.freeze({API_BASE:window.__GWC_API_BASE__});\n`);
console.log("Generated public config for", api);
