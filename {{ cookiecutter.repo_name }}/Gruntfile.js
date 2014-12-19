module.exports = function(grunt) {
    require('load-grunt-config')(grunt, {
        data: {
            "{{ cookiecutter.repo_name }}": {
                dist: {
                    templates: '{{ cookiecutter.dist_folder }}/{{ cookiecutter.repo_name }}/app-templates.js',
                    general: '{{ cookiecutter.dist_folder }}/{{ cookiecutter.repo_name }}/app.js',
                    minified: '{{ cookiecutter.dist_folder }}/{{ cookiecutter.repo_name }}/app.min.js',
                },
                htmlFiles: [
                    'app/**/*.html',
                    'app/**/*.jade',
                ],
                jsFiles: [
                    'app/**/*.js',
                    '!**/test_*.js',
                ],
                checkFiles: [
                    'app/**/*.js',
                ],
            },
            grunt: {
                files: ['Gruntfile.js', 'grunt/*.js'],
            },
        }
    });

    grunt.registerTask('default', ['jscs', 'jshint', 'html2js', 'ngAnnotate', 'uglify']);
};
