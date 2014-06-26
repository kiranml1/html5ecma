require.config({
    paths: {
        //External Modules
        jquery: "../bower_components/jquery/dist/jquery",
        //Internal Modules
        html5ecma: "main",
        xhr: "xhr/main",
        mathematics: "mathematics/main",
        test:"test/main",
        d3plugins:"d3plugins/main"
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
require(["jquery","html5ecma","xhr","mathematics","test","d3plugins"],function(){
    // console.log(arguments[5].descending(1,2));
    // console.log(arguments[5].descending(2,1));
    // console.log(arguments[5].descending(1,1));
    // console.log(arguments[5].descending(1));
    // console.log(arguments[5].entries([0,2,3]));
    // console.log(arguments[5].entries({'name':"kiran","friend":"hemanth"}));
    // console.log(arguments[5].entries(0));
    console.log(arguments[5].max([10,5,3,4,5],function (value,index) {
      if(value > 4) return value*5;
    }));
});