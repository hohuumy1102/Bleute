var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');

gulp.task('serve', [], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });
    gulp.watch(['*.html'], reload);
    gulp.watch(['js/*.js'], reload);
    gulp.watch(['css/*.css'], reload);
    gulp.watch(['images/*.css'], reload);
});

gulp.task('gopcss', function() {
  return gulp.src([
      'css/bootstrap.min.css', 
      'css/font-awesome.min.css', 
      'css/jquery.fullPage.css', 
      'css/jquery.gridrotator.css',
      'css/lightbox.css', 
      'css/colorbox.css',
      'css/style.css'
      ])
    .pipe(concat('main.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'));
});

gulp.task('gopjs', function() {
  return gulp.src([
      'js/jquery.min.js', 
      'js/jquery-ui.min.js', 
      'js/bootstrap.min.js', 
      'js/jquery.fullPage.min.js',
      'js/jquery.svg3dtagcloud.min.js', 
      'js/lightbox.js',
      'js/modernizr.custom.26633.js',
      'js/jquery.gridrotator.js',
      'js/jquery.colorbox.js',
      'js/main.js'
      ])
    .pipe(concat('all.js'))
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['-min.js'] //những file không muốn nén
    }))
    .pipe(gulp.dest('js/'));
});

gulp.task('nenimg', function() {
  gulp.src('images/*') //đường dẫn đến thư mục chứa các file images
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images')); //thư mục dùng để chứa các file images sau khi nén
});


gulp.task('compress', function() {
  //cấu hình minify js
  gulp.src('js/*.js') //đường dẫn đến thư mục chứa các file js
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['-min.js'] //những file không muốn nén
    }))
    .pipe(gulp.dest('js')); //thư mục dùng để chứa các file js sau khi nén
  //cấu hình minify css
  gulp.src('css/*.css') //đường dẫn đến thư mục chứa các file css
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css')); //thư mục dùng để chứa các file css sau khi nén
  //cấu hình minify image
  gulp.src('images/*') //đường dẫn đến thư mục chứa các file images
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('images')); //thư mục dùng để chứa các file images sau khi nén
});

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['sass/**/*'], ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch', 'serve']);