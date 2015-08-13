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
    gulp.src("./source")
        .pipe(notify(err));
}

var settings = {
    less: ['./source/less/build.less','./source/blocks/**/*.less'],
    css: './public_html/css',
    js_src: ['./source/jquery/*.js','./source/js/*.js','./source/blocks/*.js'],
    js_build: './public_html/js',
    images: './public_html/img/*'
};

var source = {
    path: './source/',
    less: ['./source/less/build.less','./source/blocks/**/*.less'],
    library: './source/js/*.js',
    js: './source/blocks/*.js',
    images: './source/img/*',
    wless: 'source/**/*.less',
    wjs: 'source/**/*.js'

};

var build = {
    path: './public_html/',
    css: './public_html/css',
    js: './public_html/js',
    images: './public_html/img'
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
        .pipe(uglify())
        .pipe(gulp.dest(settings.js_build))
});

gulp.task('clean', function() {
    gulp.src(build.images)
        .pipe(clean())
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
    gulp.src(source.path)
        .pipe(notify("Running watch"));
    gulp.watch(source.wless, ['less']);
    gulp.watch(source.wjs, ['js']);
});
gulp.task('images', ['imagemin']);