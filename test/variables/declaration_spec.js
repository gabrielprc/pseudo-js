var pseudo = require('../../pseudo');

describe('Variable declaration', function () {

	var input, output, expected;

    //  Empty variable declaration

    it('should return \'var a\' ', function () {

        input = 'var a';
        output = pseudo.parseToJS(input);

        expected = 'var a;';

        expect(output).toEqual(expected);
    });

    //  Numeric variable declaration

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

    it('should return \'var a = 1\' ', function () {

        input = 'var a is 1';
        output = pseudo.parseToJS(input);

        expected = 'var a = 1;';

        expect(output).toEqual(expected);
    });

    //  Multiple variable declaration

    it('should return \'var a=1, b=2, c=3;\' ', function() {

        input = 'var a = 1, b = 2, c = 3';
        output = pseudo.parseToJS(input);

        expected = 'var a = 1, b = 2, c = 3;';

        expect(output).toBe(expected);
    });

    it('should return \'var a=1, b=2, c=3;\' ', function() {

        input = 'var a es 1, b es 2, c es 3';
        output = pseudo.parseToJS(input);

        expected = 'var a = 1, b = 2, c = 3;';

    	expect(output).toBe(expected);
    });

    it('should return \'var a=1, b=2, c=3;\' ', function() {

        input = 'var a is 1, b is 2, c is 3';
        output = pseudo.parseToJS(input);

        expected = 'var a = 1, b = 2, c = 3;';

        expect(output).toBe(expected);
    });

    //  Alphanumeric variable declaration

    it("should return \'var nombre = 'John'\ ", function () {

        input = "var nombre = 'John'";
        output = pseudo.parseToJS(input);

        expected = "var nombre = 'John';"

        expect(output).toEqual(expected);
    });

    it("should return \'var nombre = 'John'\ ", function () {

        input = "var nombre es 'John'";
        output = pseudo.parseToJS(input);

        expected = "var nombre = 'John';"

        expect(output).toEqual(expected);
    });

    it("should return \'var nombre = 'John'\ ", function () {

        input = "var nombre = 'John'";
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

    it('should return \'var nombre = "Peter"\' ', function () {

        input = 'var nombre is "Peter"';
        output = pseudo.parseToJS(input);

        expected = "var nombre = 'Peter';"

        expect(output).toEqual(expected);
    });

    it('should return \'var nombre = "Peter"\' ', function () {

        input = 'var nombre = "Peter"';
        output = pseudo.parseToJS(input);

        expected = "var nombre = 'Peter';"

        expect(output).toEqual(expected);
    });

    //  Floating-point variable declaration

    it("should return \'var pi = 3.1415\ ", function () {

        input = 'var pi es 3.1415';
        output = pseudo.parseToJS(input);

        expected = 'var pi = 3.1415;'

        expect(output).toEqual(expected);
    });

    it("should return \'var pi = 3.1415\ ", function () {

        input = 'var pi is 3.1415';
        output = pseudo.parseToJS(input);

        expected = 'var pi = 3.1415;'

        expect(output).toEqual(expected);
    });

    it("should return \'var pi = 3.1415\ ", function () {

        input = 'var pi = 3.1415';
        output = pseudo.parseToJS(input);

        expected = 'var pi = 3.1415;'

        expect(output).toEqual(expected);
    });

    //  Array variable declaration

    it("should return \'var lista = []\ ", function () {

        input = 'var lista es []';
        output = pseudo.parseToJS(input);

        expected = 'var lista = [];'

        expect(output).toEqual(expected);
    });

    it("should return \'var lista = []\ ", function () {

        input = 'var lista is []';
        output = pseudo.parseToJS(input);

        expected = 'var lista = [];'

        expect(output).toEqual(expected);
    });

    it("should return \'var lista = []\ ", function () {

        input = 'var lista = []';
        output = pseudo.parseToJS(input);

        expected = 'var lista = [];'

        expect(output).toEqual(expected);
    });

    //  Variable-variable declaration

    it("should return \'var a = b\ ", function () {

        input = 'var a es b';
        output = pseudo.parseToJS(input);

        expected = 'var a = b;'

        expect(output).toEqual(expected);
    });

    it("should return \'var a = b\ ", function () {

        input = 'var a is b';
        output = pseudo.parseToJS(input);

        expected = 'var a = b;'

        expect(output).toEqual(expected);
    });

    it("should return \'var a = b\ ", function () {

        input = 'var a = b';
        output = pseudo.parseToJS(input);

        expected = 'var a = b;'

        expect(output).toEqual(expected);
    });
});