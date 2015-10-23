/**
* @overview Commands initiator
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

import playerCommands from './playerCommands';

/**
 * Registers the default commands and calls the other register functions
 * @return {void}
 */
export default function() {
    playerCommands();

    gm.manager.CCommandManager.add('help', function(player) {
        player.SendChatMessage('All commands - /name');
    });
}
