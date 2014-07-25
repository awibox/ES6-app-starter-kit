var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var globby = require('globby');

function errorLog(err){
    gulp.src("./source")
        .pipe(notify(err));
}

gulp.task('jade', function() {
    gulp.src(['./source/*.jade'])
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/'))
});

gulp.task('less', function() {
    gulp.src(['./source/build/theme.less','./source/build/main.less','./source/blocks/**/*.less'])
        .pipe(concat('styles.less'))
        .pipe(less().on('error', function(err){
            errorLog(err);
        }))
        .pipe(gulp.dest('./public/css'))
});

gulp.task('js', function() {
    gulp.src(['./source/build/jquery/*.js'])
        .pipe(concat('jquery.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
    gulp.src(['./source/build/library/*.js'])
        .pipe(concat('plugins.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
    gulp.src(['./source/blocks/**/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
});

gulp.task('images', function() {
    globby("./source/blocks/*/img/**/*", function (err, paths) {
        console.log(err)
        console.log(paths)
        gulp.src(paths)
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngcrush()]
            }))
            .pipe(gulp.dest('./public/img'))
    });
});

gulp.task('default', ['jade','less', 'js', 'images'], function() {
    gulp.src("./source")
        .pipe(notify("Done, without errors. Running watch."));
    gulp.watch('source/**/*.jade', ['jade']);
    gulp.watch('source/**/*.less', ['less']);
    gulp.watch('source/**/*.js', ['js']);
    gulp.watch('source/blocks/**/img/*', ['images']);
});