module.exports = function(grunt) { 
	grunt.initConfig({
	    inlinecss: {
	        main: {
	            options: {
	            },
	            files: {
	                'email.html': 'email_inlined_auto.html'
	            }
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-inline-css');

  	// Default task(s).
  	grunt.registerTask('default', ['inlinecss']);
}