const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// compile scss into css
function style(){
    // where is my scss file?
    return gulp.src('./scss/**/*.scss')
    // pass scss files through sass compiler
    .pipe (sass())
    // save the css files to
    .pipe (gulp.dest('./css'))
    // change the stream to all browsers
    .pipe(browserSync.stream());
}


function watch(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}





exports.style = style;
exports.watch = watch;
