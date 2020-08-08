const carMakers = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corola"], ["camaro"]];

// Help with inference when extracting values
let car = carMakers[0];
let myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

console.log(carMakers);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
