var tests = [];
for (var file in window.__karma__.files) {
    if (/spec\.js$/.test(file)) {
        tests.push(file);
    }
}

require.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src/',
    paths: {
        //External Modules
        jquery: "../bower_components/jquery/dist/jquery",
        //Internal Modules
        html5ecma: "main",
        xhr: "xhr/main",
        mathematics: "mathematics/main",
        test:"test/main",
        d3plugins:"d3plugins/main",
        oops:"oops/main"
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
    	},
        "test":{
            deps:['jquery']
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }

    throw err;
};