
import del from 'del'
import gulp from 'gulp'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import bower from 'gulp-bower'
import jshint from 'gulp-jshint'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import sourcemaps from 'gulp-sourcemaps'
import Cachebuster from 'gulp-cachebust'
import autoprefixer from 'gulp-autoprefixer'

const staticdir = 'static'

let cachebust = new Cachebuster();

const path = {
    from: {
        scripts: 'scripts/**/*.js',
        styles: 'styles/*',
        html: 'index.html'
    },
    to: {
        scripts: `./${staticdir}/js`,
        scriptfile: `havendale.min.js`,
        styles: `./${staticdir}/css`,
        templates: `./templates/`
    }
}

gulp.task('clean', () => {
    return del([
        `${path.to.scripts}/**/*`,
        `${path.to.styles}/**/*`
    ])
})

gulp.task('styles', ['clean'], () => {
    return gulp.src(path.from.styles)
        .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(cachebust.resources())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.to.styles))
})

gulp.task('lint', () => {
    return gulp.src(path.from.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
})

gulp.task('install', () => {
    return bower()
})

gulp.task('scripts', ['install', 'lint'], () => {
    return gulp.src(path.from.scripts)
        .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(concat(path.to.scriptfile))
            .pipe(uglify())
            .pipe(cachebust.resources())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.to.scripts))
})

gulp.task('default', ['clean', 'styles', 'scripts'], () => {
    return gulp.src(path.from.html)
        .pipe(cachebust.references())
        .pipe(gulp.dest(path.to.templates))
})
