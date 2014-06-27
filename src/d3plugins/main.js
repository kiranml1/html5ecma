define([],function(){

	function d_number(x){
		return x != null && !isNaN(x);
	}

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
		},
		extent:function(array,func){
			var i = -1,
				n = array.length,
				a,
				b,
				c;
			if(arguments.length === 1)
			{
				while( ++i < n && !(( a = c = array[i] ) != null & a <= a )) a = c = undefined;
				while( ++i < n) if ( (b = array[i]) != null ) {
					if(a > b) a = b;
					if(c < b) c = b;
				}
			}else {
				while( ++i < n && !(( a = c = func.call(array,array[i],i)) != null && a <= a)) a = c = undefined;
				while( ++i < n) if( (b = func.call(array,array[i],i)) != null ){
					if(a > b) a = b;
					if(c < b) c = b;
				}
			}
			return [a,c];
		},
		sum:function(array,func){
			var s = 0,
				n = array.length,
				a,
				i = -1;
			if(arguments.length === 1)
			{
				while( ++i < n ) if(!isNaN(a = +array[i])) s += a;
			}else {
				while( ++i < n ) if(!isNaN(a = +func.call(array,array[i],i)) != null ) s += a;
			}
			return s;
		},
		mean:function(array,func){
			var s = 0,
				n = array.length,
				a,
				i = -1,
				j = n;
			if(arguments.length === 1)
			{
				while( ++i < n) if(d_number(a = array[i])) s += a; else --j;
			}else {
				while( ++i < n) if(d_number(a = func.call(array,array[i],i))) s += a; else --j;
			}
			return j ? s/j : undefined;
		},
		quantile:function(values,p){
			var H = (values.length-1)*p + 1,
				h = Math.floor(H),
				v = +values[h-1],
				e = H - h;
			return e ? v + e * (values[h]-v) : v;
		},
		median:function(array,func){
			if(arguments.length > 1) array = array.map(func);
			array = array.filter(d_number);
			return array.length ? this.quantile(array.sort(this.ascending),0.5) : undefined;
		},
		// Fisher Yates Shuffle Algorithm
		shuffle:function(array) {
		    var m = array.length, t, i;
			while (m) {
			i = Math.random() * m-- | 0;
			t = array[m], array[m] = array[i], array[i] = t;
			}
			return array;
		},
		permute:function(array,indexes){
			var i = indexes.length, permutes = new Array(i);
			while(i--) permutes[i] = array[indexes[i]];
			return permutes;
		},
		pairs:function(array){
			var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
			while(i < n ) pairs[i] = [p0 = p1, p1 = array[++i]];
			return pairs;
		}
	};

});