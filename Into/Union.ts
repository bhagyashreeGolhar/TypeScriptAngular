//this variable can accept string as well as number datatype value
let name: string | number = "Bhagyashree"
name=11

type user=
{
    name:string,
    id:number
}
type admin=
{
    username:string,
    id:number
}

//this function can return which can be user or admin 
function getUserById(id:number): user | admin
{
    if(id==11)
    {
        console.log("This is User")
        return {name:"Bhagyashree",id:11}
    }
    else
    {
        console.log("This is admin")
        return {username:"Sakshi",id:12}
    }
}
let returnedUser: user|admin = getUserById(11)
console.log(returnedUser)
returnedUser=getUserById(12)
console.log(returnedUser)


// function which accepts parameter which can be number or string
function fun(param: number|string)
{
    //param.toLowerCase()    //this line will throw error as we don't know param will be string/number
    if(typeof(param) ==="string")
        {
            let result: string= param.toLowerCase()
            console.log("lowercase is:", result)
        }
    else
        {
            let result= param*2
            console.log("Multiplication result is:", result)
        }
}

fun(5)  //passing param of type number
fun("BHAGYASHREE")  //passing param of type string


//imple array of string
let arr1:string[]=["abc"]

//declare array of string and number
let arr:(string| number)[]=["Bhagyshree",11,"sakshi"]


export{}