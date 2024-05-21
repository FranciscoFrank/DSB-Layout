// Script for gulp operation.

// Importing modules.
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass';
import concat from 'gulp-concat';

// Initialization of the SASS compiler.
const sass = gulpSass(sassCompiler);

// Path definitions.
const paths = {
  scss: 'scss/**/*.scss',
  dest: 'css',
  outputFile: 'style.css'
};

// Style compilation function.
function styles() {
  return gulp.src(paths.scss)
    .pipe(sass({
      outputStyle: 'expanded',
      sass: sass.compiler
    }).on('error', sass.logError))
    .pipe(concat(paths.outputFile))
    .pipe(gulp.dest(paths.dest));
}

// Change tracking function.
function watch() {
  gulp.watch(paths.scss, styles);
}

// Function export.
export { styles, watch };
export default gulp.series(styles, watch);
