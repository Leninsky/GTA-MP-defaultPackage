/**
* @overview CDatabase
* @author Jannis 'Cludch' Lehmann
* @copyright (c) Cludch
* @license See LICENSE file
*/

'use strict';

import CManager from './CManager';

import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

import schemas from'../schemas/schemas';

/**
 * Database Manager
 */
export default class CDatabaseManager extends CManager {
    /**
    * Prepares the database manager
    * @return {void}
    */
    constructor() {
        super();

        /**
         * Map will hold all initialized schemas
         * @type {Map}
         */
        this.schemas = new Map();

        /**
         * Will hold the initialized auto increment plugin
         * @type {Object}
         * @default false
         */
        this.autoIncrement = autoIncrement;
    }

    /**
    * Initialises the database connection
    * @return {Promise} A promise
    */
    init() {
        return new Promise(function(resolve, reject) {
            // Pass the resolve function to the CDatabase constructor
            // to call them from inside
            gm.manager.CDatabaseManager.log('Trying to establish a database connection...');

            /**
             * Current database connection
             * @type {Object}
             */
            gm.manager.CDatabaseManager.connection = mongoose.connect(`mongodb://${gm.config.mongo.user}:${gm.config.mongo.pass}@${gm.config.mongo.ip}:${gm.config.mongo.port}/${gm.config.mongo.db}`).connection;

            gm.manager.CDatabaseManager.connection.on('error', function(err) {
                reject(err);
            });

            gm.manager.CDatabaseManager.connection.once('open', function() {
                gm.manager.CDatabaseManager.log('Established a database connection');

                gm.manager.CDatabaseManager.autoIncrement.initialize(gm.manager.CDatabaseManager.connection);

                // Initialize the schemas
                gm.manager.CDatabaseManager.initSchemas();

                resolve();
            });
        });
    }

    /**
     * Adds a schema
     * @param {String} name schema name, i.e. Player
     * @param {Function} schema schema ready to activate using mongoose.model
     * @return {void}
     */
    addSchema(name, schema) {
        if(this.schemas.has(name)) {
            this.log(`${name} schema already exists`);
            return;
        }

        this.schemas.set(name, mongoose.model(name, schema));
        this.log(`${name} schema has been added`);
    }

    /**
    * Initates the database schemas
    * @return {void}
    */
    initSchemas() {
        this.log('Starting database schema inititation...');

        // Call register function
        schemas();

        this.log('Finished database schema initiation');
    }
};
