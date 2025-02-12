// const assert = require('assert');

/*describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });

    it('should return the correct index when the value is present', function() {
      assert.strictEqual([1, 2, 3].indexOf(2), 1);
    });
  });
});*/


/*describe('Database Tests', function() {     //before and after hooks
  let db;

  before(function() {
    console.log('Setting up the database...');
    db = { connected: true }; 
  });

  after(function() {
    console.log('Closing the database...');
    db = null; 
  });

  it('should connect to the database', function() {
    assert.strictEqual(db.connected, true);
  });

  it('should close the database after tests', function() {
    assert.strictEqual(db === null, false); 
  });
});*/


/*describe('Asynchronous Test', function() {        //Async test with mocha
  it('should work asynchronously with done', function(done) {
    setTimeout(function() {
      assert.strictEqual(1 + 1, 2);
      done(); 
    }, 1000);
  });
});*/

/*describe('Asynchronous Test with Promise', function() {
  it('should work with a promise', function() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        assert.strictEqual(1 + 1, 2);
        resolve();
      }, 1000);
    });
  });
});*/

/*describe('Array', function() {        
  it.only('should return -1 when the value is not present', function() {    //only test
    assert.strictEqual([1, 2, 3].indexOf(4), -1);
  });

  it('should not be called', function() {    //skipping test
    assert.strictEqual([1, 2, 3].indexOf(2), 1);
  });
});*/

/*describe("A simple test", function() {
  it("should be true", function() {
    var result = true;
    expect(result).toBe(true);
  });
});*/

/*describe("add function", function() {
  it("should add two numbers correctly", function() {
    var result = add(2, 3);
    expect(result).toBe(5);
  });
  
  it("should return a negative number when adding a positive and a negative number", function() {
    var result = add(-2, 3);
    expect(result).toBe(1);
  });
});*/

describe("Setup and Teardown Example", function() {
  var counter;

  beforeEach(function() {
    counter = 0; 
  });

  afterEach(function() {
    counter = null; 
  });

  it("should increment counter", function() {
    counter++;
    expect(counter).toBe(1);
  });

  it("should reset counter", function() {
    expect(counter).toBe(0);
  });
});
