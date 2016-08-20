var pseudo = require('../../pseudo');
var stringUtils = require('../../src/utils/string-utils');

describe('Function', function () {

	var input, output, expected;

    it('should declare a function ', function () {

        input = 'metodo sumar (num1, num2) {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'function sumar(num1, num2) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should declare a function without "metodo" keyword ', function () {

        input = 'restar (num1, num2) {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'function restar (num1, num2) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should declare and call the function ', function () {

        input = 'multiplicar (num1, num2) {} multiplicar(2, 2)';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'function multiplicar (num1, num2) {} multiplicar(2, 2);';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should declare a function and return the calculated value ', function () {

        input = 'sumar (a, b) { devolver a * b } multiplicar(2, 2)';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'function sumar (a, b) { return a * b; } multiplicar(2, 2);';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });
});