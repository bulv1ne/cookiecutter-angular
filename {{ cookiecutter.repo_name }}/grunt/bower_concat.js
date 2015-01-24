module.exports = function(grunt) {
    return {
        all: {
            dest: '<%= {{ cookiecutter.repo_name }}.dist.bowerjs %>',
            cssDest: '<%= {{ cookiecutter.repo_name }}.dist.bowercss %>',
            bowerOptions: {
                relative: false
            },
            exclude: [
                'angular-mocks'
            ],
            callback: function(mainFiles, component) {
                var result = [];

                for ( var i=0; i < mainFiles.length; i++ ) {
                    var min = mainFiles[i].replace(/\.js$/, '.min.js');
                    result.push(grunt.file.exists(min) ? min : mainFiles[i]);
                }

                return result;
            },
        }
    };
};
