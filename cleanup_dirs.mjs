import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, 'public');

let emptyDirs = [];

function findEmptyDirs(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    if (files.length === 0) {
        emptyDirs.push(dir);
    } else {
        for (let file of files) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                findEmptyDirs(fullPath);
            }
        }
        // After checking children, check again if this directory is now empty
        const postFiles = fs.readdirSync(dir);
        if (postFiles.length === 0 && !emptyDirs.includes(dir)) {
            emptyDirs.push(dir);
        }
    }
}

// Run finding
findEmptyDirs(publicDir);
// Run a second pass to catch parent directories that became empty after children were marked
emptyDirs = [];
findEmptyDirs(publicDir);

console.log(`Found ${emptyDirs.length} empty directories.`);

if (emptyDirs.length > 0) {
    const psScriptPath = path.join(__dirname, 'recycle_dirs.ps1');
    let psCode = 'Add-Type -AssemblyName Microsoft.VisualBasic\n';

    // Sort reverse alphabetically or by length to delete children before parents
    emptyDirs.sort((a, b) => b.length - a.length);

    for (const d of emptyDirs) {
        const safePath = d.replace(/'/g, "''");
        psCode += `
        if (Test-Path -LiteralPath '${safePath}') {
            [Microsoft.VisualBasic.FileIO.FileSystem]::DeleteDirectory('${safePath}', 'OnlyErrorDialogs', 'SendToRecycleBin', 'ThrowIfDirectoryNonEmpty')
        }\n`;
    }
    fs.writeFileSync(psScriptPath, psCode);

    try {
        console.log("Moving empty directories to Recycle Bin...");
        execSync(`powershell -ExecutionPolicy Bypass -File "${psScriptPath}"`, { stdio: 'inherit' });
        console.log("Successfully moved directories to Recycle Bin.");
    } catch (e) {
        console.error("Failed to move to recycle bin: ", e.message || e);
    } finally {
        if (fs.existsSync(psScriptPath)) {
            fs.unlinkSync(psScriptPath);
        }
    }
} else {
    console.log("No empty directories to clean up.");
}
