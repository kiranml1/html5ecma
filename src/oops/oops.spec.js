define(['oops'],function(oops){

	describe('Testing Scopes',function(){
		it('Namespace Function Scope',function(){
			expect(oops.apply()).toBe("class");
			expect(oops.call()).toBe("class");
			expect(oops.bind()()).toBe("class");
		});
	});

});