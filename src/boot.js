require.config({
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
      "jquery": {
        exports: "$"
      },
      "webaudio": {
        deps:["jquery"]
      },
      "xhr":{
        deps:["jquery","html5ecma"]
      },
      "test":{
        deps:["jquery"]
      }
    }
});

//Booting or Intialising
require(["jquery","html5ecma","xhr","mathematics","test","d3plugins","oops"],function(){
  console.log(arguments[5].median([50,20,30,60],function(value,index){
        return value*10;
      }));
});