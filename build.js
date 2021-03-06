({
	baseUrl: "src/",
    paths: {
        //External Modules
        jquery: "../bower_components/jquery/dist/jquery",
        xhrequest: "xhr/xhrequest",
        //Internal Modules
        html5ecma: "jquery.html5ecma",
        xhr: "xhr/main",
        mathematics: "mathematics/main"
    },
    //shims
    shim: {
    	'jquery': {
    		exports: '$'
    	},
    	'webaudio': {
    		deps:['jquery']
    	},
    	'xhr':{
    		deps:['jquery','html5ecma']
    	}
    },
    name: "main",
    out: "main-built.js"
})