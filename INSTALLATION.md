# Installation
A installation guide to get the code up and running.

## Requirements
- MongoDB instance
- STA/GTA-MP Server
- Brain.exe (you should already have it)

## Installation guide
- Run `npm install` in the root directory of the repository
- Run `npm install grunt-cli babel -g` to install required tools globally
- Move the `config.example.js` to `config.js`
- Check the `config.js` to configure the application
- Run `grunt` to transpile the ES6 code into working ES5 Code
- Copy the `node_modules` and the content of the `src` directory into a new folder
- Copy the new folder into your server `packages` folder
-
## Optional
 - Run `esdoc -c esdoc.json` in the root directory of the repository to generate the latest documentation
