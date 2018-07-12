module.exports = function(grunt) { 
	grunt.initConfig({
	    inlinecss: {
	        main: {
	            options: {
	            },
	            files: {
	                'email_inlined_auto.html': 'email.html'
	            }
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-inline-css');

  	// Default task(s).
  	grunt.registerTask('default', ['inlinecss']);
}