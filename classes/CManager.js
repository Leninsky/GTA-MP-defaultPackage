/**
* @overview CManager
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

/**
 * Manager template
 */
export default class CManager {
    /**
     * Logs a message with the class name in brackets
     * @param {String} message the message to be logged
     * @return {void}
     */
    log(message) {
        gm.utility.log(`[${this.constructor.name}] ${message}`);
    }
};
