var gulp = require('gulp'); // Сообственно Gulp JS
var jade = require('gulp-jade'); // Плагин для Jade
var less = require('gulp-less'); // Плагин для Less
var imagemin = require('gulp-imagemin'); // Минификация изображений
var pngcrush = require('imagemin-pngcrush');
var uglify = require('gulp-uglify'); // Минификация JS
var notify = require('gulp-notify'); // Минификация JS
var concat = require('gulp-concat'); // Склейка файлов

// Собираем html из Jade
gulp.task('jade', function() {
    gulp.src(['./source/jade/*.jade'])
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/'))
});

gulp.task('less', function() {
    gulp.src(['./source/build/theme.less','./source/build/main.less','./source/blocks/**/*.less'])
        .pipe(concat('styles.less'))
        .pipe(less())
        .pipe(gulp.dest('./public/css'))
});

// Собираем JS
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

// Копируем и минимизируем изображения
gulp.task('images', function() {
    gulp.src('./source/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('./public/img'))
});

// Запуск сервера разработки gulp watch
gulp.task('default', ['jade','less', 'js', 'images'], function() {
    gulp.src("./source")
        .pipe(notify("Done, without errors. Running watch."));
    gulp.watch('source/jade/**/*.jade', ['jade']);
    gulp.watch('source/**/*.less', ['less']);
    gulp.watch('source/**/*.js', ['js']);
    gulp.watch('source/img/**/*', ['images']);
    gulp.watch('source/blocks/**/img/*', ['images']);
});