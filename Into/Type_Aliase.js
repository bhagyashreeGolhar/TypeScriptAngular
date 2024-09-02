"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//defining function which accepts one parameter of type user and return variable of type user
function createUser(u) {
    return { name: "Bhagyashree", isActive: true };
}
//userTobecreated is variable of type user and defining value for this variable
var userTobeCreated = { name: "Bhagyashree", isActive: true };
//calling createuser function and storing result in variable u os type user
var u = createUser(userTobeCreated);
//printing value returned by user
console.log(u.name, "-", u.isActive);
