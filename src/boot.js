require.config({
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        html5ecma: "jquery.html5ecma",
        xhr: "xhr/main"
    },
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
    }
});

require(['jquery','html5ecma','xhr'],function(){
    arguments[2].init();
});