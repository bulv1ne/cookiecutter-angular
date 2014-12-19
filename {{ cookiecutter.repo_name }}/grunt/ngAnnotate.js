module.exports = {
    options: {
    },
    "{{ cookiecutter.repo_name }}": {
        files: {
            '<%= {{ cookiecutter.repo_name }}.dist.general %>': ['<%= {{ cookiecutter.repo_name }}.jsFiles %>', '!**/test_*.js']
        }
    },
};
