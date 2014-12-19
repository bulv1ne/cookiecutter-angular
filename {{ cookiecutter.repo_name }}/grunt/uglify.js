module.exports = {
    "{{ cookiecutter.repo_name }}": {
        files: {
            '<%= {{ cookiecutter.repo_name }}.dist.minified %>': ['<%= {{ cookiecutter.repo_name }}.dist.templates %>', '<%= {{ cookiecutter.repo_name }}.dist.general %>']
        }
    }
};
