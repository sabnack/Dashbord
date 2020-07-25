var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    rigger = require('gulp-rigger');

gulp.task('css', function() {
    var processors = [autoprefixer];
    return gulp.src('./src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('images', function() {
    return gulp.src('./src/images/*/*')
    .pipe(gulp.dest('./build/images/'))
});

gulp.task('html', function() {
    return gulp.src('./src/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('./build/'))
});

gulp.task('build', gulp.series('css', 'images', 'html'));