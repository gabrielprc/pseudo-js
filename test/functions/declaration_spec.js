var pseudo = require('../../pseudo');
var stringUtils = require('../../src/utils/string-utils');

describe('Function', function () {

	var input, output, expected;

    //  Explicit function declaration

    it('should declare a function ', function () {

        input = 'metodo sumar (num1, num2) {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'function sumar(num1, num2) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should declare a function ', function () {

        input = 'function sumar (num1, num2) {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'function sumar(num1, num2) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    //  Implicit function declaration

    it('should declare a function without keyword ', function () {

        input = 'restar (num1, num2) {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'function restar (num1, num2) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    //  No-parameters function declaration

    it('should declare a function without parameters ', function () {

        input = 'restar {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'function restar () {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should declare a function without parameters ', function () {

        input = 'restar() {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'function restar () {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

});