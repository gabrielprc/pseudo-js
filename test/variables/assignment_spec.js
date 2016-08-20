var pseudo = require('../../pseudo');
var stringUtils = require('../../src/utils/string-utils');

describe('Variable assignment', function () {

	var input, output, expected;

    it('should return \'a es 1\' ', function () {

        input = 'a es 1';
        output = pseudo.parseToJS(input);
        expected = 'a = 1;';

        expect(output).toEqual(expected);
    });

    it('should return \'b es 1.2\' ', function () {

        input = 'b es 1.2';
        output = pseudo.parseToJS(input);
        expected = 'b = 1.2;';
        
        expect(output).toEqual(expected);
    });
});