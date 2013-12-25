module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    $: true,
                    console: true
                }
            },
            '<%= pkg.name %>': {
                src: [ 'src/js/**/*.js' ]
            }
        },

        concat: {
            dist: {
                src: ['src/js/*.js'],
                dest: 'public/build.js'
            }
        },

        uglify: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            build: {
                src: 'public/build.js',
                dest: 'public/build.min.js'
            }
        },

        less: {
            development: {
                options: {
                    paths: ["src/css"]
                },
                files: {
                    "public/result.css": "src/less/skillmax.less"
                }
            }
        },
        cssmin: {
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },

                files: {
                    'public/style.min.css' : ['public/result.css']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['concat', 'uglify', 'removelogging']
            },
            css: {
                files: ['src/less/*.less'],
                tasks: ['less', 'cssmin']
            }
        },


        removelogging: {
            dist: {
                src: "public/build.min.js",
                dest: "public/build.clean.js"
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

    grunt.registerTask('default', ['concat', 'uglify', 'less', 'cssmin', 'removelogging', 'watch']);
    grunt.registerTask('debug', ['jshint']);

};