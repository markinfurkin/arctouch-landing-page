var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', ['scripts', 'styles'], function () {
});

gulp.task('scripts', function () {
    var concat = require('gulp-concat');
    var stripDebug = require('gulp-strip-debug');
    var uglify = require('gulp-uglify');

    var files = [
        'assets/js/src/jquery-3.2.1.min.js',
        'assets/js/src/slick.min.js',
        'assets/js/src/global.js'
    ];

    gulp.src(files)
        .pipe(concat('scripts.js'))
        //.pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/dist'));

});

gulp.task('styles', function () {
    var concat = require('gulp-concat');
    var autoprefix = require('gulp-autoprefixer');
    var minifyCSS = require('gulp-minify-css');

    var files = [
        'assets/css/src/grid.css',
        'assets/css/src/fonts.css',
        'assets/css/src/slick.css',
        'assets/css/src/slick-theme.css',
        'assets/css/src/global.css',
        'assets/css/src/responsive.css'
    ];

    gulp.src(files)
        .pipe(concat('styles.min.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/css/dist'));

});

gulp.task('watch', function () {
    gulp.watch('assets/js/src/*.js', ['scripts']);
    gulp.watch('assets/css/src/*.css', ['styles']);
});

gulp.task('watch-debug', function () {
    var watch = require('gulp-watch');

    gulp.watch('assets/js/src/*.js', ['scripts-debug']);
    gulp.watch('assets/css/src/*.css', ['styles']);
});
