const { getAppNameInput, getPortInput } = require("./inputs");
const fse = require("fs-extra");
const rimraf = require("rimraf");

let appInstance = "";
let appPort = 4200;

const generatedFolder = "./generated";
let generatedAppDir = "";
let appPrefix = "";

function prepareAppFiles() {
  generatedAppDir = generatedFolder + "/" + appInstance;
  appPrefix = appInstance.match(/\b(\w)/g).join("");
  try {
    rimraf.sync(generatedFolder); // deletes all content
    fse.copySync("./template", generatedAppDir);
    replaceConfigFiles();
  } catch (error) {
    console.log("Error when removing generated directory. Is directory busy?");
    process.exit(1);
  }
}

function replaceConfigFiles() {
  replaceOcurrences("/package.json");
  replaceOcurrences("/README.md");
  replaceOcurrences("/index.html");
  replaceOcurrences("/src/pages/HomePage.tsx");
  replaceOcurrences("/src/pages/HomePage.test.tsx");
  console.log(
    "App was created  successfully, copy contents of 'generated' folder into your new repo and you're ready to rock!"
  );
}

function replaceOcurrences(fileName) {
  const toBeReplacedText = /\$\$appInstance\$\$/g;
  const portReplacement = /\$\$port\$\$/g;
  const prefixReplacement = /\$\$prefix\$\$/g;
  const currentFile = generatedAppDir + fileName;
  try {
    const fileContent = fse.readFileSync(currentFile, "utf8");
    const replacedContents = fileContent
      .replace(toBeReplacedText, appInstance)
      .replace(portReplacement, appPort)
      .replace(prefixReplacement, appPrefix);
    fse.outputFileSync(currentFile, replacedContents);
  } catch (error) {
    console.log("---Error when replacing occurrences in " + fileName);
    console.log(error);
    process.exit(1);
  }
}

const main = async () => {
  appInstance = await getAppNameInput();
  appPort = await getPortInput();

  prepareAppFiles();

  console.log(`App Instance: ${appInstance}, Port: ${appPort}`);
};

main();
