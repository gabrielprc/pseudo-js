/**
 * String utils module.
 * @exports string-utils
 */
var utils = {
	/**
	 * Returns a new string without whitespaces between non-word symbols
	 * (characters not in the alphabet, such as parenthesis, brackets or commas).
	 *
	 * @param {string} string - String to copy.
	 */
	removeWhitespacesNotBetweenWords: function(string) {
		return string.replace(/\s+(?=\W)/g, '');
	},

	/**
	 * Returns a new string where multiple adjacent whitespaces are replaced by a single whitespace.
	 *
	 * @param {string} string - String to copy.
	 */
	reduceMultipleWhitespaces: function(string) {
		return string.replace(/\s+/g, ' ');
	},

	/**
	 * Returns a new string after applying {@link reduceMultipleWhitespaces} and {@link removeWhitespacesNotBetweenWords}.
	 *
	 * @param {string} string - String to copy.
	 */
	removeWhitespacesForJs: function(string) {
		return this.removeWhitespacesNotBetweenWords(this.reduceMultipleWhitespaces(string));
	}
}

module.exports = utils;