/**
 * @overview Babel task for Grunt
 * @author Jannis 'Cludch' Lehmann
 * @copyright (c) Cludch
 * @license See LICENSE file
 */
'use strict';

let path = require('path');
let babel = require('babel-core');

module.exports = function(grunt) {
    grunt.registerMultiTask('babel', 'Transpile ES6 to ES5', function() {
        let options = this.options();

        this.files.forEach(function(el) {
            delete options.filename;
            delete options.filenameRelative;

            options.sourceFileName = path.relative(path.dirname(el.dest), el.src[0]);
            if (process.platform === 'win32') {
                options.sourceFileName = options.sourceFileName.replace(/\\/g, '/');
            }
            options.sourceMapTarget = path.basename(el.dest);

            let res = babel.transformFileSync(el.src[0], options);

            let sourceMappingURL = '';
            if (res.map) {
                sourceMappingURL = '\n//# sourceMappingURL=' + path.basename(el.dest) + '.map';
            }

            grunt.file.write(el.dest, res.code + sourceMappingURL + '\n');

            if (res.map) {
                grunt.file.write(el.dest + '.map', JSON.stringify(res.map));
            }
        });
    });
};
