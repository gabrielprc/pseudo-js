var pseudo = require('../../pseudo');

describe('Error', function () {

	var input;

    it('should throw a syntax error ', function () {
        input = '1';

        expect(pseudo.parseToJS.bind(null, input)).toThrow();
    });

});