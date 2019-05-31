
var amountOfPeople = 0
var amountOfFloors = 1

var setAmountOfPeople = function(amount){
    return amountOfPeople = amount
}

var setAmountOfFloors = function (amount) {
    return amountOfFloors = amount
}

var howManyPeoplePerFloor = function(){
    var peoplePerFloor = amountOfPeople / amountOfFloors
    if(Number.isInteger(peoplePerFloor)){
        return peoplePerFloor
    }
    else{
        return 'Between ' + Math.floor(peoplePerFloor) +' - '+ Math.ceil(peoplePerFloor)
    }
    
    
    
}

// setAmountOfPeople(10)
// setAmountOfFloors('five')
// console.log(howManyPeoplePerFloor())

module.exports = {
    setAmountOfPeople: setAmountOfPeople,
    setAmountOfFloors: setAmountOfFloors,
    howManyPeoplePerFloor: howManyPeoplePerFloor
}