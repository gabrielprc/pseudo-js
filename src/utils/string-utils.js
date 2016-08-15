var utils = {
	removeWhitespacesNotBetweenWords: function(string) {
		return string.replace(/\s+(?=\W)/g, '');
	},

	reduceMultipleWhitespaces: function(string) {
		return string.replace(/\s+/g, ' ');
	},

	removeWhitespacesForJs: function(string) {
		return this.removeWhitespacesNotBetweenWords(this.reduceMultipleWhitespaces(string));
	}
}

module.exports = utils;