require.config({
    paths: {
        //External Modules
        jquery: "../bower_components/jquery/dist/jquery",
        //Internal Modules
        html5ecma: "main",
        xhr: "xhr/main",
        mathematics: "mathematics/main"
    },
    //shims
    shim: {
      "jquery": {
        exports: "$"
      },
            "webaudio": {
        deps:["jquery"]
      },
      "xhr":{
        deps:["jquery","html5ecma"]
      }
    }
});

//Booting or Intialising
require(["jquery","html5ecma","xhr","mathematics"],function(){
    console.log(arguments[3].isPrime(7));
});