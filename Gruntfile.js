module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            images: {
                src: ["public_html/img/"]
            }
        },

        concat: {
            jquery: {
                src: ['source/js/jquery/*.js'],
                dest: 'source/js/jquery.js'
            },
            plugins: {
                src: ['source/js/library/*.js'],
                dest: 'source/js/plugins.js'
            },
            dist: {
                src: ['source/blocks/**/*.js'],
                dest: 'source/js/scripts.js'
            },
            less: {
                src: ['source/blocks/**/*.less'],
                dest: 'source/css/style.less'
            }
        },

        uglify: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            build: {
                src: 'source/js/scripts.js',
                dest: 'public_html/js/scripts.js'
            },
            jquery: {
                src: 'source/js/jquery.js',
                dest: 'public_html/js/jquery.js'
            }
        },

        less: {
            development: {
                options: {
                    paths: ["source/css"]
                },
                files: {
                    "source/css/styles.css": ["source/less/build.less"]
                }
            }
        },

        cssmin: {
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },

                files: {
                    'public_html/css/styles.css' : ['source/css/styles.css']
                }
            }
        },



        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'source/blocks/',
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

        watch: {
            scripts: {
                files: ['source/**/*.js'],
                tasks: ['concat', 'uglify', 'removelogging']
            },
            less: {
                files: ['source/**/*.less'],
                tasks: ['concat:less', 'less', 'cssmin']
            },
            image: {
                files: ['source/img/**/*.{png,jpg,gif}'],
                tasks: ['clean:images', 'imagemin']
            },
            html: {
                files: ['source/*.html'],
                tasks: ['htmlmin']
            },
            fonts: {
                files: ['source/fonts/*'],
                tasks: ['clean:fonts', 'copy']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'less', 'cssmin',  'imagemin', 'htmlmin', 'watch']);
};