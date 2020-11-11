const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const minify = require('gulp-minify');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');



const cleanDist = () => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
};

const scssBuild = () => {
    return gulp.src()
}




gulp.task('dev', gulp.series(cleanDist, ))