module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: ['source/js/library/*.js','source/js/*.js'],
                dest: 'source/assets/scripts.js'
            },
            jquery: {
                src: ['source/js/jquery/*.js'],
                dest: 'source/assets/jquery.js'
            }
        },

        uglify: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            build: {
                src: 'source/assets/scripts.js',
                dest: 'public_html/assets/scripts.js'
            },
            jquery: {
                src: 'source/assets/jquery.js',
                dest: 'public_html/assets/jquery.js'
            }
        },

        less: {
            development: {
                options: {
                    paths: ["source/css"]
                },
                files: {
                    "source/assets/styles.css": "source/less/project.less"
                }
            }
        },

        cssmin: {
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },

                files: {
                    'public_html/assets/styles.css' : ['source/assets/styles.css']
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'source/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public_html/img/'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'public_html/index.html': 'source/index.html'
                }
            }
        },

        copy: {
            fonts: {
                expand: true,
                cwd: 'source/',
                src: 'fonts/*',
                dest: 'public_html/fonts',
                flatten: true,
                filter: 'isFile'
            }
        },

        watch: {
            scripts: {
                files: ['source/js/**/*.js'],
                tasks: ['concat', 'uglify', 'removelogging']
            },
            less: {
                files: ['source/less/*.less'],
                tasks: ['less', 'cssmin']
            },
            lessblocks: {
                files: ['source/less/**/*.less'],
                tasks: ['less', 'cssmin']
            },
            image: {
                files: ['source/img/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            },
            html: {
                files: ['source/*.html'],
                tasks: ['htmlmin']
            },
            fonts: {
                files: ['source/fonts/*'],
                tasks: ['copy']
            }
        },

        removelogging: {
            dist: {
                src: "public_html/assets/scripts.js",
                dest: "public_html/assets/scripts.min.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-remove-logging');

    grunt.registerTask('default', ['concat', 'uglify', 'less', 'cssmin', 'imagemin', 'htmlmin', 'copy', 'removelogging', 'watch']);

};