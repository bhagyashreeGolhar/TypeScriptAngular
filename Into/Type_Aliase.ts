
//we are defining user with type keyword (user become userdefined datatype)
type user=
{
    name:string;
    isActive:boolean;
}

//defining function which accepts one parameter of type user and return variable of type user
function createUser(u:user):user
{
    return{name:"Bhagyashree",isActive:true}
}
//userTobecreated is variable of type user and defining value for this variable
let userTobeCreated:user={name:"Bhagyashree",isActive:true}

//calling createuser function and storing result in variable u os type user
let u:user=createUser(userTobeCreated)

//printing value returned by user
console.log(u.name,"-",u.isActive)


//we can declare function also inside type
type student=
{
    readonly studentId:number,
    studentName:string,
    getMarks():number
} 

//extending user type 
type admin=user&{
    role:string
}
let sakshi:admin={name:"sakshi",isActive:true,role:"Admin"}


export{}