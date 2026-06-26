const promptFactory = require("prompt-sync");
const prompt = promptFactory(); 

const input = (message) => prompt(message);

module.exports = { input };