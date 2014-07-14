var gulp = require('gulp'); // Сообственно Gulp JS
var jade = require('gulp-jade'); // Плагин для Jade
var less = require('gulp-less'); // Плагин для Less
var imagemin = require('gulp-imagemin'); // Минификация изображений
var uglify = require('gulp-uglify'); // Минификация JS
var concat = require('gulp-concat'); // Склейка файлов

// Собираем html из Jade

//gulp.task('jade', function() {
//    gulp.src(['./assets/template/*.jade', '!./assets/template/_*.jade'])
//        .pipe(jade({
//            pretty: true
//        }))  // Собираем Jade только в папке ./assets/template/ исключая файлы с _*
//        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
//        .pipe(gulp.dest('./public/')) // Записываем собранные файлы
//        .pipe(livereload(server)); // даем команду на перезагрузку страницы
//});

gulp.task('less', function() {
    gulp.src(['./source/build/theme.less','./source/build/main.less','./source/blocks/**/*.less'])
        .pipe(concat('style.less'))
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
    gulp.src('./source/img/**/*')
        .pipe(imagemin({
                progressive: true
        }))
        .pipe(gulp.dest('./public/img'))
});

// Запуск сервера разработки gulp watch
gulp.task('default', ['less', 'js', 'images'], function() {
    gulp.watch('source/**/*.less', ['less']);
    gulp.watch('source/**/*.js', ['js']);
    gulp.watch('source/img/**/*', ['images']);
    gulp.watch('source/blocks/**/img/*', ['images']);
//    gulp.watch('source/build/**/*.js', ['js']);
});