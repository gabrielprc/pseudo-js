var pseudo = require('../../pseudo');

describe('Variable declaration', function () {

	var input, output, expected;

    it('should return \'var a = 1\' ', function () {

        input = 'var a = 1';
        output = pseudo.parseToJS(input);

        expected = 'var a = 1;';

        expect(output).toEqual(expected);
    });

    it('should return \'var a = 1\' ', function () {

        input = 'var a es 1';
        output = pseudo.parseToJS(input);

        expected = 'var a = 1;';

        expect(output).toEqual(expected);
    });

    it('should return \'var a=1, b=2, c=3;\' ', function() {

        input = 'var a es 1, b es 2, c es 3';
        output = pseudo.parseToJS(input);

        expected = 'var a = 1, b = 2, c = 3;';

    	expect(output).toBe(expected);
    });

    it("should return \'var nombre = 'John'\ ", function () {

        input = "var nombre es 'John'";
        output = pseudo.parseToJS(input);

        expected = "var nombre = 'John';"

        expect(output).toEqual(expected);
    });

    it('should return \'var nombre = "Peter"\' ', function () {

        input = 'var nombre es "Peter"';
        output = pseudo.parseToJS(input);

        expected = "var nombre = 'Peter';"

        expect(output).toEqual(expected);
    });

    it("should return \'var pi = 3.1415\ ", function () {

        input = 'var pi es 3.1415';
        output = pseudo.parseToJS(input);

        expected = 'var pi = 3.1415;'

        expect(output).toEqual(expected);
    });

    it("should return \'var lista = []\ ", function () {

        input = 'var lista es []';
        output = pseudo.parseToJS(input);

        expected = 'var lista = [];'

        expect(output).toEqual(expected);
    });
});