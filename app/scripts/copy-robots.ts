// scripts/copy-robots.ts
import * as fs from 'fs';
import * as path from 'path';

const targetDir = path.join(process.cwd(), 'public');
const targetFile = path.join(targetDir, 'robots.txt');

// VERCEL_ENV is provided by Vercel
const vercelEnv: string | undefined = process.env.VERCEL_ENV;

let sourceFile: string;
let chosenEnvironment: string;

if (vercelEnv === 'production') {
  sourceFile = path.join(process.cwd(), 'robots.production.txt');
  chosenEnvironment = 'qa';
} else if (vercelEnv === 'preview') {
  sourceFile = path.join(process.cwd(), 'robots.qa.txt');
  chosenEnvironment = 'qa';
} else {
  // 'develop' or any other local environment
  sourceFile = path.join(process.cwd(), 'robots.develop.txt');
  chosenEnvironment = 'develop';
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

if (fs.existsSync(sourceFile)) {
  fs.copyFileSync(sourceFile, targetFile);
  console.log(
    `Copied ${path.basename(sourceFile)} to ${path.basename(targetFile)} for ${chosenEnvironment} environment.`,
  );
} else {
  console.warn(
    `Warning: Source robots file not found for ${chosenEnvironment} environment at ${sourceFile}. No robots.txt will be deployed.`,
  );
  // Optional: Create a default disallow if the specific file isn't found
  // fs.writeFileSync(targetFile, 'User-agent: *\nDisallow: /');
}
