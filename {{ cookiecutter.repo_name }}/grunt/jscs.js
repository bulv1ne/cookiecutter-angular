// Rule list https://github.com/jscs-dev/node-jscs

module.exports = {
    options: {
        validateIndentation: 4,
        validateParameterSeparator: ', ',
        requireSpaceBeforeBlockStatements: true,
        requireSpacesInFunctionExpression: {
            beforeOpeningCurlyBrace: true
        },
        disallowSpacesInFunctionExpression: {
            beforeOpeningRoundBrace: true
        },
        requireBlocksOnNewline: true,
        requireSpaceBeforeObjectValues: true,
        requireCommaBeforeLineBreak: true,
        requireCamelCaseOrUpperCaseIdentifiers: true,
        disallowTrailingWhitespace: true,
        requireTrailingComma: {
            ignoreSingleValue: true,
            ignoreSingleLine: true,
        },
        requireLineFeedAtFileEnd: true,
        disallowNewlineBeforeBlockStatements: true,
    },
    "{{ cookiecutter.repo_name }}": {
        src: ['<%= {{ cookiecutter.repo_name }}.checkFiles %>'],
    },
    grunt: {
        src: ['<%= grunt.files %>'],
    },
};
