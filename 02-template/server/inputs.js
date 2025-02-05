const prompt = require('prompt');
const config = require('./config');

prompt.start();

/**
 * The handleError function logs an error message and exits the process with an error code.
 * @param err {Error} The error object.
 */
const handleError = (err) => {
    console.error('Error:', err);
    process.exit(1);
};

/**
 * asynchronous function that prompts the user for input based on the
 * specified properties and returns a promise with the user's input.
 * @param properties - The `properties` parameter in the `getInput` function is an object that contains
 * the properties or fields that you want to prompt the user for input.
 * @returns The function is returning a Promise.
 */
const getInput = async (properties) => {
    return new Promise((resolve, reject) => {
        prompt.get(properties, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};


/**
 * The function `getAppNameInput` uses `inquirer` to prompt the user for an app instance and returns
 * the user's input.
 * @returns {Promise<string>} App instance name.
 */
const getAppNameInput = async () => {
    try {
        const result = await getInput(config.promptProps.appInstance);
        return result.appInstance;
    } catch (err) {
        handleError(err);
    }
};

/**
 * The function `getPortInput` uses `inquirer` to prompt the user for a port input and returns the port
 * value entered by the user.
 * @returns {Promise<number>} Port number.
 */
const getPortInput = async () => {
    try {
        const result = await getInput(config.promptProps.port);
        return result.port;
    } catch (err) {
        handleError(err);
    }
};

module.exports = { getAppNameInput, getPortInput };
