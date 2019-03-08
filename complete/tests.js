var chai = require('chai');
var real_estate = require('./real_estate')
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

/**
 * Using the assert method
 */
 
describe('Testing if the internal functions inputChecksOut & unitConversion are working', function() {
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

/**
 * Using the expect method
 */

  describe('Testing different values for unitConversion', function() {
    it('Sanity checking (should return 0 if I have 0 person in a 0 sqm building... right ?) ', function() {
        real_estate.amountOfFloors = 0
        real_estate.amountOfPeople = 0
        real_estate.totalSurface = 0
        var spp = real_estate.surfacePerPerson('sqm')
        expect(spp).to.equal(0);
    });

    it('If I have 1 person in a 1 floor building of 1 square meter...', function() {
        real_estate.assignFloorAmount(1)
        real_estate.assignPeopleAmount(1)
        real_estate.assignSurfacePerFloor(1, 'sqm')
        var spp = real_estate.surfacePerPerson('sqm')
        expect(spp).to.equal(1);
    });

    it('Looking if conversion between sqm and sqft', function() {
        real_estate.assignFloorAmount(1)
        real_estate.assignPeopleAmount(1)
        real_estate.assignSurfacePerFloor(1, 'sqm')
        var spp = Math.floor(real_estate.surfacePerPerson('sqft') * 10000) / 10000
        expect(spp).to.equal(10.7639);
    });
  });

  describe('Testing minimumPopulationPerFloor', function() {
    it('Sanity check (should return 0 if I have 0 person in a 0 floor building... right ?)', function() {
        real_estate.amountOfFloors = 0
        real_estate.amountOfPeople = 0
        real_estate.totalSurface = 0
        var mppf = real_estate.minimumPopulationPerFloor()
        expect(mppf).to.equal(0);
    });

    it('If I have 12 people and 5 floors I should have at least 2 persons per floor', function() {
        real_estate.assignFloorAmount(5)
        real_estate.assignPeopleAmount(12)
        var mppf = real_estate.minimumPopulationPerFloor()
        expect(mppf).to.equal(2);
    });
  });

  describe('Testing maximumPopulationPerFloor', function() {
    it('Sanity check (should return 0 if I have 0 person in a 0 floor building... right ?)', function() {
        real_estate.amountOfFloors = 0
        real_estate.amountOfPeople = 0
        real_estate.totalSurface = 0
        var mppf = real_estate.minimumPopulationPerFloor()
        expect(mppf).to.equal(0);
    });

    it('If I have 12 people and 5 floors I should have maximum 3 persons per floor', function() {
        real_estate.assignFloorAmount(5)
        real_estate.assignPeopleAmount(12)
        var mppf = real_estate.maximumPopulationPerFloor()
        expect(mppf).to.equal(3);
    });
  });
});