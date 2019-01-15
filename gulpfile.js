const gulp = require('gulp');
const del = require('del');
const order = require('gulp-order');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const flexibility = require('postcss-flexibility');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const uglify = require('gulp-uglify');
const log = require('fancy-log');
const replace = require('gulp-replace-path');
const twig = require('gulp-twig');

gulp.task('twig_templates', function(){
	return gulp.src('src/*.twig')
	.pipe(twig())
	.pipe(gulp.dest('./build'));
});

gulp.task('scripts', function(){
	var glob = [];
	glob.push('src/js/libraries/**/*.js');
	glob.push('src/js/script.js');
	return gulp.src(glob)
	.pipe(order(['*jquery.min.js*']))
	.pipe(concat('script.js'))
	.pipe(gulp.dest('build/js'))
	.pipe(uglify())
	.pipe(rename({ extname: '.min.js' }))
	.pipe(gulp.dest('build/js'));
});

gulp.task('style', function() {
	gulp.src(['./src/scss/sprite_60fps.svg','./src/scss/bootstrap1.min.css']).pipe(gulp.dest('build/css'));
	const plugins = [ autoprefixer({browsers: ['last 2 versions','ie 9']}), cssnano() ];
	return gulp.src('./src/scss/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss([flexibility]))
	.pipe(gulp.dest('build/css'))
	.pipe(postcss(plugins))
	.pipe(rename({ extname: '.min.css' }))
	.pipe(gulp.dest('build/css'));
});

gulp.task('assets', function(done){
	gulp.src(['src/assets/**/*']).pipe(gulp.dest('build/band-assets'));
	return gulp.src(['./README.md','./LICENSE', './favicon.ico']).pipe(gulp.dest('build/'));
});

gulp.task('style_dev_theme', function() {
	return gulp.src('./src/scss/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(rename({ extname: '.min.css' }))
	.pipe(gulp.dest('src/public/css'));
});

gulp.task('scripts_dev_theme', function(){
	var glob = [];
	glob.push('src/js/libraries/**/*.js');
	glob.push('src/js/script.js');
	return gulp.src(glob)
	.pipe(order(['*jquery.min.js*']))
	.pipe(concat('script.min.js'))
	.pipe(gulp.dest('src/public/js'));
});

gulp.task('clean', function(done) {
	return del([
		'src/public/css/*','src/public/js/*',
		'build/**'
	]);
});

gulp.task('default', 
	gulp.series('clean',
		gulp.parallel('scripts_dev_theme','style_dev_theme')
	)
);

gulp.task('build',
	gulp.series( 'assets',
		gulp.parallel('style', 'scripts', 'twig_templates'))
);
