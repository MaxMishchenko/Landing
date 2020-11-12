module.exports = function () {
	$.gulp.task('scripts:lib', function () {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/slick-carousel/slick/slick.min.js'])
				.pipe($.gp.concat('libs.min.js'))
				.pipe($.gp.uglify())
				.pipe($.gulp.dest('build/js'))
				.pipe($.bs.reload({
					stream: true
				}));
	});
	
	$.gulp.task('scripts', function () {
		return $.gulp.src('src/js/main.js')
				.pipe($.gp.uglify())
				.pipe($.gulp.dest('build/js'))
				.pipe($.bs.reload({
					stream: true
				}));
	});
}