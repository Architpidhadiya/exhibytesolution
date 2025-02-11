const assert = require('assert');

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

describe('Array', function() {
  it('should return -1 when the value is not present', function() {
    assert.strictEqual([1, 2, 3].indexOf(2), -1);
  });

  it.skip('should not be called', function() {
    assert.strictEqual([1, 2, 3].indexOf(2), 1);
  });
});