var carMakers = ["ford", "toyota", "chevy"];
var dates = [new Date(), new Date()];
var carsByMake = [["f150"], ["corola"], ["camaro"]];
// Help with inference when extracting values
var car = carMakers[0];
var myCar = carMakers.pop();
// Prevent incompatible values
carMakers.push(100);
console.log(carMakers);
// Help with 'map'
carMakers.map(function (car) {
    return car;
});
// Flexible types
var importantDates = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
