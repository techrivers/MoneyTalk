# Project Setup

This guide will walk you through the steps to set up and run this project locally.

## Prerequisites

Before you begin, ensure you have the following installed:

*   Node.js (LTS version recommended)
*   npm (usually comes with Node.js)
*   Git

## Getting Started

1.  **Clone the repository:**
```
bash
    git clone <repository_url>
    cd <project_directory>
    
```
Replace `<repository_url>` with the actual URL of the repository and `<project_directory>` with the name of the cloned directory.

2.  **Install dependencies:**

    Navigate to the project directory and install the necessary dependencies using npm:
```
bash
    npm install
    
```
This command reads the `package.json` file and installs all the listed dependencies.

3.  **Start the development server:**

    Once the dependencies are installed, you can start the development server. Refer to the `package.json` file for the specific script to start the server. Common script names include `dev`, `start`, or `serve`.

    For example, if the `package.json` has a `dev` script, you would run:
```
bash
    npm run dev
    
```
If the script is `start`, you would run:
```
bash
    npm start
    
```
The development server should now be running, and you can access the project in your web browser, typically at `http://localhost:3000`.

## Available Scripts

Refer to the `package.json` file for a complete list of available npm scripts and their descriptions.

## Environment Variables (Webhook URL)

To manage sensitive information and environment-specific configurations like the webhook URL, create a file named `.env.local` in the root directory of the project.

Add the webhook URL to this file in the following format:

NEXT_PUBLIC_WEBHOOK_URL=https://www.google.com


Refer to the `package.json` file for a complete list of available npm scripts and their descriptions.

## Building for Production

To build the project for production, you typically use a build script defined in `package.json`. A common script name is `build`:
```
bash
npm run build
```
This will create optimized production-ready files, usually in a `dist` or `build` directory.

## Further Information

*   Consult the `package.json` file for specific project scripts and configurations.
*   Refer to the `docs/blueprint.md` for project blueprint information.