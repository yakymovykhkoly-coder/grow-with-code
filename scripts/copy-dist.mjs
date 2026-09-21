import {rmSync,mkdirSync,cpSync,readdirSync} from "node:fs";
import {join} from "node:path";
const out="dist"; rmSync(out,{recursive:true,force:true}); mkdirSync(out);
const skip=new Set(["dist","node_modules","src","tests","scripts",".git","README-v6.md","README.md","package-lock.json"]);
for(const name of readdirSync(".")){if(!skip.has(name))cpSync(name,join(out,name),{recursive:true});}
console.log("Built dist/");
