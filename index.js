// console.log("Hello World");

// const logger = () => console.log("Hello logger");

// logger();

// console.log("Hello World", __filename);

// console.log("Hello World");

const userData = require("./user");
const carData = require("./car");
const schoolData = require("./school");

console.log(userData.user);
userData.userLogger();

console.log(carData);
carData.carLogger();

console.log(userData.user1);
userData.user1Logger();

console.log(carData.car1);
carData.car1Logger();

