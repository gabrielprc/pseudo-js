var pseudo = require('../../pseudo');
var stringUtils = require('../../src/utils/string-utils');

describe('Iteration', function () {

	var input, output, expected;

    it('should return \'for ...\' ', function () {

        input = 'por cada e en elementos {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'for (e in elementos) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'while ...\' ', function () {

        input = 'mientras alumnos igual 10 {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'while (alumnos == 10) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

});