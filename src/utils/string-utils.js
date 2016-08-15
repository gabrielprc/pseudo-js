var utils = {
	removeWhitespacesNotBetweenWords: function(string) {
		return string.replace(/\s+(?=\W)/g, '');
	},

	reduceMultipleWhitespaces: function(string) {
		return string.replace(/\s+/g, ' ');
	}
}

module.exports = utils;