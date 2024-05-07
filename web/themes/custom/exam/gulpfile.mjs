import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass';
import concat from 'gulp-concat';

const sass = gulpSass(sassCompiler);

const paths = {
  scss: 'scss/**/*.scss',
  dest: 'css',
  outputFile: 'style.css'
};

function styles() {
  return gulp.src(paths.scss)
    .pipe(sass({
      outputStyle: 'expanded',
      sass: sass.compiler
    }).on('error', sass.logError))
    .pipe(concat(paths.outputFile))
    .pipe(gulp.dest(paths.dest));
}

function watch() {
  gulp.watch(paths.scss, styles);
}

export { styles, watch };
export default gulp.series(styles, watch);
