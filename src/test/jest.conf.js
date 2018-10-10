module.exports = {
	coverageDirectory: '<rootDir>/target/test-results/',
	collectCoverageFrom: [
		"src/main/**/*.js"
	],
	globals: {
		__TRANSFORM_HTML__: true
	},
	reporters: [
		'default'
	],
	testMatch: [ '<rootDir>/src/test/**/+(*.)+(spec.js)' ],
	rootDir: '../../',
	testURL: "http://localhost/",

	globalSetup: '<rootDir>/src/test/setup.js',
	globalTeardown: '<rootDir>/src/test/teardown.js'
};
