module.exports = {
    html: {
        files: ['<%= {{ cookiecutter.repo_name }}.htmlFiles %>'],
        tasks: ['html2js', 'uglify', 'notify:html2js'],
        options: {
            spawn: false,
        },
    },
    scripts: {
        files: ['<%= {{ cookiecutter.repo_name }}.checkFiles %>'],
        tasks: ['jscs', 'jshint', 'ngAnnotate', 'uglify', 'notify:jsfiles'],
    },
    grunt: {
        files: ['<%= grunt.files %>'],
        tasks: ['jscs'],
    },
};
