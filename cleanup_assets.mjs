import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirsToScan = [
    path.join(__dirname, 'src'),
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'public', 'assets', 'css'),
    path.join(__dirname, 'public', 'assets', 'js')
];

let allText = '';

function readFilesRecursively(dir) {
    if (!fs.existsSync(dir)) return;
    const stat = fs.statSync(dir);
    if (stat.isFile()) {
        try {
            allText += fs.readFileSync(dir, 'utf8') + '\n';
        } catch (e) { }
    } else if (stat.isDirectory()) {
        const files = fs.readdirSync(dir);
        for (let file of files) {
            readFilesRecursively(path.join(dir, file));
        }
    }
}

for (const dir of dirsToScan) {
    readFilesRecursively(dir);
}

const publicDir = path.join(__dirname, 'public');
const allPublicFiles = [];

function getPublicFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (let file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getPublicFiles(fullPath);
        } else {
            allPublicFiles.push(fullPath);
        }
    }
}
getPublicFiles(publicDir);

const unused = [];
const protectedFiles = ['favicon.ico', 'robots.txt', 'manifest.json', 'vite.svg'];

for (const file of allPublicFiles) {
    const basename = path.basename(file);
    if (protectedFiles.includes(basename)) continue;

    // Some assets might be imported dynamically or constructed, but since this is a static HTML template converted to React,
    // most image names are explicitly written in JS / JSX / CSS.
    // So we do a simple string matching of the basename.
    if (!allText.includes(basename)) {
        unused.push(file);
    }
}

console.log(`Found ${unused.length} unused files.`);

if (unused.length > 0) {
    const psScriptPath = path.join(__dirname, 'recycle_temp.ps1');
    let psCode = 'Add-Type -AssemblyName Microsoft.VisualBasic\n';
    for (const u of unused) {
        // escape single quotes in path if any
        const safePath = u.replace(/'/g, "''");
        psCode += `[Microsoft.VisualBasic.FileIO.FileSystem]::DeleteFile('${safePath}', 'OnlyErrorDialogs', 'SendToRecycleBin')\n`;
    }
    fs.writeFileSync(psScriptPath, psCode);

    try {
        console.log("Moving unused files to Recycle Bin...");
        execSync(`powershell -ExecutionPolicy Bypass -File "${psScriptPath}"`, { stdio: 'inherit' });
        console.log("Successfully moved files to Recycle Bin.");
    } catch (e) {
        console.error("Failed to move to recycle bin: ", e);
    } finally {
        if (fs.existsSync(psScriptPath)) {
            fs.unlinkSync(psScriptPath);
        }
    }
} else {
    console.log("No unused files to clean up.");
}
