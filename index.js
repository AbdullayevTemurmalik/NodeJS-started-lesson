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

console.log(userData.user1);
userData.user1Logger();

console.log(userData.user2);
userData.user1Logger();

console.log(carData.car);
carData.carLogger();

console.log(carData.car1);
carData.car1Logger();

console.log(carData.car2);
carData.car2Logger();

console.log(carData.car3);
carData.car3Logger();

console.log(schoolData.school);
schoolData.schoolLogger();

console.log(schoolData.school1);
schoolData.schoolLogger();

console.log(schoolData.school2);
schoolData.schoolLogger();
