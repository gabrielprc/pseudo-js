var parser = require('./src/parser/pseudo.js');
var escodegen = require('escodegen');
var argv = require('minimist')(process.argv.slice(2));
var printSteps = process && process.env.NODE_ENV === "development";

/**
 * Pseudocode-to-Javascript compiler.
 * @exports pseudo-js
 */
var pseudo = {
	/**
	 * Returns the Javascript-compatible abstract syntax tree
	 * for the given pseudocode.
	 * See {@link https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API|Mozilla's Parser API}.
	 *
	 * @param {string} string - String to copy.
	 */
	compileToSyntaxTree: function(parsable) {
		return parser.parse(parsable);
	},

	compileToJS: function(parsable) {
		var syntaxTree = this.compileToSyntaxTree(parsable);
		return escodegen.generate(syntaxTree);
	}
};

if (!!argv.t) {
	console.log(pseudo.compileToJS(argv.t));
}

if (true) {
	console.log("Leyendo el pseudocódigo desde input.txt...\n...\n...");
	var fs = require("fs");
	fs.readFile("input.txt", "utf8", function(err, data) {
		if (err) throw err;
		console.log("Procesando el pseudocódigo...\n...\n...");
		var code = pseudo.compileToJS(data);
		fs.writeFile("output.txt", code, function(err) {
		    if(err) {
		        return console.log(err);
		    }
		    console.log("Proceso completo! Los resultados se guardaron en output.txt");
		});
	});
}

module.exports = pseudo;