const user = { name: "Temur" };
const user1 = { name: "Muhammadamin" };
const user2 = { name: "Doniyor" };
const user2Logger = () => console.log("Doniyor user Logger");
const user1Logger = () => console.log("Muhammadamin user Logger");
const userLogger = () => console.log("Logger user");

module.exports = { user, userLogger, user1, user1Logger, user2, user2Logger };
