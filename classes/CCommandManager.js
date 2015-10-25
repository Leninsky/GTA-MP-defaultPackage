/**
* @overview CCommandManager
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

import CManager from './CManager';

import commands from '../commands/commands';

/**
* Command manager
*/
export default class CCommandManager extends CManager {
    /**
    * Prepares the command manager
    * @return {void}
    */
    constructor() {
        super();

        /**
        * Map will hold all commands
        * @type {Map}
        */
        this.commands = new Map();
    }

    /**
    * Adds a new command
    * @param {String} name the command name, i.e. /help
    * @param {Function} commandFunction function to be called when the command gets called
    * @return {void}
    */
    add(name, commandFunction) {
        if(this.commands.has(name)) {
            this.log(`${name} already exists`);
            return;
        }

        this.commands.set(name, commandFunction);
        this.log(`${name} has been added`);
    }

    /**
    * Called by the ChatCommand event
    * @param {Player} player the player who called the event
    * @param {String} command the command
    * @param {Array<string>} args the arguments
    * @return {void}
    */
    manage(player, command, args) {
        let lowerCommand = command.toLowerCase();

        if(this.commands.has(lowerCommand)) {
            let cmd = this.commands.get(lowerCommand);
            cmd(player, args);
        } else {
            return false;
        }
    }

    /**
    * Initiates the commands
    * @return {Promise} A promise
    */
    init() {
        return new Promise(function(resolve, reject) {
            commands();

            resolve();
        });
    }
}
