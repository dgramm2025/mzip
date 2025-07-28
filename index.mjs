#!/usr/bin/env node

import { readdirSync } from "fs";
import path from "path";
import { cwd } from "process";
import AdmZip from "adm-zip";

const dirname = path.basename(cwd().replace('index.mjs', ''));

// creating archives
const zip = new AdmZip();

for(const file of readdirSync(cwd(), { withFileTypes: true })) {
    if ((file.isFile() || file.isDirectory()) && file.name.startsWith('.')) {
        console.log(`Skipping hidden file: ${file.name}`);
        continue;
    }

    if (file.isFile()) {
        zip.addLocalFile(file.name);
    } else {
        zip.addLocalFolder(file.name);
    }
}

zip.writeZip(`${dirname}.zip`);
