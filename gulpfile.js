const gulp = require('gulp')
const shell = require('gulp-shell')
const surge = require('gulp-surge')

gulp.task('build', shell.task([
  'echo Transpiling ./src/index.js',
  'npm-run browserify -t babelify ./src/index.js > ./build/index.js',
  'echo Compressing ./build/index.js',  
  'minify ./build/index.js',
  'echo Compressing ./build/style.css',
  'minify ./build/style.css'
]))

gulp.task('deploy', [], () => {
  return surge({
    project: './build', 
    domain: 'zobelaerial.surge.sh' 
  })
})

gulp.task('default', shell.task([
  'gulp build',
  'gulp deploy'
]))