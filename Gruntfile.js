module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlmin: {
            production: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'public_html/index.html': 'source/index.html'
                }
            }
        },

        concat: {
            less: {
                src: ['source/build/theme.less','source/build/main.less','source/blocks/**/*.less'],
                dest: 'source/less/build.less'
            },
            jquery: {
                src: ['source/build/jquery/*.js'],
                dest: 'source/js/jquery.js'
            },
            plugins: {
                src: ['source/build/library/*.js'],
                dest: 'source/js/plugins.js'
            },
            scripts: {
                src: ['source/blocks/**/*.js'],
                dest: 'source/js/scripts.js'
            }
        },

        less: {
            build: {
                options: {
                    paths: ["source/css"]
                },
                files: {
                    "source/css/styles.css": ["source/less/build.less"]
                }
            }
        },

        cssmin: {
            production: {
                options: {
                    banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
                },

                files: {
                    'public_html/css/styles.css' : ['source/css/styles.css']
                }
            }
        },

        uglify: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            jquery: {
                src: 'source/js/jquery.js',
                dest: 'public_html/js/jquery.js'
            },
            plugins: {
                src: 'source/js/plugins.js',
                dest: 'public_html/js/plugins.js'
            },
            scripts: {
                src: 'source/js/scripts.js',
                dest: 'public_html/js/scripts.js'
            }
        },

        clean: {
            images: {
                src: ["public_html/img/", "source/img"]
            }
        },

        copy: {
            main: {
                expand: true,
                cwd: 'source/blocks/',
                src: '**/*.{png,jpg,gif}',
                dest: 'source/img',
                flatten: true,
                filter: 'isFile'
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

        watch: {
            scripts: {
                files: ['source/blocks/**/*.js'],
                tasks: ['concat:scripts', 'uglify:scripts']
            },
            jquery: {
                files: ['source/build/jquery/*.js'],
                tasks: ['concat:jquery', 'uglify:jquery']
            },
            plugins: {
                files: ['source/build/plugins/*.js'],
                tasks: ['concat:plugins', 'uglify:plugins']
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
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['htmlmin','concat','less','cssmin','uglify','clean','copy','imagemin','watch']);
    grunt.registerTask('production', ['htmlmin','concat','less','cssmin','uglify','clean','copy','imagemin']);
    grunt.registerTask('add', ['concat','less','cssmin','uglify']);
};