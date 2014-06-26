define(['d3plugins'],function(d3) {
	
	describe('D3 Arrays Test Suite',function(){
		it('must pass arguments are in Ascending and Descedning orfer',function(){
			expect(d3.descending(1,2)).toBe(1);
			expect(d3.ascending(2,1)).toBe(1);
			expect(d3.descending(2,1)).toBe(-1);
			expect(d3.ascending(1,2)).toBe(-1);
			//expect(d3.ascending(1)).toBe(NaN);
		});

		it('entries',function(){

		});
		
		it('entries',function(){
			
		});
	});

});