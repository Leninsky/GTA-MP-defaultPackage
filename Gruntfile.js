/**
 * @overview Gruntfile
 * @author Jannis 'Cludch' Lehmann
 * @copyright (c) Cludch
 * @license See LICENSE file
 */

'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            compile: {
                options: {
                    loose: ["es6.classes"]
                },
                files: {
                    'src/config.js': 'config.js',
                    'src/main.js': 'main.js',
                    // CLASSES
                    'src/classes/CCommandManager.js': 'classes/CCommandManager.js',
                    'src/classes/CDatabaseManager.js': 'classes/CDatabaseManager.js',
                    'src/classes/CEventManager.js': 'classes/CEventManager.js',
                    'src/classes/CMain.js': 'classes/CMain.js',
                    'src/classes/CManager.js': 'classes/CManager.js',
                    'src/classes/CUtility.js': 'classes/CUtility.js',
                    // COMMANDS
                    'src/commands/commands.js': 'commands/commands.js',
                    'src/commands/playerCommands.js': 'commands/playerCommands.js',
                    // EVENTS
                    'src/events/ChatCommand.js': 'events/ChatCommand.js',
                    'src/events/ChatMessage.js': 'events/ChatMessage.js',
                    'src/events/eventMain.js': 'events/eventMain.js',
                    // SCHEMAS
                    'src/schemas/accountSchema.js': 'schemas/accountSchema.js',
                    'src/schemas/schemas.js': 'schemas/schemas.js'
                }
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['babel']);
};
