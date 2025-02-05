# React-App Generator 🩵

This project is a command-line interface (CLI) tool built with Node.js that generates an application based on a predefined template. It automatically replaces placeholders in specific files, customizing them with an application name, port, and prefix derived from the name.

## 🚀 Features

- Generates a project structure from a template.
- Replaces placeholders in key files (`package.json`, `README.md`, `index.html`, etc.).
- Dynamically captures the application name and port through the CLI.
- Deletes and regenerates the `generated` directory on each run.

## 📦 Installation

Make sure you have [Node.js](https://nodejs.org/) installed on your system. Then, clone this repository and install dependencies:

```sh
git clone <REPO_URL>
cd <REPOSITORY_NAME>
npm install
```

## 🛠️ Usage

Run the following command to generate a new application:

```sh
node server/index.js
```

The script will prompt you to enter:

- **Application name**: This will be the base identifier for the generated application.
- **Application port**: This will be used in configuration files.

Once completed, the generated files will be located in the `generated/{app_name}` directory.

## 📂 Project Structure

```
📂 project
 ├── 📂 generated/           # Directory where generated applications are stored
 ├── 📂 template/            # Base template for app generation
 ├── 📂 server/              # Configuration to generate app
    ├── 📜 index.js             # Main script for the generator
    ├── 📜 inputs.js            # Functions to capture user input
    ├── 📜 config.js            # Configuration to capture user input
 ├── 📜 package.json         # Project configuration
 ├── 📜 README.md            # Documentation
 ├── 📜 .gitignore           # Files ignored by Git
```

## ⚙️ How It Works

1. **Deletes** the contents of `generated/` before creating a new application.
2. **Copies** files from `template/` into the newly generated directory.
3. **Replaces** placeholders in key files (`package.json`, `README.md`, etc.) with:
   - `$$appInstance$$` → The application name entered by the user.
   - `$$port$$` → The port number defined by the user.
   - `$$prefix$$` → A prefix automatically generated from the application name.

## 📝 Notes

- Ensure that the `template/` folder contains the desired structure before running the script.
- You can customize the files to be modified in the `FILES_TO_REPLACE` variable inside `index.js`.
