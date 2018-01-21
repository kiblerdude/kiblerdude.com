'use strict';
 
module.exports = function (grunt) {
 
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
 
    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || '.',
        dist: 'dist'
    };   
 
    // Define the configuration for all the tasks
    grunt.initConfig({
       
        yeoman: appConfig,
 
        // Deletes all the files in the dist directory to prepare for
        // a clean build.
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [ '.tmp', 'dist/{,*/}*' ]
                }]
            },
            tmp: '.tmp'
        },
 
        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/*.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },
 
        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
            }
        },
 
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        "*.html", "images/**", "js/**", "scripts/**", "css/**"
                    ]
                }]
            }
        },
 
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        }
 
    });
 
    grunt.registerTask('build', [
        'clean:dist',
        //'useminPrepare',
        //'concat:generated',
        //'cssmin:generated',
        //'uglify:generated',
        'copy:dist',
        //'usemin',
        'htmlmin:dist',
        'clean:tmp'
    ]);
 
    grunt.registerTask('default', [
        'build'
    ]);   
};