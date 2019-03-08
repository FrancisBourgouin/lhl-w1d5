var real_estate_helper = require('./real_estate')


console.log(real_estate_helper.assignPeopleAmount(15))
console.log(real_estate_helper.assignFloorAmount(4))
console.log(real_estate_helper.assignSurfacePerFloor(40,'sqm'))
console.log(real_estate_helper.assignSurfacePerFloor(400,'sqft'))
console.log(real_estate_helper.surfacePerPerson('sqm')+" square meters per person")
console.log(real_estate_helper.surfacePerPerson('sqft')+" square foot per person")

console.log("I have between "
            +real_estate_helper.minimumPopulationPerFloor()
            +" and "
            +real_estate_helper.maximumPopulationPerFloor()
            +" persons per floor in my "
            +real_estate_helper.amountOfFloors
            +" stories building.")