define([],function(){

	// D3 Souurce Package
	return {
		"version":1.0,

		// Checking Whether a and b are to be arranged in asending order or not
		// a (1,2) => -1 , a(2,1) => 1, a(0,0) => 0, a(0) => NaN
		"ascending":function(a,b){
			return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
		},
		"descending":function(a,b){
			return b < a ? -1 : b > a ? 1 : b >=a ? 0 : NaN;
		},
		"entries": function(map){
			var entries = [];
			for(var key in map) { entries.push({key:key,value:map[key]}); }
			return entries;
		},
		"min": function(array,func){
			var i = -1,
				n = array.length,
				a,
				b;
			if(arguments.length === 1) {
				while(++i < n && !((a = array[i]) != null && a <= a )) a = undefined;
				while(++i < n) if((b = array[i]) != null && a > b ) a = b;
			}else {
				while(++i < n && !((a = func.call(array,array[i],i)) != null && a <= a)) a =  undefined;
				while(++i < n) if((b = func.call(array,array[i],i)) != null && a > b) a = b;
			}
			return a;
		},
		"max": function(array,func){
			var i = -1,
		        n = array.length,
		        a,
		        b;
		    if (arguments.length === 1) {
		      while (++i < n && !((a = array[i]) != null && a <= a)) a = undefined;
		      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
		    } else {
		      while (++i < n && !((a = func.call(array, array[i], i)) != null && a <= a)) a = undefined;
		      while (++i < n) if ((b = func.call(array, array[i], i)) != null && b > a) a = b;
		    }
		    return a;
		}
	};

});