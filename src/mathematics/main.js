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
	//Sieve of Erastosthenes Implementation of Primes
	},'sievePrimeList':function(max){
		var sieve = [] ,i, j, primes = [];
		for (i = 2; i <= max; ++i) {
			if(!sieve[i])
			{
				primes.push(i);
				for(j = i << 1;j <= max; j += i)
				{
					sieve[j] = true;
				}
			}
		};
	    return primes;
	// Linear Search Algorithm in a collection/array
	},'findIndex':function(values,target){
		for(var i = 0; i < values.length; ++i)
		{
			if(values[i] == target) return i; 
		}
		return -1;
	}};
});