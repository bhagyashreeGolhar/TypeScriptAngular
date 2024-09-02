//function accepting one parameter of type number
function addTwo(num: number)
{
    return num+2
}
let sum= addTwo(5);
console.log("result of addTwo function is:",sum)

//this is arrow function
let fun1=(num : number)=>{return num*2}
let mul= fun1(5)
console.log("result of fun1 function is:",mul)

//function with multiple parameters
function CreateUser( userName:string,password:string)
{
    return true;
}
let Iscreated=CreateUser("Bhagyashree","Bhagya@123")
console.log("result of createUser function is: ",Iscreated)


//function with return type number
function addition(num1:number,num2:number):number
{
    return num1+num2
}
let add=addition(5,5)
console.log("Result of function addition is:",add)