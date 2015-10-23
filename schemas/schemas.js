/**
* @overview Schema initiator
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

import accountSchema from './accountSchema';

/**
 * Calls the schema register functions
 * @return {void}
 */
export default function() {
    accountSchema();
}
