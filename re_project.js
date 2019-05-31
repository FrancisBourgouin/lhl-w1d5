var realEstateFunctions = require('./real_estate')
const chalk = require('chalk');
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(realEstateFunctions.amountOfPeople)

console.log(realEstateFunctions.setAmountOfPeople(5))
console.log(realEstateFunctions.setAmountOfFloors(4))
console.log(realEstateFunctions.howManyPeoplePerFloor())

