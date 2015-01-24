module.exports = function(grunt) {
    require('load-grunt-config')(grunt, {
        data: {
            "{{ cookiecutter.repo_name }}": {
                dist: {
                    templates: '{{ cookiecutter.dist_folder }}/{{ cookiecutter.repo_name }}/{{ cookiecutter.repo_name }}-templates.js',
                    general: '{{ cookiecutter.dist_folder }}/{{ cookiecutter.repo_name }}/{{ cookiecutter.repo_name }}.js',
                    minified: '{{ cookiecutter.dist_folder }}/{{ cookiecutter.repo_name }}/{{ cookiecutter.repo_name }}.min.js',

                    bowerjs: '{{ cookiecutter.dist_folder }}/{{ cookiecutter.repo_name }}/bower.min.js',
                    bowercss: '{{ cookiecutter.dist_folder }}/{{ cookiecutter.repo_name }}/bower.min.css',
                },
                htmlFiles: [
                    '{{ cookiecutter.app_folder }}/**/*.html',
                    '{{ cookiecutter.app_folder }}/**/*.jade',
                ],
                jsFiles: [
                    '{{ cookiecutter.app_folder }}/**/*.js',
                    '!{{ cookiecutter.app_folder }}/**/test_*.js',
                ],
                checkFiles: [
                    '{{ cookiecutter.app_folder }}/**/*.js',
                    'karma.conf.js',
                ],
            },
            grunt: {
                files: ['Gruntfile.js', 'grunt/*.js'],
            },
        }
    });

    grunt.registerTask('default', ['jscs', 'jshint', 'html2js', 'ngAnnotate', 'uglify', 'bower_concat']);
};
