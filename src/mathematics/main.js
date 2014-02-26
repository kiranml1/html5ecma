// Prime Number Mathematics
// Checking Whether a number is Prime or Not
define([],function () {
	//Different Methods
	//Basic Methodolgy of Prime Check
	return {'isPrime':function(num){
		if(num < 2) return false;
		for(var i = 2; i < num ; i++)
		{
			if(num%i == 0) return false;
		}
		return true;
	// Basic Method of listing Prime Numbers	
	},'listPrimes':function(length){
		var primes = [];
		for (var i = 0; i < length; i++) {
			if(this.isPrime(i))	primes.push(i);
		};
		return primes;
	}};
});