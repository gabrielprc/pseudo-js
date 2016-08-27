var pseudo = require('../../pseudo');
var stringUtils = require('../../src/utils/string-utils');

describe('Function', function () {

	var input, output, expected;

    it('should return \'return\' ', function () {

        input = 'devolver';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'return;';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'return...\' ', function () {

        input = 'devolver 1';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'return 1;';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'return...\' ', function () {

        input = 'devolver variable';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'return variable;';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'return...\' ', function () {

        input = 'devolver a igual b';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'return a == b;';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });
    
});