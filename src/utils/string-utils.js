var utils = {
	removeWhitespacesNotBetweenWords: function(string) {
		return string.replace(/\s+(?=\W)/g, '');
	},

	reduceMultipleWhitespaces: function(string) {
		return string.replace(/\s+/g, ' ');
	},

	removeWhitespacesForJs: function(string) {
		return this.removeWhitespacesNotBetweenWords(this.reduceMultipleWhitespaces(string));
	},

	test: function() {
		// This is just a test method
		var a = 1;
	}
}

module.exports = utils;