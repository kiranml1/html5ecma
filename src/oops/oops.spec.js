define(['oops'],function(oops){

	describe('Testing Scopes',function(){
		it('Namespace Function Scope',function(){
			expect(oops.apply()).toBe("class");
			expect(oops.call()).toBe("class");
			expect(oops.bind()()).toBe("class");
		});
		it('Object Create Specification',function(){
			expect(oops.object().firstname).toBe('Kiran');
			expect(oops.object().lastname).toBe('Kumar');
			expect(oops.objectFunc().fullname()).toBe('Kiran Kumar');
			expect(oops.protoFunc().getUserName()).toBe('Kiran Kumar@kiranml1');
		});
	});

});