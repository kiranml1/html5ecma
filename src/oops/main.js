define([],function(){

	var oops = {'name':'class','properties':'inheritance'};

	Function.prototype.bind = function(ctx) {
	    var fn = this;
	    return function() {
	        return fn.apply(ctx, arguments);
	    };
	};

	return {
		"name":"namespace",
		"properties":"inheritance",
		"method":function(){
			// Checking one level scope
			// Consoling Values
			// console.log(arguments[0],arguments.length);
			// console.log(this.name);
			return this.name;
		},
		"apply":function(){
			return this.method.apply(oops,["Apply","function"]);
		},
		"call":function(){
			return this.method.call(oops,"Call","function");
		},
		"bind":function(){
			//console.log(this.method.bind(oops)());
			return this.method.bind(oops);
		}
	};

});