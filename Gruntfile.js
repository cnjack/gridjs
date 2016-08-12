'use strict';

module.exports = function(grunt) {
	// Project configuration.  
	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '*',
					keepalive: true,
					base: ['.']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
}