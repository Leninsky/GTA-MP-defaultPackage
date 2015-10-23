/**
* @overview Package entry point class - CMain
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

import CCommandManager from './CCommandManager';
import CDatabaseManager from './CDatabaseManager';
import CEventManager from './CEventManager';

/**
 * Initializes the server and its components
 */
export default class CMain {
    /**
    * Initialises the game mode
    * @return {Promise} A Promise
    */
    static init() {
        let promises = [];

        gm.utility.log("------- GTA-MP Default Package ------");
        gm.utility.log("- Copyright (C) 2015 Jannis Lehmann -");
        gm.utility.log("-           Author: Cludch          -");
        gm.utility.log("-          Contributors : /         -");
        gm.utility.log("-------------------------------------");
        gm.utility.log('Server starting...');

        gm.manager.CCommandManager = new CCommandManager();
        gm.manager.CDatabaseManager = new CDatabaseManager();
        gm.manager.CEventManager = new CEventManager();

        promises.push(gm.manager.CCommandManager.init());
        promises.push(gm.manager.CDatabaseManager.init());
        promises.push(gm.manager.CEventManager.init());

        return new Promise(function(resolve, reject) {
            Promise.all(promises).then(function() {
                resolve();
            }, function(err) {
                reject(err);
            });
        });
    }
};
