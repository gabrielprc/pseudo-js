/**
 * Function utils module.
 * @exports function-utils
 */
var utils = {
	/**
	 * Returns a new string replacing <fun> invocations
	 * with <repl> invocations
	 *
	 * @param {string} code - Code in which to replace invocations.
	 */
	replaceFunction: function(code, fun, repl) {
		var pattern = '(?=[^\\b])' + fun + '(?=\\()'
		var regex = new RegExp(pattern, 'ig');

		return code.replace(regex, repl);
	}
}

module.exports = utils;