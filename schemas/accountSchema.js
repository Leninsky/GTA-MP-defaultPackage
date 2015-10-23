/**
* @overview Account database schema initiator
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

import mongoose from 'mongoose';

/**
 * Registers the account schema
 * @return {void}
 */
export default function() {
    let accountSchemaArray = {
        ID: {type: Number, required: true, index: {unique: true}},
        Username: {type: String, required: true, index: {unique: true}},
        Email: {type: String, required: true, index: {unique: true}},
        Password: {type: String, required: true},
        LastIP: {type: String, required: true},
        LastLogin: {type: Number, default: Date.now()},
        RegisterTimestamp: {type: Number, default: Date.now()},
        AdminLevel: {type: Number, default: 0},
        Warns: [
            {
                Warn: {type: Number, required: true},
                IssuerID: {type: Number, ref: 'Account', required: true},
                Timestamp: {type: Number, required: true, default: Date.now()},
            }
        ],
        Sanctions: [
            {
                Sanction: {type: Number, required: true},
                Timestamp: {type: Number, required: true, default: Date.now()},
                Duration: {type: Number, required: true},
            }
        ]
    };

    let accountSchema = mongoose.Schema(accountSchemaArray);

    // set up auto increment
    accountSchema.plugin(gm.manager.CDatabaseManager.autoIncrement.plugin, {
        model: 'Account',
        field: 'ID',
        startAt: 1,
        incrementBy: 1
    });

    gm.manager.CDatabaseManager.addSchema('Account', accountSchema);
};
