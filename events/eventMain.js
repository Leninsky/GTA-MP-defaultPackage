/**
* @overview Events initiator
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

import ChatCommand from './ChatCommand';
import ChatMessage from './ChatMessage';

/**
 * Registers the events
 * @return {void}
 */
export default function() {
    gm.manager.CEventManager.add('ChatCommand', ChatCommand);
    gm.manager.CEventManager.add('ChatMessage', ChatMessage);
}
