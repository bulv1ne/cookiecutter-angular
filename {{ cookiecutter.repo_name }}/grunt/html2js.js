module.exports = {
    options: {
        htmlmin: {
            collapseWhitespace: true,
        },
        base: 'app',
        module: '{{ cookiecutter.repo_name }}.templates',
    },
    "{{ cookiecutter.repo_name }}": {
        src: ['<%= {{ cookiecutter.repo_name }}.htmlFiles %>'],
        dest: '<%= {{ cookiecutter.repo_name }}.dist.templates %>',
    },
};
