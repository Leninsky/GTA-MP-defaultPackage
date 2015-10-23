/**
* @overview Package entry point
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

import CMain from'./classes/CMain';

/**
* @namespace
* @type {Object}
*/
global.gm = {
    config: require('./config'),
    manager: {},
    utility: require('./classes/CUtility')
};

CMain.init().then(function() {
    gm.utility.log('\x1b[32mServer started\x1b[0m');
}, function(err) {
    gm.utility.log(`\x1b[31m${err}`);
    process.exit(1);
});
