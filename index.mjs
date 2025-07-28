#!/usr/bin/env node

import { readdirSync, existsSync, readFileSync, writeFileSync } from "fs";
import { cwd } from "process";
// import AdmZip from "adm-zip";

// creating archives
// const zip = new AdmZip();

for(const file of readdirSync(cwd(), { withFileTypes: true })) {
    // add to zip
    // console.log(`Processing file: ${file.name}`);
    if (file.name.startsWith('.')) {
        console.log(`Skipping hidden file: ${file.name}`);
        continue;
    }

    if (!file.isFile()) {
        zip.addLocalFile(file.name);
    } else {
        zip.addLocalDirectory(file.name);
    }
}
