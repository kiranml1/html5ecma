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
		},
		"object":function(){
			var person = Object.create(null);
			Object.defineProperty(person,'firstname',{
				value:'Kiran',
				writable:true,
				enumerable:true,
				configurable:true
			});
			Object.defineProperty(person,'lastname',{
				value:'Kumar',
				writable:true,
				enumerable:true,
				configurable:true
			});

			return person;
		},
		"objectFunc":function(){
			var person = Object.create(null);

			Object.defineProperty(person,'firstname',{
				value:'Kiran',
				writable:true,
				enumerable:true,
				configurable:true
			});

			Object.defineProperty(person,'lastname',{
				value:'Kumar',
				writable:true,
				enumerable:true,
				configurable:true
			});

			var man = Object.create(person);

			Object.defineProperty(man,"fullname",{
				value:function(){
					return this.firstname+" "+this.lastname;
				},
				writable:true,
				enumerable:true,
				configurable:true
			});

			return man;
		},
		"protoFunc":function(){

			var soper = function() {
				this.name =  "Kiran Kumar";
			};
			soper.prototype.username = "kiranml1";
			soper.prototype.getUserName = function(){
				return this.name+"@"+this.username;
			};

			return new soper();
		}
	};

});