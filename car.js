const car = { name: "BMW", color: "black" };
const car1 = { name: "GENTRA", color: "black" };
const car2 = { name: "Ferrari", color: "red" };
const car3 = { name: "ONIX", color: "white" };
const car3Logger = () => console.log("ONIX Muhammadamin car");
const car2Logger = () => console.log("Ferari car Logger");
const car1Logger = () => console.log("Muhammadamin moshina Logger");
const carLogger = () => console.log("Logger car");

module.exports = {
  car,
  carLogger,
  car1,
  car1Logger,
  car2,
  car2Logger,
  car3,
  car3Logger,
};
