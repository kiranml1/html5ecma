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
			files: ["src/**/*.js","src/!polyfills/*.js","!src/**/*spec.js"],
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

		//	bower dependencies
		bowerInstall: {
	      target: {
	        src: 'demo/index.html' // point to your HTML file.
	      }
	    },

	    //requirejs configuration
	    requirejs: {
		  compile: {
		    options: {
				    // Assume your scripts are in a subdirectory under this path.
				    appDir: '',

				    // By default, all modules are located relative to this path.
				    baseUrl: 'src/',

				    // Location of the runtime config be read for the build.
				    mainConfigFile: 'src/boot.js',

				    //The directory path to save the output.
				    out: 'dist/jquery.html5ecma.js',

				    // If you do not want uglifyjs optimization.
				    optimize: 'none',

				    optimizeCss: 'none',

				    // Inlines any text! dependencies, to avoid separate requests.
				    inlineText: true,

				    // Modules to stub out in the optimized file.
				    // stubModules: ['underscore', 'text', 'tpl'],

				    // Files combined into a build layer will be removed from the output folder.
				    removeCombined: true,

				    // This option will turn off the auto-preservation.
				    preserveLicenseComments: false,

				    //List the modules that will be optimized.
				    name: "boot" // main config file
				}
		    }
		  },

		  // Karma Config file
		  karma: {
			  unit: {
			    configFile: 'karma.conf.js',
			    runnerPort: 9999,
			    singleRun: true,
			    browsers: ['PhantomJS'],
			    logLevel: 'ERROR'
			}
		  },

		  // Express
		  express: {
		  	  all: {
		  	  	options:{
		  	  		port:9000,
		  	  		host:'localhost',
		  	  		bases:['.'],
		  	  		livereload:true
		  	  	}
		  	  }
		  },

		  // Less
		  less:{
		  	main:{
		  		files:{"less/main.css":"less/main.less"}
		  	}
		  },

		  // Livereload
		  watch:{
		  	options:{
				livereload:true
		  	},
		  	less:{
		  		files:["less/*.less"],
		  		tasks:'less'
		  	},
		  	scripts: {
			    files: ["src/**/*.js","src/!polyfills/*.js","!src/**/*spec.js"],
			    tasks: ['jshint'],
			 }
		  }

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-bower-install');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-devtools');

	grunt.registerTask("build", ["requirejs", "uglify","karma","jshint"]);
	grunt.registerTask("default", ["watch"]);
	grunt.registerTask("travis", ["jshint"]);

};
