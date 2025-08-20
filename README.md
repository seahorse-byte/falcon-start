# 🦅 falcon-start

The official command-line tool to create a new FalconJS project.

This tool sets up a complete, pre-configured project with a development server, build process, and a showcase application, allowing you to start building with FalconJS in seconds.

Quick Start
To create a new FalconJS app, open your terminal and run:

# npm 7+
npm create falcon-start

# Using an older npm version
npx falcon-start

The command will prompt you for a project name and then generate a new directory with the following structure:

/my-falcon-app
├── package.json
├── vite.config.js
├── index.html
├── style.css
└── /src
    └── ... (FalconJS source files)
└── /examples
    └── app.js (The showcase application)

Development Workflow
Once the project is created, navigate into the new directory and follow these steps:

Install Dependencies:

cd my-falcon-app
npm install

Start the Development Server:

npm run dev

This will start a Vite development server with Hot Module Replacement (HMR) for a fast and efficient development experience.

Build for Production:
When you're ready to deploy, you can build the optimized version of the FalconJS library itself:

npm run build

License
falcon-start is open-source and licensed under the MIT License.