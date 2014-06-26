define(["jquery"],function($){

	return function(){
		$.get("src/test/result.json",function(data){
			return data;
		});
	};

});