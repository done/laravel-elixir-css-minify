'use strict';

/**
 * Imports
 * 
 */

var Elixir = require('laravel-elixir');
var gulp = require('gulp');
var minify = require('gulp-minify-css');
var _ = require('underscore');

/**
 * Minify task
 *
 * @param {String} src
 * @param {String} outputDir The directory to put the minfied files in. Default
 *                           is set to the same as the output folder defined in
 *                           the Elixir configuration.
 * @param {Object} options Options/settings for minify which will extend the default
 *                         options.
 * @description Minifies all the css files in the Elixir.config.css.outputFolder.
 *              Mainly to be run in production mode.
 * 
 */
Elixir.extend('minify', function(src, outputDir, options) {
 
	src = src || Elixir.config.css.outputFolder + '/*.css';
	outputDir = outputDir || Elixir.config.css.outputFolder; 
 	options = _.extend({keepSpecialComments: 0}, options);
 
	var task = new Task('minify', function() {

		gulp.src(src)
			.pipe(minify(options))
			.pipe(gulp.dest(outputDir));
		
	});
 
 	// Return the task for method chaining
	return task;
 
});
