var pseudo = require('../../pseudo');
var stringUtils = require('../../src/utils/string-utils');

describe('Variable assignment', function () {

	var input, output, expected;

    //  Numeric assignment

    it('should return \'a = 1\' ', function () {

        input = 'a es 1';
        output = pseudo.parseToJS(input);
        expected = 'a = 1;';

        expect(output).toEqual(expected);
    });

    it('should return \'a = 1\' ', function () {

        input = 'a is 1';
        output = pseudo.parseToJS(input);
        expected = 'a = 1;';

        expect(output).toEqual(expected);
    });

    it('should return \'a = 1\' ', function () {

        input = 'a = 1';
        output = pseudo.parseToJS(input);
        expected = 'a = 1;';

        expect(output).toEqual(expected);
    });

    it('should return \'b = 1.2\' ', function () {

        input = 'b es 1.2';
        output = pseudo.parseToJS(input);
        expected = 'b = 1.2;';
        
        expect(output).toEqual(expected);
    });

    it('should return \'b = 1.2\' ', function () {

        input = 'b is 1.2';
        output = pseudo.parseToJS(input);
        expected = 'b = 1.2;';
        
        expect(output).toEqual(expected);
    });

    it('should return \'b = 1.2\' ', function () {

        input = 'b = 1.2';
        output = pseudo.parseToJS(input);
        expected = 'b = 1.2;';
        
        expect(output).toEqual(expected);
    });

    //  Alphanumeric assignment

    it('should return "c = \'variable\'" ', function () {

        input = 'c es \'variable\'';
        output = pseudo.parseToJS(input);
        expected = 'c = \'variable\';';
        
        expect(output).toEqual(expected);
    });

    it('should return "c = \'variable\'" ', function () {

        input = 'c is \'variable\'';
        output = pseudo.parseToJS(input);
        expected = 'c = \'variable\';';
        
        expect(output).toEqual(expected);
    });

    it('should return "c = \'variable\'" ', function () {

        input = 'c = \'variable\'';
        output = pseudo.parseToJS(input);
        expected = 'c = \'variable\';';
        
        expect(output).toEqual(expected);
    });

    //  Array assignment

    it('should return "list = []" ', function () {

        input = 'c es []';
        output = pseudo.parseToJS(input);
        expected = 'c = [];';
        
        expect(output).toEqual(expected);
    });

    it('should return "list = []" ', function () {

        input = 'c is []';
        output = pseudo.parseToJS(input);
        expected = 'c = [];';
        
        expect(output).toEqual(expected);
    });

    it('should return "list = []" ', function () {

        input = 'c = []';
        output = pseudo.parseToJS(input);
        expected = 'c = [];';
        
        expect(output).toEqual(expected);
    });

    //  Variable assignment

    it('should return "a = b" ', function () {

        input = 'a es b';
        output = pseudo.parseToJS(input);
        expected = 'a = b;';
        
        expect(output).toEqual(expected);
    });

    it('should return "a = b" ', function () {

        input = 'a is b';
        output = pseudo.parseToJS(input);
        expected = 'a = b;';
        
        expect(output).toEqual(expected);
    });

    it('should return "a = b" ', function () {

        input = 'a = b';
        output = pseudo.parseToJS(input);
        expected = 'a = b;';
        
        expect(output).toEqual(expected);
    });

    //  Multiple assignment

    it('should return "a = b, c = d, e = f" ', function () {

        input = 'a es b, c es d, e es f';
        output = pseudo.parseToJS(input);
        expected = 'a = b, c = d, e = f;';
        
        expect(output).toEqual(expected);
    });

    it('should return "a = b, c = d, e = f" ', function () {

        input = 'a is b, c is d, e is f';
        output = pseudo.parseToJS(input);
        expected = 'a = b, c = d, e = f;';
        
        expect(output).toEqual(expected);
    });

    it('should return "a = b, c = d, e = f" ', function () {

        input = 'a = b, c = d, e = f';
        output = pseudo.parseToJS(input);
        expected = 'a = b, c = d, e = f;';
        
        expect(output).toEqual(expected);
    });

    //  Function assignment

    // it('should return "a = function fun() {}" ', function () {

    //     input = 'a es fun {}';
    //     output = pseudo.parseToJS(input);
    //     expected = 'a = function fun() {};';
        
    //     expect(output).toEqual(expected);
    // });
});