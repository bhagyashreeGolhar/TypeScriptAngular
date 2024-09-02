function addTwo(num) {
    return num + 2;
}
var sum = addTwo(5);
console.log("result of addTwo function is:", sum);
//this is arrow function
var fun1 = function (num) { return num * 2; };
var mul = fun1(5);
console.log("result of fun1 function is:", mul);
//function with multiple parameters
function CreateUser(userName, password) {
    return true;
}
var Iscreated = CreateUser("Bhagyashree", "Bhagya@123");
console.log("result of createUser function is: ", Iscreated);
//function with return type
function addition(num1, num2) {
    return num1 + num2;
}
var add = addition(5, 5);
console.log("Result of function addition is:", add);
