define(['test','jquery'],function (test,$) {
	
	describe('Test',function(){

		it('It Containds Sample Spec',function(){
			expect(true).toBe(true);
		});

		it('It Containds Sample Spec',function(){
			a = true;
			expect(a).toBe(true);
		});

		it('Falsy Case',function(){
			expect(false).not.toBe(true);
		});

		it('variable Match',function(){
			var a = 12;
			var	b = a;
			expect(a).toBe(b);
			expect(b).not.toBe(null);
		});

		it('Object Match',function(){
			var a = {"a":1,"b":2};
			var	b = {"a":1,"b":2};
			expect(b).toEqual(a);
		});

		it('Reg Exp Match',function(){
			var reg = "foo bar mooz";
			expect(reg).toMatch(/bar/);
			expect(reg).toMatch("bar");
			expect(reg).not.toMatch(/quuz/);
		});

		it('defined state',function(){
			var obj = {
				foo:"foo"
			};
			expect(obj.foo).toBeDefined();
			expect(obj.bar).not.toBeDefined();
		});

		it('Null State Definition',function(){
			var foo = null;
			var nul = "foo";
			expect(null).toBeNull();
			expect(foo).toBeNull();
			expect(nul).not.toBeNull();
		});

		it('toBeTruthy and toBeFalsy',function(){
			var a, foo = "foo";
			expect(foo).toBeTruthy();
			expect(a).not.toBeTruthy();

			expect(foo).not.toBeFalsy();
			expect(a).toBeFalsy();
		});

		it('toContain',function(){
			var foo = ["foo","bar","quz"];
			expect(foo).toContain("bar");
			expect(foo).not.toContain("king");
		});

		it('toBeLessThan',function(){
			var pi = 3.14;
			var e = 2.78;
			expect(e).toBeLessThan(pi);
			expect(pi).not.toBeLessThan(e);
			expect(pi).toBeGreaterThan(e);
    		expect(e).not.toBeGreaterThan(pi);
    		expect(pi).not.toBeCloseTo(e, 2);
   			expect(pi).toBeCloseTo(e, 0);
		});

		it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
		    var foo = function() {
		      return 1 + 2;
		    };
		    var bar = function() {
		      return v + 1;
		    };
		    expect(foo).not.toThrow();
		    expect(bar).toThrow();
		});

	});

	describe('Setup and Teardown',function(){
		var foo;

		beforeEach(function(){
			foo = 0;
			foo += 1;
		});

		afterEach(function(){
			foo = 0;
		});

		it('Test Case function Exp',function(){
			expect(foo).toEqual(1);
		});

		it('Test Case function',function(){
			expect(foo).toEqual(1);
		});

	});

	describe("A spec", function() {
	  beforeEach(function() {
	    this.foo = 0;
	  });

	  it("can use the `this` to share state", function() {
	    expect(this.foo).toEqual(0);
	    this.bar = "test pollution?";
	  });

	  it("prevents test pollution by having an empty `this` created for the next spec", function() {
	    expect(this.foo).toEqual(0);
	    expect(this.bar).toBe(undefined);
	  });
	});

	describe("A spec", function() {
	  var foo;

	  beforeEach(function() {
	    foo = 0;
	    foo += 1;
	  });

	  afterEach(function() {
	    foo = 0;
	  });

	  it("is just a function, so it can contain any code", function() {
	    expect(foo).toEqual(1);
	  });

	  it("can have more than one expectation", function() {
	    expect(foo).toEqual(1);
	    expect(true).toEqual(true);
	  });

	  describe("nested inside a second describe", function() {
	    var bar;

	    beforeEach(function() {
	      bar = 1;
	    });

	    it("can reference both scopes as needed", function() {
	      expect(foo).toEqual(bar);
	    });
	  });
	});

	xdescribe("A spec", function() {
	  var foo;

	  beforeEach(function() {
	    foo = 0;
	    foo += 1;
	  });

	  it("is just a function, so it can contain any code", function() {
	    expect(foo).toEqual(1);
	  });
	});


	// describe("Pending specs", function() {

	//   xit("can be declared 'xit'", function() {
	//     expect(true).toBe(false);
	//   });

	//   it("can be declared with 'it' but without a function");

	//   it("can be declared by calling 'pending' in the spec body", function() {
	//     expect(true).toBe(false);
	//     pending();
	//   });

	// });

	describe('A spy',function(){

		var foo, bar = null;

		beforeEach(function(){
			foo = {
				setBar:function(value){
					bar = value;
				}
			};

			spyOn(foo,'setBar');

			foo.setBar(123);
			foo.setBar(456,'another program')

		});

		it('tracks spy called or not',function(){
			expect(foo.setBar).toHaveBeenCalled();
		});

		it("tracks all the arguments of its calls", function() {
		    expect(foo.setBar).toHaveBeenCalledWith(123);
		    expect(foo.setBar).toHaveBeenCalledWith(456, 'another program');
		});

		it("stops all execution on a function", function() {
		    expect(bar).toBeNull();
		});

	});

	describe("A spy, when configured to call through", function() {
	  var foo, bar, fetchedBar;

	  beforeEach(function() {
	    foo = {
	      setBar: function(value) {
	        bar = value;
	      },
	      getBar: function() {
	        return bar;
	      }
	    };

	    spyOn(foo, 'getBar').and.callThrough();

	    foo.setBar(123);
	    fetchedBar = foo.getBar();
	  });

	  it("tracks that the spy was called", function() {
	    expect(foo.getBar).toHaveBeenCalled();
	  });

	  it("should not effect other functions", function() {
	    expect(bar).toEqual(123);
	  });

	  it("when called returns the requested value", function() {
	    expect(fetchedBar).toEqual(123);
	  });
	});

	describe("A spy, when configured to fake a return value", function() {
	  var foo, bar, fetchedBar;

	  beforeEach(function() {
	    foo = {
	      setBar: function(value) {
	        bar = value;
	      },
	      getBar: function() {
	        return bar;
	      }
	    };

	    spyOn(foo, "getBar").and.returnValue(745);

	    foo.setBar(123);
	    fetchedBar = foo.getBar();
	  });

	  it("tracks that the spy was called", function() {
	    expect(foo.getBar).toHaveBeenCalled();
	  });

	  it("should not effect other functions", function() {
	    expect(bar).toEqual(123);
	  });

	  it("when called returns the requested value", function() {
	    expect(fetchedBar).toEqual(745);
	  });
	});

	describe("A spy, when configured with an alternate implementation", function() {
	  var foo, bar, fetchedBar;

	  beforeEach(function() {
	    foo = {
	      setBar: function(value) {
	        bar = value;
	      },
	      getBar: function() {
	        return bar;
	      }
	    };

	    spyOn(foo, "getBar").and.callFake(function() {
	      return 1001;
	    });

	    foo.setBar(123);
	    fetchedBar = foo.getBar();
	  });

	  it("tracks that the spy was called", function() {
	    expect(foo.getBar).toHaveBeenCalled();
	  });

	  it("should not effect other functions", function() {
	    expect(bar).toEqual(123);
	  });

	  it("when called returns the requested value", function() {
	    expect(fetchedBar).toEqual(1001);
	  });
	});

	describe("A spy, when configured to throw an error", function() {
	  var foo, bar;

	  beforeEach(function() {
	    foo = {
	      setBar: function(value) {
	        bar = value;
	      }
	    };

	    spyOn(foo, "setBar").and.throwError("quux");
	  });

	  it("throws the value", function() {
	    expect(function() {
	      foo.setBar(123)
	    }).toThrowError("quux");
	  });
	});

	describe("A spy", function() {
	  var foo, bar = null;

	  beforeEach(function() {
	    foo = {
	      setBar: function(value) {
	        bar = value;
	      }
	    };

	    spyOn(foo, 'setBar').and.callThrough();
	  });

	  it("can call through and then stub in the same spec", function() {
	    foo.setBar(123);
	    expect(bar).toEqual(123);

	    foo.setBar.and.stub();
	    bar = null;

	    foo.setBar(123);
	    expect(bar).toBe(null);
	  });
	});

	describe("A spy, when created manually", function() {
	  var whatAmI;

	  beforeEach(function() {
	    whatAmI = jasmine.createSpy('whatAmI');

	    whatAmI("I", "am", "a", "spy");
	  });

	  it("is named, which helps in error reporting", function() {
	    expect(whatAmI.and.identity()).toEqual('whatAmI');
	  });

	  it("tracks that the spy was called", function() {
	    expect(whatAmI).toHaveBeenCalled();
	  });

	  it("tracks its number of calls", function() {
	    expect(whatAmI.calls.count()).toEqual(1);
	  });

	  it("tracks all the arguments of its calls", function() {
	    expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
	  });

	  it("allows access to the most recent call", function() {
	    expect(whatAmI.calls.mostRecent().args[0]).toEqual("I");
	  });
	});


	describe("Multiple spies, when created manually", function() {
	  var tape;

	  beforeEach(function() {
	    tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

	    tape.play();
	    tape.pause();
	    tape.rewind(0);
	  });

	  it("creates spies for each requested function", function() {
	    expect(tape.play).toBeDefined();
	    expect(tape.pause).toBeDefined();
	    expect(tape.stop).toBeDefined();
	    expect(tape.rewind).toBeDefined();
	  });

	  it("tracks that the spies were called", function() {
	    expect(tape.play).toHaveBeenCalled();
	    expect(tape.pause).toHaveBeenCalled();
	    expect(tape.rewind).toHaveBeenCalled();
	    expect(tape.stop).not.toHaveBeenCalled();
	  });

	  it("tracks all the arguments of its calls", function() {
	    expect(tape.rewind).toHaveBeenCalledWith(0);
	  });
	});

	describe("jasmine.any", function() {
	  it("matches any value", function() {
	    expect({}).toEqual(jasmine.any(Object));
	    expect(12).toEqual(jasmine.any(Number));
	  });

	  describe("when used with a spy", function() {
	    it("is useful for comparing arguments", function() {
	      var foo = jasmine.createSpy('foo');
	      foo(12, function() {
	        return true;
	      });

	      expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
	    });
	  });
	});

	describe("jasmine.objectContaining", function() {
	  var foo;

	  beforeEach(function() {
	    foo = {
	      a: 1,
	      b: 2,
	      bar: "baz"
	    };
	  });

	  it("matches objects with the expect key/value pairs", function() {
	    expect(foo).toEqual(jasmine.objectContaining({
	      bar: "baz"
	    }));
	    expect(foo).not.toEqual(jasmine.objectContaining({
	      c: 37
	    }));
	  });

	  describe("when used with a spy", function() {
	    it("is useful for comparing arguments", function() {
	      var callback = jasmine.createSpy('callback');

	      callback({
	        bar: "baz"
	      });

	      expect(callback).toHaveBeenCalledWith(jasmine.objectContaining({
	        bar: "baz"
	      }));
	      expect(callback).not.toHaveBeenCalledWith(jasmine.objectContaining({
	        c: 37
	      }));
	    });
	  });
	});

	describe('Javascript Timers',function(){

		var timerCallback;

		beforeEach(function(){
			timerCallback = jasmine.createSpy('timerCallback');
			jasmine.clock().install();
		});

		afterEach(function(){
			jasmine.clock().uninstall();
		});

		it('causes timeout asynchronously',function(){
			
			setTimeout(function(){
				timerCallback();
			},100);

			expect(timerCallback).not.toHaveBeenCalled();

			jasmine.clock().tick(101);

			expect(timerCallback).toHaveBeenCalled();

		});

		it("causes an interval to be called synchronously", function() {
		    setInterval(function() {
		      timerCallback();
		    }, 100);

		    expect(timerCallback).not.toHaveBeenCalled();

		    jasmine.clock().tick(101);
		    expect(timerCallback.calls.count()).toEqual(1);

		    jasmine.clock().tick(50);
		    expect(timerCallback.calls.count()).toEqual(1);

		    jasmine.clock().tick(50);
		    expect(timerCallback.calls.count()).toEqual(2);
		  });

	});

	describe('Asynchronous Tests',function(){

		var value;

		beforeEach(function(done){
			setTimeout(function(){
				value = 0;
				done();
			},1);
		});

		it('Asynchronous Test',function(done){
			value++;
			expect(value).toBeGreaterThan(0);
			done();
		});

		describe("long asynchronous specs", function() {
		    var originalTimeout;
		    beforeEach(function() {
		      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
		    });

		    it("takes a long time", function(done) {
		      setTimeout(function() {
		        done();
		      }, 9000);
		    });

		    afterEach(function() {
		      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		    });
		});

	});

	describe('Real world Ajax Example',function(){

		beforeEach(function(){
			spyOn($,'get');
			test();
		});

		it('Ajax Test',function(){
			expect($.get).toHaveBeenCalled();
			expect($.get.calls.argsFor(0)).toContain("src/test/result.json");
		});

	});

});