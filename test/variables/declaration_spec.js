var pseudo = require('../../pseudo');

describe('Variable declaration', function () {

	var input, output, expected;



    it('should return \'var a = 1\' ', function () {

        input = 'var a = 1';
        output = pseudo.parseToJS(input);

        expected = 'var a = 1;';

        expect(output).toEqual(expected);
    });

    it('should return \'var a=1, b=2, c=3;\' ', function() {

        input = 'var a es 1, b es 2, c es 3';
        output = pseudo.parseToJS(input);

        expected = 'var a = 1, b = 2, c = 3;';

    	expect(output).toBe(expected);
    })
});