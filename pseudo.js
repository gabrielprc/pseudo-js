var parser = require('./src/parser/pseudo.js');
var escodegen = require('escodegen');

var PseudoParser = {};

PseudoParser.parseToSyntaxTree = function(parsable) {
	return parser.parse(parsable);
}

PseudoParser.parseToJS = function(parsable) {
	var syntaxTree = this.parseToSyntaxTree(parsable);
	return escodegen.generate(syntaxTree);
}


module.exports = PseudoParser;