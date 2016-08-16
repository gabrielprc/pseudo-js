var parser = require('./src/parser/pseudo.js');
var escodegen = require('escodegen');

/**
 * Pseudocode-to-Javascript compiler.
 * @exports pseudo-js
 */
var pseudoParser = {
	/**
	 * Returns the Javascript-compatible abstract syntax tree
	 * for the given pseudocode.
	 * See {@link https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API|Mozilla's Parser API}.
	 *
	 * @param {string} string - String to copy.
	 */
	parseToSyntaxTree: function(parsable) {
		return parser.parse(parsable);
	},

	parseToJS: function(parsable) {
		var syntaxTree = this.parseToSyntaxTree(parsable);
		return escodegen.generate(syntaxTree);
	}
};

module.exports = pseudoParser;