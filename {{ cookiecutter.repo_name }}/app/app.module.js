'use strict';

angular.module('{{ cookiecutter.repo_name }}', [
    '{{ cookiecutter.repo_name }}.routes',
    '{{ cookiecutter.repo_name }}.templates',
])

.config(function($httpProvider) {
    $httpProvider.defaults.cache = false;
});
