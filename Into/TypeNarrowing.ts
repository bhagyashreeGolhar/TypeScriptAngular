//Identifying type of argument using typeOf 

function fun1(arg1:string|number): string|number
{
    if(typeof(arg1)==="string")
        {
            return arg1.toLowerCase()
        }
    return arg1+5

}
const fun1Ans=fun1("bhagyashree")
console.log("fun1 after passing string: ",fun1Ans)
const fun1Ans1=fun1(10)
console.log("fun1 after passing number: ",fun1Ans1)


//Identotfying type of argument using instanceOf
function fun2(arg1: Date|string): Date|string
{
    if(arg1 instanceof Date)
        {
            return arg1.toUTCString()
        }
    return arg1.toLowerCase()
}
const fun2Ans=fun2("sakshi")
console.log("fun1 after passing string: ",fun2Ans)
const fun2Ans1=fun2(new Date)
console.log("fun1 after passing number: ",fun2Ans1)

let variable1= Array<number>
let variable2:string[]
console.log("Type of var1 is: ",typeof(variable1))
//console.log("Type of var2 is: ",typeof(variable2))