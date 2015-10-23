/**
* @overview CEventManager
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

import CManager from './CManager';

import eventMain from '../events/eventMain';

/**
 * Event manager
 */
export default class CEventManager extends CManager {
    /**
     * Constructor which does basically nothing
     * @return {void}
     */
    constructor() {
        super();
    }

    /**
     * Adds a new event
     * @param {String} name Event name
     * @param {Function} eventFunction function to be called when the event gets called
     * @return {void}
     */
    add(name, eventFunction) {
        events.Add(name, eventFunction);

        this.log(`${name} has been added`);
    }

    /**
     * Initiates the events
     * @return {Promise} A promise
     */
    init() {
        return new Promise(function(resolve, reject) {
            eventMain();

            resolve();
        });
    }
}
