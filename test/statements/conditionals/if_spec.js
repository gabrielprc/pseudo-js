var pseudo = require('../../../pseudo');
var stringUtils = require('../../../src/utils/string-utils');

describe('Conditional', function () {

	var input, output, expected;

	//	If (single condition)

    it('should return \'if ...\' ', function () {

        input = 'si a igual 1 {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if (a == 1) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if ...\' ', function () {

        input = 'if a equals 1 {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if (a == 1) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if ...\' ', function () {

        input = 'if a == 1 {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if (a == 1) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    //	If (multiple conditions)

    it('should return \'if ...\' with multiple conditions ', function () {

        input = 'si a igual 1 y b igual 2 o c distinto 3 {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if (a == 1 && b == 2 || c != 3) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if ...\' with multiple conditions ', function () {

        input = 'if a equals 1 and b equals 2 or c not equals 3 {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if (a == 1 && b == 2 || c != 3) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if ...\' with multiple conditions ', function () {

        input = 'if a == 1 && b == 2 || c != 3 {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if (a == 1 && b == 2 || c != 3) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    //	If (nested)

    it('should return \'if ...\' with nested conditionals', function () {

        input = 'si a igual 1 {si b igual 2 { si c distinto 3 {} } }';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if (a == 1) { if (b == 2) { if (c != 3) {} } }';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if ...\' with nested conditionals', function () {

        input = 'if a equals 1 {if b equals 2 { if c not equals 3 {} } }';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if (a == 1) { if (b == 2) { if (c != 3) {} } }';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if ...\' with nested conditionals', function () {

        input = 'if a == 1 {if b == 2 { if c != 3 {} } }';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if (a == 1) { if (b == 2) { if (c != 3) {} } }';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    //	If-else

    it('should return \'if-else ...\' ', function () {

        input = 'si a igual 1 y b igual 2 {} sino {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if(a == 1 && b == 2) {} else {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if-else ...\' ', function () {

        input = 'if a equals 1 and b equals 2 {} else {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if(a == 1 && b == 2) {} else {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if-else ...\' ', function () {

        input = 'if a == 1 && b == 2 {} else {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if(a == 1 && b == 2) {} else {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    //	If-elseif

    it('should return \'if-else if ...\' ', function () {

        input = 'si a igual 1 o b distinto 2 {} sino si a igual 2 {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if(a == 1 || b != 2) {} else if(a == 2) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if-else if ...\' ', function () {

        input = 'if a equals 1 or b not equals 2 {} else if a equals 2 {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if(a == 1 || b != 2) {} else if(a == 2) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if-else if ...\' ', function () {

        input = 'if a == 1 or b != 2 {} else if a == 2 {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if(a == 1 || b != 2) {} else if(a == 2) {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if-else if-else ...\' ', function () {

        input = 'si a igual 1 o b distinto 2 {} sino si a igual 2 {} sino {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if(a == 1 || b != 2) {} else if(a == 2) {} else {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if-else if-else ...\' ', function () {

        input = 'if a equals 1 or b not equals 2 {} else if a equals 2 {} else {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if(a == 1 || b != 2) {} else if(a == 2) {} else {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

    it('should return \'if-else if-else ...\' ', function () {

        input = 'if a == 1 || b != 2 {} else if a == 2 {} else {}';
        output = pseudo.parseToJS(input);
        output = stringUtils.removeWhitespacesForJs(output);

        expected = 'if(a == 1 || b != 2) {} else if(a == 2) {} else {}';
        expected = stringUtils.removeWhitespacesForJs(expected);

        expect(output).toEqual(expected);
    });

});