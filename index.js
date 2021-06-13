const drivers = ['Sally', 'Bob', 'Freddy','Claudia'];
//Return First Two Drivers
function returnFirstTwoDrivers(){
 return drivers.slice(0,2)
}

//Return Last Two Drivers
function returnLastTwoDrivers(){
    return drivers.slice(2,4)
}

//Selecting Drivers
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

//Create Fare Multiplier
function createFareMultiplier(cost){
    return function (fareMultiplier){
        return cost * fareMultiplier
    }
}

//Fare Doubler
const fareDoubler = createFareMultiplier(2)

//Fare Triplers
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, callback){
    return callback();
    console.log(callback)
}