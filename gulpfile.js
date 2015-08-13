// Подключаемые модули
var gulp = require('gulp');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var globby = require('globby');

// Настройки сборки
var settings = {
    path: './source/',                                                  // Директория исходников
    less: ['./source/less/build.less','./source/blocks/**/*.less'],     // Исходники LESS
    css: './public_html/css',                                           // Директория в которую собирается CSS
    js_dir: './source/js/**/*.js',                                      // Библиотеки JS
    js_src: './source/blocks/**/*.js',                                  // Исходники JS
    js_build: './public_html/js',                                       // Директория сборки JS
    images: './public_html/img/*',                                      // Директория с изображениями
    watch_less: 'source/**/**/*.less',                                  // Где отслеживаются LESS
    watch_js: 'source/**/**/*.js'                                       // Где отслеживаются JS
};
// Функция вывода ошибок
function errorLog(err){
    gulp.src(settings.path)
        .pipe(notify(err));
}
// Сборка LESS
gulp.task('less', function() {
    gulp.src(settings.less)
        .pipe(concat('styles.less'))
        .pipe(less().on('error', function(err){
            errorLog(err);
        }))
        .pipe(gulp.dest(settings.css))
});
// Сборка JS
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
// Минификация изображений
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
// Запуск сборки
gulp.task('default', ['less', 'js'], function() {
    gulp.src(settings.path)
        .pipe(notify("Running watch"));
    gulp.watch(settings.watch_less, ['less']);
    gulp.watch(settings.watch_js, ['js']);
});
gulp.task('images', ['imagemin']);