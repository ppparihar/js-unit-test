var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
describe('Array', function() {
  describe('#indexOf()', function() {
      var collection = [];
      before(function(){
        collection = [1,2,3];
      })
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, collection.indexOf(4));    
    });    
  });
  describe('#indexOf() with chai',function(){
     var collection = [];
      before(function(){
        collection = [1,2,3];
      })
    it('should retun -1 when the value is not present test with chai',function(){
        const actual = collection.indexOf(4);
        const expected = -1;
         expect(actual).to.equal(expected);
    })
  })
});