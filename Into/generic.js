//we declare create like this
var arr = [1, 2, 3, 4];
var arr1 = [3, 4, 5, 6];
//Array using generic
// let arr3:Type[]=[]
// arr3.push[2]
// arr3.push["S"]
//creating function which can return number or boolean
function one(val) {
    return val; //val can be num or bool so we need to check thay before returning
}
//creating function with Any
function two(val) {
    return val; //here we don't  know whta the return type 
}
//creating generic function
function three(val) {
    return val;
}
//calling generic function with differen datatypes 
var ans = three("Sakshi"); //as passing string type will become string in function call
var ans1 = three(5); //as passing number type will become number in function call
// Function which accepts generic array as input
function getproducts(products) {
    var index = 1;
    return products[index];
}
//Arrow function with generic
var getSearchProducts = function (product) { return product[0]; };
//function with 2-agruments of same type
function getargs(arg1, arg2) {
    return [arg1, arg2];
}
//function with 2 arguments of different type
function twoargsfunction(arg1, arg2) {
    return [arg1, arg2];
}
//function with 2 arguments and 2nd argumen muct be number
function numberargdFunction(arg1, arg2) {
    return [arg1, arg2];
}
//creating generic class
var abc = /** @class */ (function () {
    function abc() {
    }
    abc.prototype.xyz = function (val) {
        return val;
    };
    abc.prototype.pqr = function (val) {
        return val;
    };
    return abc;
}());
var obj = new abc;
var ansOfxyz = obj.xyz("Sakshi");
var ansOfXyz = obj.xyz(11);
var ansOfPqr = obj.pqr(15);
