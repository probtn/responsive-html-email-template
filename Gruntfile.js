module.exports = function(grunt) {
	grunt.initConfig({
	    inlinecss: {
	        main: {
	            options: {
	            	webResources: {
	            		'images': false
	            	}
	            },
	            files: {
	                'email_inlined_auto.html': 'email.html',
	                'email2_inlined_auto.html': 'email2.html',
	                'email_africa1_inlined_auto.html': 'email_africa1.html',
	                'email3_en_inlined_auto.html': 'email3_en.html',
									'emai_bf_inlined.html': 'email_black_friday.html',
									'email4_inlined.html': 'email4_rus.html'
	            },

	        }
	    }
	});

	grunt.loadNpmTasks('grunt-inline-css');

  	// Default task(s).
  	grunt.registerTask('default', ['inlinecss']);
}
