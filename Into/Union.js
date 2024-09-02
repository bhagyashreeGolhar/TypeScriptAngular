"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//this variable can accept string as well as number datatype value
var name = "Bhagyashree";
name = 11;
//this function can return which can be user or admin 
function getUserById(id) {
    if (id == 11) {
        console.log("This is User");
        return { name: "Bhagyashree", id: 11 };
    }
    else {
        console.log("this is admin");
        return { username: "Sakshi", id: 12 };
    }
}
var returnedUser = getUserById(11);
console.log(returnedUser);
returnedUser = getUserById(12);
console.log(returnedUser);
// function which accepts parameter which can be number or string
function fun(param) {
    //param.toLowerCase()    //this line will throw error as we don't know param will be string/number
    if (typeof (param) === "string") {
        var result = param.toLowerCase();
        console.log("lowercase is:", result);
    }
    else {
        var result = param * 2;
        console.log("Multiplication result is:", result);
    }
}
fun(5); //passing param of type number
fun("BHAGYASHREE"); //passing param of type string
