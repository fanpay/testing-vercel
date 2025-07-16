"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// scripts/copy-robots.ts
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const targetDir = path.join(process.cwd(), 'public');
const targetFile = path.join(targetDir, 'robots.txt');
// VERCEL_ENV is provided by Vercel
const vercelEnv = process.env.VERCEL_ENV;
let sourceFile;
let chosenEnvironment;
if (vercelEnv === 'production') {
    sourceFile = path.join(process.cwd(), 'robots.production.txt');
    chosenEnvironment = 'qa';
}
else if (vercelEnv === 'preview') {
    sourceFile = path.join(process.cwd(), 'robots.qa.txt');
    chosenEnvironment = 'qa';
}
else {
    // 'develop' or any other local environment
    sourceFile = path.join(process.cwd(), 'robots.develop.txt');
    chosenEnvironment = 'develop';
}
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}
if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, targetFile);
    console.log(`Copied ${path.basename(sourceFile)} to ${path.basename(targetFile)} for ${chosenEnvironment} environment.`);
}
else {
    console.warn(`Warning: Source robots file not found for ${chosenEnvironment} environment at ${sourceFile}. No robots.txt will be deployed.`);
    // Optional: Create a default disallow if the specific file isn't found
    // fs.writeFileSync(targetFile, 'User-agent: *\nDisallow: /');
}
