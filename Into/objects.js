"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//this a simple way to create object
var user = {
    name: "Bhagyashree",
    email: "bhagyashree@b.com",
    isActive: true
};
//passing object as parametr to function where object contains 2-properties name,isPaid
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return "User Created";
}
var isUserCreated = createUser({ name: "Bhagyashree", isPaid: false });
console.log(isUserCreated);
//making return type of method as object
//here we are making return type of fun as object with no properties
function fun1() {
    return {};
}
//return object from createCourse function with properties name,price
function createCourse() {
    return { name: "react.js", price: 399 };
}
var course = createCourse();
console.log("Name of course is:", course.name, "Price of course is:", course.price);
