//Identifying type of argument using typeOf 
function fun1(arg1) {
    if (typeof (arg1) === "string") {
        return arg1.toLowerCase();
    }
    return arg1 + 5;
}
var fun1Ans = fun1("bhagyashree");
console.log("fun1 after passing string: ", fun1Ans);
var fun1Ans1 = fun1(10);
console.log("fun1 after passing number: ", fun1Ans1);
//Identotfying type of argument using instanceOf
function fun2(arg1) {
    if (arg1 instanceof Date) {
        return arg1.toUTCString();
    }
    return arg1.toLowerCase();
}
var fun2Ans = fun2("sakshi");
console.log("fun1 after passing string: ", fun2Ans);
var fun2Ans1 = fun2(new Date);
console.log("fun1 after passing number: ", fun2Ans1);
var variable1 = (Array);
var variable2;
console.log("Type of var1 is: ", typeof (variable1));
//console.log("Type of var2 is: ",typeof(variable2))
