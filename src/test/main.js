define(["jquery"],function($){

	console.log("Loading file into Unit Tests");

	return function(){
		$.get("src/test/result.json",function(data){
			return data;
		});
	};

});