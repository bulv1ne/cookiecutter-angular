'use strict';

module.exports = function(config) {
    config.set({

        basePath : '.',

        files : [
            '{{ cookiecutter.dist_folder }}/{{ cookiecutter.repo_name }}/bower.min.js',
            '{{ cookiecutter.dist_folder }}/{{ cookiecutter.repo_name }}/app.min.js',
            '{{ cookiecutter.dist_folder }}/bower_components/angular-mocks/angular-mocks.js',
            '{{ cookiecutter.app_folder }}/**/test_*.js',
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
        ],

    });
};
