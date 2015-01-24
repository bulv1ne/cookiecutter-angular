'use strict';

describe('example test', function() {

    beforeEach(module('{{ cookiecutter.repo_name }}'));

    it('1+1 = 2', function() {
        expect(1 + 1).toBe(2);
    });

});
