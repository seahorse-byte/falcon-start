#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory of the current script to locate the template folder.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  
  const FALCON_ART = `
    ⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
  ⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
  ⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
  ⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
  ⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
  ⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀Welcome to FalconJS
  `;

  console.log(FALCON_ART);

  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your new project?',
      validate: (input) => {
        if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
        return 'Project name may only include letters, numbers, underscores and hashes.';
      },
      default: 'my-falcon-app',
    },
  ]);

  const targetDir = path.join(process.cwd(), projectName);
  const templateDir = path.join(__dirname, 'template');

  if (fs.existsSync(targetDir)) {
    console.error(`\n❌ Directory "${projectName}" already exists.`);
    return;
  }

  console.log(`\nCreating a new FalconJS app in ${targetDir}...`);

  try {
    // Copy the entire template directory to the new project folder.
    await fs.copy(templateDir, targetDir);

    console.log('\n✅ Success! Your new project is ready.');
    console.log('\nNext steps:');
    console.log(`  cd ${projectName}`);
    console.log('  npm install');
    console.log('  npm run dev');
  } catch (error) {
    console.error('\n❌ An error occurred while creating the project:');
    console.error(error);
  }
}

run();
