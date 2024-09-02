

//we declare create like this
let arr:Array<number>=[1,2,3,4]
let arr1:number[]=[3,4,5,6]

//Array using generic
// let arr3:Type[]=[]
// arr3.push[2]
// arr3.push["S"]

//creating function which can return number or boolean
function one(val: boolean|number): boolean|number
{
    return val;    //val can be num or bool so we need to check thay before returning
}

//creating function with Any
function two(val: any):any
{
    return val         //here we don't  know whta the return type 
}

//creating generic function
function three<Type>(val: Type):Type
{
    return val;
}
//calling generic function with differen datatypes 
let ans=three("Sakshi")   //as passing string type will become string in function call
let ans1=three(5)         //as passing number type will become number in function call

// Function which accepts generic array as input
function getproducts<T>(products:T[]):T
{
    let index=1
    return products[index]
}
//Arrow function with generic
const getSearchProducts=<T>(product :T[]):T=>{return product[0]}

//function with 2-agruments of same type
function getargs<T>(arg1:T,arg2:T):[T,T]
{
    return[arg1,arg2]
}

//function with 2 arguments of different type
function twoargsfunction<T,U>(arg1:T,arg2:U):[T,U]
{
    return [arg1,arg2]
}

//function with 2 arguments and 2nd argumen muct be number
function numberargdFunction<T,U extends number>(arg1:T,arg2:U):[T,U]
{
    return [arg1,arg2]
}

//creating generic class
class abc<Type>
{
    var1:Type
    xyz(val:Type):Type
    {
        return val;
    }
    pqr(val:number):number
    {
        return val;
    }
}
const obj=new abc
const ansOfxyz=obj.xyz("Sakshi")
const ansOfXyz=obj.xyz(11)
const ansOfPqr=obj.pqr(15)