var chai = require('chai');
var real_estate = require('./real_estate')
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

/**
 * Using the assert method
 */
 
  describe('Testing different erroneous values for inputChecksOut', function() {
    it('Should return an error and not assign the value (negative)', function() {
      assert.equal("Error with specified amount", real_estate.assignPeopleAmount(-5));
    });

    it('Should return an error and not assign the value (zero)', function() {
        assert.equal("Error with specified amount", real_estate.assignPeopleAmount(0));
    });

    it('Should return an error and not assign the value (float)', function() {
        assert.equal("Error with specified amount", real_estate.assignFloorAmount(5.5));
    });

    it('Should not assign the value (string)', function() {
        real_estate.assignPeopleAmount("five")
        assert.notEqual(5, real_estate.amountOfPeople);
    });

    it('Should not assign the value (string)', function() {
        real_estate.assignPeopleAmount("5")
        assert.notEqual(5, real_estate.amountOfPeople);
    });

  });