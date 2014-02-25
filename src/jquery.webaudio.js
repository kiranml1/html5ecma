define(["jquery"],function($){
	return (function ( $, window, document, undefined ) {
		return function WebAudio(){
			this.init = function(){
				console.log("plugin is invoked");
			};
		};
	});
});
