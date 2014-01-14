module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                curly: true,
                eqnull: true,
                eqeqeq: true,
                globals: {
                    jQuery: true
                }
            },
            '<%= pkg.name %>': {
                src: [ 'assets/js/**/*.js' ]
            }
        },

        concat: {
            dist: {
                src: ['assets/js/*.js'],
                dest: 'public_html/js/build.js'
            }
        },

        uglify: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            build: {
                src: 'public_html/js/build.js',
                dest: 'public_html/js/build.min.js'
            }
        },

        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "public_html/css/style.css": "assets/less/style.less"
                }
            }
        },

        cssmin: {
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },

                files: {
                    'public_html/css/style.min.css' : ['public_html/css/style.css']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
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
                    'public_html/index.html': 'assets/index.html'
                }
            }
        },

        watch: {
            scripts: {
                files: ['assets/js/*.js'],
                tasks: ['concat', 'uglify', 'removelogging']
            },
            css: {
                files: ['assets/less/*.less'],
                tasks: ['less', 'cssmin']
            },
            image: {
                files: ['assets/img/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            },
            html: {
                files: ['assets/*.html'],
                tasks: ['htmlmin']
            }
        },

        removelogging: {
            dist: {
                src: "public_html/js/build.min.js",
                dest: "public_html/js/build.clean.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-remove-logging');

    grunt.registerTask('default', ['concat', 'uglify', 'less', 'cssmin', 'imagemin', 'htmlmin', 'removelogging', 'watch']);
    grunt.registerTask('debug', ['jshint']);

};