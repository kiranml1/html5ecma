module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("html5ecma.jquery.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses[0].type %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			dist: {
				src: ["src/jquery.html5ecma.js"],
				dest: "dist/jquery.html5ecma.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.html5ecma.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.html5ecma.js"],
				dest: "dist/jquery.html5ecma.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// CoffeeScript compilation
		coffee: {
			compile: {
				files: {
					"dist/jquery.html5ecma.js": "src/jquery.html5ecma.coffee"
				}
			}
		},

		//bower dependencies
		bowerInstall: {
	      target: {
	        src: 'demo/index.html' // point to your HTML file.
	      }
	    },

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks('grunt-bower-install');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.registerTask("default", ["jshint", "concat", "uglify"]);
	grunt.registerTask("travis", ["jshint"]);

};
