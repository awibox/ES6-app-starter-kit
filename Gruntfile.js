module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                curly: true,
                eqnull: true,
                eqeqeq: true,
                undef: true,
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
                dest: 'public/js/build.js'
            }
        },

        uglify: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            build: {
                src: 'public/js/build.js',
                dest: 'public/js/build.min.js'
            }
        },

        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "public/css/style.css": "assets/less/style.less"
                }
            }
        },
        cssmin: {
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },

                files: {
                    'public/css/style.min.css' : ['public/css/style.css']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
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
            }
        },

        removelogging: {
            dist: {
                src: "public/js/build.min.js",
                dest: "public/js/build.clean.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-remove-logging');

    grunt.registerTask('default', ['concat', 'uglify', 'less', 'cssmin', 'removelogging', 'watch', 'jshint']);
    grunt.registerTask('debug', ['jshint']);

};