"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bhagyashree = { userId: 11,
    userName: "bhagyashree",
    googleId: 123, startTrial: function () {
        return "trialStarted";
    }, age: 23 };
console.log("data of bhagyashree user", bhagyashree);
//creating variable sakshi of type user which can have age property  also 
var sakshi = { userId: 12,
    userName: "sakshi",
    googleId: 345, startTrial: function () {
        return "trialStarted";
    }, age: 23 };
console.log("user interface data after reopening interface", sakshi);
//creating variable of interface admin
var sagar = {
    userId: 3,
    userName: "sagar",
    googleId: 35,
    startTrial: function () {
        return "trialStarted";
    },
    age: 23,
    role: "Admin",
};
console.log("Admin interface data", sagar);
