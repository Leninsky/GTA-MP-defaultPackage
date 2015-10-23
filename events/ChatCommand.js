/**
* @overview ChatCommand event
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

/**
 * ChatCommand event function
 * @param {Player} player player object
 * @param {String} command the command
 * @return {void}
 */
export default function(player, command) {
    let args = command.match(/('(\\'|[^'])*'|"(\\"|[^"])*"|\/(\\\/|[^\/])*\/|[\w-]+)/g) || [];

    // Remove the commandName from the args array
    let commandName = args.splice(0, 1)[0];

    if (!gm.manager.CCommandManager.manage(player, commandName, args)) {
        player.SendChatMessage("Unknown command.", new RGB(255, 59, 59));
    }
}
