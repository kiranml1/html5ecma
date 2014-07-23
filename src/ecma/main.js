define([],function(){

	return {
		"ArrayFunc":function(){
			var myArr = new Array(100);
			// This creates undefined x 100 values into an Array, so the best method is below
			console.log(myArr);

			var myArr = [];

			//or, create with elements if you know
			var myArr2 = ['You', 'Are', 'the', 'Best' ];    
			console.log(myArr2);

			//Don't randomly insert by Index
			//Only use positive integer as Index
			myArr2[10] = 100;
			//this will take the undefined values into the rest array values in between the index which will reduce the efficiency of the logic
			console.log(myArr2);
			//non indexed value will return -1
			console.log(myArr2['JsDude']);

			//Array.push will append the elements into the tail of the array
			console.log([1,2,3,4].push('Kiran','Kumar'));
			console.log([1,2,3,4].push(['Kiran','Kumar']));

			//Array Unshift will put elements to head i mean it will put the elements in to top stack
			var bigFamily = ['Dad', 'uncle', 'me without gf'];
			bigFamily.unshift("Dad's gf");
			console.log(bigFamily);
			bigFamily.unshift('grandPa', 'grandMa');
			console.log(bigFamily);

			//Dont blindly set the length
			var myArr = ['javaScript', 'is', 'my', 'favorite', 'language' ];
			console.log(myArr.length);
			myArr.length = 100;
			console.log(myArr);

			//Array : IndexOf: type and instance sensitive
			//Array indexof will have to called with index value type and insatnce

			console.log([1,2,3,4].indexOf(3));
			console.log([1,2,3,4].indexOf('3'));
			console.log([{a:1}, {b:2}].indexOf({b:2}));

			//Array : indexOf extra fromIndex Array.indexOf(index,fromIndex)
			console.log([1,2,3,4,5,4,3,2,1].indexOf(3));
			console.log([1,2,3,4,5,4,3,2,1].indexOf(3, 4));

			//slice
			var GFs = ['Winter', 'Spring', 'summer', 'fall', 'rain', 'harvest'];
			GFs.slice(2);
			// = ['summer', 'fall', 'rain', 'harvest']

			GFs.slice(2, 2);
			// = ['summer', 'fall']
			//Slice will just return the values but will not change the original array

			//if we need to change the original array we need to use splice

			var GFs = ['Winter', 'Spring', 'summer', 'fall', 'rain', 'harvest'];

			GFs.splice(2);
			 //= ['summer', 'fall', 'rain', 'harvest']
			GFs 
			// = ['Winter', 'Spring']

			GFs.splice(2, 2);
			// = ['summer', 'fall'] 

			GFs.splice(2, 2, 'Texas GF', 'Florida GF', 'Hawai GF')
			// = ["summer", "fall"]

			 GFs
			//  =["Winter", "Spring", "Texas GF", "Florida GF", "Hawai GF", "rain", "harvest"] 					}

			//delete dont delete
			//delete just creates a hole in ur array. dont delete element, use splice/ slice
			var myArr = [1,2,3,4,5,6,7];
			delete myArr[3]
			// = true
			// = [1, 2, 3, undefined × 1, 5, 6, 7]
			//	};

			// Array functions - forEach, map, filter, some, every,
			// forEach - Callback for the array elements
			// Map will create a new array out of the Array we map
			// Filter will create a filter to the Array element callbach will a boolean expression for each element return
			// some function will return boolean value based as in such any value in the some  function accepts condition given
			// every function will return boolean values based as in such every value in the some function accepts condition given

			// reduce will take the array and gives a reduced value with function we write into it

			console.log([1, 2, 3, 4].reduce(function(sum, el, idx, arr){  return sum + el; }));
			console.log([1, 2, 3, 4].reduce(function(sum, el, idx, arr){  return sum + el; }, 100));
		 }
		};

});