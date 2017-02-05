var parser = require('./src/parser/pseudo.js');
var escodegen = require('escodegen');

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

module.exports = pseudo;