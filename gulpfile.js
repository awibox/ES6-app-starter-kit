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

var source = {
    path: './source/',
    html: './source/*.html',
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

gulp.task('html', function() {
    gulp.src(source.html)
        .pipe(gulp.dest(build.path))
});

gulp.task('less', function() {
    gulp.src(source.less)
        .pipe(concat('styles.less'))
        .pipe(less().on('error', function(err){
            errorLog(err);
        }))
        .pipe(gulp.dest(build.css))
});

gulp.task('js', function() {
    gulp.src(source.library)
        .pipe(uglify())
        .pipe(gulp.dest(build.js))
    gulp.src(source.js)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(build.js))
});

gulp.task('clean', function() {
    gulp.src(build.images)
        .pipe(clean())
});

gulp.task('images', ['clean'], function() {
    globby(source.images, function (err, paths) {
        gulp.src(paths)
            .pipe(gulp.dest(build.images))
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngcrush()]
            }))
    });
});

gulp.task('default', ['html', 'less', 'js', 'images'], function() {
    gulp.src(source.path)
        .pipe(notify("Running watch"));
    gulp.watch(source.html, ['html']);
    gulp.watch(source.wless, ['less']);
    gulp.watch(source.wjs, ['js']);
    gulp.watch(source.images, ['images']);
});