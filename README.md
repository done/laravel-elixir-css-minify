# laravel-elixir-css-minify
Elixir (Laravel 5.1) Gulp wrapper for gulp-minify-css. Mainly used for deploy/production.

## Usage
Install the package as a development dependency:

```sh
$ npm install laravel-elixir-css-minify --save-dev
````

Add it to your gulpfile.js:

```javascript
require('laravel-elixir-css-minify');
	
elixir(function(mix) {
	mix.minify([src, outputDir, options]);
});
```
## API
#### src
Type: `String` or `Array`

The folder where to look for files
Default is set to `Elixir.config.css.outputFolder + '/*.css'`.


#### outputDir 
Type: `String`

The directory to put the minfied files in. Default is set to the same as the output folder defined in the Elixir configuration `Elixir.config.css.outpuDir`.
                
#### options
Type: `Object`

Options/settings for minify which will extend the default options.
