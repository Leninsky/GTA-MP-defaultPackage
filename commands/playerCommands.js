/**
* @overview Player commands initiator
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

/**
 * Registers the player commands
 * @return {void}
 */
export default function() {
    gm.manager.CCommandManager.add('name', function(player) {
        player.SendChatMessage(`Your name: ${player.name}`);
    });
};
