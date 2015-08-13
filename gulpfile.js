var gulp = require('gulp');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var globby = require('globby');
var clean = require('gulp-clean');

function errorLog(err){
    gulp.src(settings.path)
        .pipe(notify(err));
}

var settings = {
    path: './source/',
    less: ['./source/less/build.less','./source/blocks/**/*.less'],
    css: './public_html/css',
    js_dir: './source/js/**/*.js',
    js_src: './source/blocks/**/*.js',
    js_build: './public_html/js',
    images: './public_html/img/*',
    watch_less: 'source/**/**/*.less',
    watch_js: 'source/**/**/*.js'
};

gulp.task('less', function() {
    gulp.src(settings.less)
        .pipe(concat('styles.less'))
        .pipe(less().on('error', function(err){
            errorLog(err);
        }))
        .pipe(gulp.dest(settings.css))
});

gulp.task('js', function() {
    gulp.src(settings.js_src)
        .pipe(concat('scripts.js'))
        .pipe(uglify().on('error', function(err){
            errorLog(err);
        }))
        .pipe(gulp.dest(settings.js_build))
    gulp.src(settings.js_dir)
        .pipe(uglify().on('error', function(err){
            errorLog(err);
        }))
        .pipe(gulp.dest(settings.js_build))
});

gulp.task('imagemin', function() {
    globby(settings.images, function (err, paths) {
        gulp.src(paths)
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngcrush()]
            }))
    });
});

gulp.task('default', ['less', 'js'], function() {
    gulp.src(settings.path)
        .pipe(notify("Running watch"));
    gulp.watch(settings.watch_less, ['less']);
    gulp.watch(settings.watch_js, ['js']);
});
gulp.task('images', ['imagemin']);