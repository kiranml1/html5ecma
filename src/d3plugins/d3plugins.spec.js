define(['d3plugins'],function(d3) {
	
	describe('D3 Arrays Test Suite',function(){
		it('must pass arguments are in Ascending and Descedning orfer',function(){
			expect(d3.descending(1,2)).toBe(1);
			expect(d3.ascending(2,1)).toBe(1);
			expect(d3.descending(2,1)).toBe(-1);
			expect(d3.ascending(1,2)).toBe(-1);
		});

		it('entries',function(){
			expect(d3.entries([1,2])).toEqual([{key:'0',value:1},{key:'1',value:2}]);
			expect(d3.entries(['d3','jquery'])).toEqual([{key:'0',value:'d3'},{key:'1',value:'jquery'}]);
		});

		it('min & max',function(){
			expect(d3.min([1,2,3,4,5,6])).toEqual(1);
			expect(d3.max([1,2,3,4,5,6])).toEqual(6);
			expect(d3.min([1,2,3,4,5,6],function (value, index) {
				return value*10;
			})).toEqual(10);
			expect(d3.max([1,2,3,4,5,6],function (value, index) {
				return value*10;
			})).toEqual(60);
		});

		it('D3 Extent',function(){
			expect(d3.extent([10,40,30,50,30])).toEqual([10,50]);
			expect(d3.extent([10,40,30,50,30],function (value, index) {
				return value*10;
			})).toEqual([100,500]);
		});

		it('D3 Sum',function(){
			expect(d3.sum([1,2,3,4])).toBe(10);
			expect(d3.sum([1,2,3,4],function(value,index){
				return value*10;
			})).toBe(100);
		});

		it('D3 Mean',function(){
			expect(d3.mean([1,2,3,4])).toBe(2.5);
			expect(d3.mean([1,2,3,4],function(value,index){
				return value*10;
			})).toBe(25);
		});

		it('D3 Median',function(){
			expect(d3.median([50,20,30,60])).toBe(40);
			expect(d3.median([50,20,30,60],function(value,index){
				return value*10;
			})).toBe(400);
		});

		it('D3 Permute',function(){
			expect(d3.permute([10,20,30,40],[3,2,1,0])).toEqual([40,30,20,10]);
		});

		it('D3 Pairs',function(){
			expect(d3.pairs([10,20,30])).toEqual([[10,20],[20,30]]);
		});
		
	});

});