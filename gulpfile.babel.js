
import del from 'del'
import gulp from 'gulp'
import sass from 'gulp-sass'
import babel from 'rollup-plugin-babel'
import bower from 'gulp-bower'
import jshint from 'gulp-jshint'
import uglify from 'gulp-uglify'
import sourcemaps from 'gulp-sourcemaps'
import Cachebuster from 'gulp-cachebust'
import autoprefixer from 'gulp-autoprefixer'

import rollup from 'rollup-stream'
import rename from 'gulp-rename'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import commonjs from 'rollup-plugin-commonjs'
import includePaths from 'rollup-plugin-includepaths'

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
        scriptfile: `scripts.min.js`,
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


// I'm ashamed of myself
gulp.task('prepareScripts', ['install', 'lint'], () => {
    gulp.src("./.babelrc")
        .pipe(rename("temp.babelrc"))
        .pipe(gulp.dest("."))
    return gulp.src("./gulp.babelrc")
        .pipe(rename(".babelrc"))
        .pipe(gulp.dest("."))
})

gulp.task('scripts', ['prepareScripts'], () => {
    return rollup({
        entry: './scripts/app.js',
        sourceMap: true,
        plugins: [
            babel({
                exclude: "static/lib/**"
            }),
            includePaths({
                paths: ['scripts', 'static/lib']
            }),
            commonjs({
                include: 'static/lib/**'
            })
        ]
    })
    .pipe(source('app.js', './scripts'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(cachebust.resources())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.to.scripts))
})

// undoing earlier gambiarra
gulp.task('unprepareScripts', ['scripts'], () => {
    gulp.src("./.babelrc")
        .pipe(rename("gulp.babelrc"))
        .pipe(gulp.dest("."))
    gulp.src("./temp.babelrc")
        .pipe(rename(".babelrc"))
        .pipe(gulp.dest("."))
    return del(['./temp.babelrc'])
})

gulp.task('default', ['clean', 'styles', 'unprepareScripts'], () => {
    return gulp.src(path.from.html)
        .pipe(cachebust.references())
        .pipe(gulp.dest(path.to.templates))
})
