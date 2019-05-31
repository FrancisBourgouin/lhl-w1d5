/*
* Helper module for real estate frequently asked questions (Maybe ?)
*/
var amountOfPeople = 0
var amountOfFloors = 0
var totalSurface = 0

function assignPeopleAmount(amount){

    //this.amountOfPeople = amount //is that enough ?

    if(inputChecksOut(amount)){
        this.amountOfPeople = amount
        return "Stored "+this.amountOfPeople+" as current value of amountOfPeople"
    }
    else{
        return "Error with specified amount"
    }
}

function assignFloorAmount(amount){

    //this.amountOfFloors = amount //is that enough ?
    
    if(inputChecksOut(amount)){
        this.amountOfFloors = amount
        return "Stored "+this.amountOfFloors+" as current value of amountOfFloors"
    }
    else{
        return "Error with specified amount"
    }
}

function assignSurfacePerFloor(surface, unit){
    this.totalSurface = this.amountOfFloors * surface * unitConversion(unit)
    return "Stored "+this.totalSurface+" square meters as current value of totalSurface"
}

function minimumPopulationPerFloor(){
    var ratioPerFloor = this.amountOfPeople / this.amountOfFloors
    var roundedRatio = Math.floor(ratioPerFloor) //Math.floor() returns the biggest integer lower or equal to the ratio
    
    return roundedRatio
}

function maximumPopulationPerFloor(){
    var ratioPerFloor = this.amountOfPeople / this.amountOfFloors
    var roundedRatio = Math.ceil(ratioPerFloor) //Math.ceil() returns the smallest integer bigger or equal to the ratio

    return roundedRatio
}

function surfacePerPerson(unit){
    return this.totalSurface / this.amountOfPeople / unitConversion(unit)
}

/**
 * Internal functions to verify if everything is ok, not exported
 */

 function inputChecksOut(input){
    //  if(Number.isInteger(input)){
    //      return true
    //  }
    //  else{
    //      return false
    //  }

    //Or ?
    
    return (Number.isInteger(input) && input > 0)
 }

 function unitConversion(unit){
     //I want to store my surface in square meters, but accept square foot too

     if(unit === "sqm"){
         return 1
     }
     else if(unit === "sqft"){
         return 0.09290304
     }
 }



/**
 * Defining what to export
 */

 module.exports = {
     amountOfPeople : amountOfPeople,
     amountOfFloors : amountOfFloors,
     totalSurface : totalSurface,
     assignPeopleAmount : assignPeopleAmount,
     assignFloorAmount : assignFloorAmount,
     assignSurfacePerFloor : assignSurfacePerFloor,
     minimumPopulationPerFloor : minimumPopulationPerFloor,
     maximumPopulationPerFloor : maximumPopulationPerFloor,
     surfacePerPerson : surfacePerPerson
 }