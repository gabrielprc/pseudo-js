var pseudo = require('../../pseudo');
var stringUtils = require('../../src/utils/string-utils');

describe('Iteration', function () {

	var input, output, expected;

    it('should return \'for ...\' ', function () {

        input = 'por cada(e en elementos){}';
        output = pseudo.parseToJS(input);
        output = stringUtils.reduceMultipleWhitespaces(
        	stringUtils.removeWhitespacesNotBetweenWords(output)
        );

        expected = 'for (e in elementos){}';
        expected = stringUtils.reduceMultipleWhitespaces(
        	stringUtils.removeWhitespacesNotBetweenWords(expected)
        );

        expect(output).toEqual(expected);
    });
});