var pseudo = require('../../pseudo');

describe('Iteration', function () {

	var input, output, expected;

    it('should return \'for ...\' ', function () {

        input = 'por cada(e en elementos){}'.replace(/\s+/g, '');
        output = pseudo.parseToJS(input);

        expected = 'for (e in elementos) {}'.replace(/\s+/g, '');

        expect(output).toEqual(expected);
    });
});