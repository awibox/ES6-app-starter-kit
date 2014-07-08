var gulp = require('gulp'); // Сообственно Gulp JS
var jade = require('gulp-jade'); // Плагин для Jade
var less = require('gulp-less'); // Плагин для Less
var imagemin = require('gulp-imagemin'); // Минификация изображений
var uglify = require('gulp-uglify'); // Минификация JS
var concat = require('gulp-concat'); // Склейка файлов

// Собираем Stylus

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



// Собираем JS
gulp.task('js', function() {
    gulp.src(['./source/build/jquery/*.js'])
        .pipe(concat('jquery.js'))
        .pipe(gulp.dest('./source/js'))
        .pipe(uglify('jquery.js'))
        .pipe(gulp.dest('./public/js'))
    gulp.src(['./source/build/library/*.js'])
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest('./source/js'))
        .pipe(uglify('plugins.js'))
        .pipe(gulp.dest('./public/js'))
    gulp.src(['./source/blocks/**/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./source/js'))
        .pipe(uglify('scripts.js'))
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
gulp.task('default', function() {
    // Предварительная сборка проекта
//    gulp.run('jade');
    gulp.run('images');
    gulp.run('js');

//    gulp.watch('assets/template/**/*.jade', function() {
//        gulp.run('jade');
//    });
    gulp.watch('source/build/**/*.js', function() {
        gulp.run('js');
    });
    gulp.watch('source/blocks/**/*.js', function() {
        gulp.run('js');
    });
    gulp.watch('source/img/**/*', function() {
        gulp.run('images');
    });


});