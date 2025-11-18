// console.log("Hello World");

// const logger = () => console.log("Hello logger");

// logger();

// console.log("Hello World", __filename);

// console.log("Hello World");

const userData = require("./user");
const carData = require("./car");

console.log(userData.user);
userData.userLogger();

console.log(carData);
carData.carLogger();
