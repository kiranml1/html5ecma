// Prime Number Mathematics
// Checking Whether a number is Prime or Not
define([],function () {

	String.prototype.reverse = function (){
	  if(!this || this.length <2) return this;
	  
	  return this.split('').reverse().join('');
	};

	//Different Methods
	//Basic Methodolgy of Prime Check
	return {"isPrime":function(num){
		if(num < 2){
			return false;
		}
		for(var i = 2; i < num ; i++)
		{
			if(num%i === 0){
              return false;
            }
        }
		return true;
	// Basic Method of listing Prime Numbers	
	},"listPrimes":function(length){
		var primes = [],i;
		for (i = 0; i < length; i++) {
			if(this.isPrime(i)){
				primes.push(i);
			}
		}
		return primes;
	//Sieve of Erastosthenes Implementation of Primes
	},"sievePrimeList":function(max){
		var sieve = [] ,i, j, primes = [];
		for (i = 2; i <= max; ++i) {
			if(!sieve[i]){
				primes.push(i);
				for(j = i << 1;j <= max; j += i)
				{
					sieve[j] = true;
				}
			}
		}
    return primes;
	// Linear Search Algorithm in a collection/array
	},"findIndex":function(values,target){
		for(var i = 0; i < values.length; ++i)
		{
			if(values[i] === target){
			  return i;
            }
        }
		return -1;
	},"isPrimeNumber":function(n){
		var divisor = 2;
		while (n > divisor){
		    if(n % divisor == 0){
		     return false; 
		    }
		    else
		      divisor++;
		}
		return true;
	},"PrimeFactors":function(n){
		var divisor = 2,
			factors = [];
		while (n > divisor){
		    if(n % divisor == 0){
		     factors.push(divisor);
		     n = n / divisor;
		     return false; 
		    }
		    else
		      divisor++;
		}
		return true;
	},"fibonacci":function(n){
		var fibo = [0, 1];
  
		if (n <= 2) return 1;

		for (var i = 2; i <=n; i++ ){
		   fibo[i] = fibo[i-1]+fibo[i-2];
		 }

		return fibo[n];
	},"fibo":function(n){
		if(n<=1)
	    return n;
	  	else
	    return fibonacci(n-1) + fibonacci (n-2);
	},"greatestCommonDivisor":function(a,b){
		var divisor = 2, 
      		greatestDivisor = 1;

		  //if u pass a -ve number this will not work. fix it dude!!
		  if (a < 2 || b < 2)
		     return 1;
		  
		  while(a >= divisor && b >= divisor){
		   if(a %divisor == 0 && b% divisor ==0){
		      greatestDivisor = divisor;      
		    }
		   divisor++;
		  }
		  return greatestDivisor;
	},"greatestCommon":function(a,b){
		if(b == 0)
	     return a;
	    else 
	     return greatestCommonDivisor(b, a%b);
	},"removeDuplicate":function(arr){
		var exists ={},
		      outArr = [], 
		      elm;

		  for(var i =0; i<arr.length; i++){
		    elm = arr[i];
		    if(!exists[elm]){
		      outArr.push(elm);
		      exists[elm] = true;
		   }
		  }
		return outArr;
	},"mergeSortedArray":function(a,b){
		var merged = [], 
		      aElm = a[0],
		      bElm = b[0],
		      i = 1,
		      j = 1;
		  
		  if(a.length ==0)
		    return b;
		  if(b.length ==0)
		    return a;
		  /* 
		  if aElm or bElm exists we will insert to merged array
		  (will go inside while loop)
		   to insert: aElm exists and bElm doesn't exists
		             or both exists and aElm < bElm
		    this is the critical part of the example            
		  */
		  while(aElm || bElm){
		   if((aElm && !bElm) || aElm < bElm){
		     merged.push(aElm);
		     aElm = a[i++];
		   }   
		   else {
		     merged.push(bElm);
		     bElm = b[j++];
		   }
		  }
		  return merged;
	},"swapNumber":function(a,b){
		 console.log('before swap: ','a: ', a, 'b: ', b);
		  b = b -a;
		  a = a+ b;
		  b = a-b;
		  console.log('after swap: ','a: ', a, 'b: ', b);
	},"swapNumberBit":function(a,b){
		console.log("a: " + a + " and b: " + b);
		  a = a ^ b;
		  b = a ^ b;
		  a = a ^ b;
		  console.log("a: " + a + " and b: " + b);
	},"reverse":function(str){
		var rtnStr = '';
		  for(var i = str.length-1; i>=0;i--){
		    rtnStr +=str[i];
		  }
		  return rtnStr;
	},"reverseone":function(str){
		var rtnStr = [];
		  if(!str || typeof str != 'string' || str.length < 2 ) return str;
		  
		  for(var i = str.length-1; i>=0;i--){
		    rtnStr.push(str[i]);
		  }
		  return rtnStr.join('');
	},"reversetwo":function(str){
		str = str.split('');
		  var len = str.length,
		      halfIndex = Math.floor(len / 2) - 1,
		      revStr;
		  for (var i = 0; i <= halfIndex; i++) {
		    revStr = str[len - i - 1];
		    str[len - i - 1] = str[i];
		    str[i] = revStr;
		  }
		  return str.join('');
	},"reversethree":function(str){
		if (str === "") {
	        return "";
	    } else {
	        return reverse(str.substr(1)) + str.charAt(0);
	    }
	},"reverseFour":function(str){
		if(!str || str.length <2) return str;
  		return str.split('').reverse().join('');
	},"reverseWords":function(str){
		var rev = [], 
		     wordLen = 0;
		 for(var i = str.length-1; i>=0; i--){
		   if(str[i]==' ' || i==0){
		     rev.push(str.substr(i,wordLen+1));
		     wordLen = 0;
		   }
		   else
		     wordLen++;
		 }
		 return rev.join(' ');
	},"reverseWord":function(str){
		return str.split(' ').reverse();
	},"pallindrome":function(str){
		  var i, len = str.length;
		  for(i =0; i<len/2; i++){
		    if (str[i]!== str[len -1 -i])
		       return false;
		  }
		  return true;
	},"permutations":function(str){
		var arr = str.split(''),
	    len = arr.length, 
	    perms = [],
	    rest,
	    picked,
	    restPerms,
	    next;

	    if (len == 0)
	        return [str];

	    for (var i=0; i<len; i++)
	    {
	        rest = Object.create(arr);
	        picked = rest.splice(i, 1);

	        restPerms = permutations(rest.join(''));

	       for (var j=0, jLen = restPerms.length; j< jLen; j++)
	       {
	           next = picked.concat(restPerms[j]);
	           perms.push(next.join(''));
	       }
	    }
	   return perms;
	}};
});