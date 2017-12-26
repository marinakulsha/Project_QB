let  gulp = require('gulp'),
    cucumber = require('gulp-cucumber');

gulp.task('test', function () {
    return gulp.src('test/features/FeatureHome.feature')
        .pipe(cucumber({
            'steps': 'test/step_definitions/steps.js',
            'support': 'test/support/*.js',
        }))
});