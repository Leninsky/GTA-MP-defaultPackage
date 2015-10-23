/**
* @overview CUtility
* @author Jannis "Cludch" Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

/**
 * Utility functions
 */
export default class CUtility {
    /**
     * Logs a message in a prettier way to the console
     * @param  {String} message message to log
     * @return {void}
     */
    static log(message) {
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        // If taller or equal 10 -> Add a 0 infront of the number
        hours = hours >= 10 ? hours : `0${hours}`;
        minutes = minutes >= 10 ? minutes : `0${minutes}`;
        seconds = seconds >= 10 ? seconds : `0${seconds}`;

        console.log(`[${hours}:${minutes}:${seconds}] ${message}`);
    }
};
