const gulp = require('gulp')
const shell = require('gulp-shell')
const surge = require('gulp-surge')

gulp.task('build', shell.task([
  'echo Transpiling ./src/index.js',
  'npm-run browserify -o index.js -t babelify ./src/index.js',
  'echo Compressing ./index.js',
  'minify ./index.js',
  'echo Compressing ./style.css',
  'minify ./style.css'
]))

gulp.task('deploy', [], () => {
  return surge({
    project: './',
    domain: 'zobelaerialphotography.com'
  })
})

gulp.task('default', shell.task([
  'gulp build',
  'gulp deploy'
]))
