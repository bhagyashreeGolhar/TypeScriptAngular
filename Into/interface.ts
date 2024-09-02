interface user
{
    readonly userId:number,
    userName : string,
    googleId?: number,
    startTrial():string
}

const bhagyashree:user=
{   userId:11,
    userName:"bhagyashree",
    googleId:123,
    startTrial() {
        return "trialStarted"
    },
    age:23
}
console.log("data of bhagyashree user",bhagyashree)

//repoening user1 interface
interface user
{
    age:number
}
//creating variable sakshi of type user which can have age property  also 
const sakshi:user=
{   userId:12,
    userName:"sakshi",
    googleId:345,
    startTrial() {
        return "trialStarted"
    },
    age:23
}
console.log("user interface data after reopening interface",sakshi)

//extending interfaces
interface admin extends user
{
    role:string
}
//creating variable of interface admin
let sagar:admin={
    userId:3,
    userName:"sagar",
    googleId:35,
    startTrial() {
        return "trialStarted"
    },
    age:23,
    role:"Admin",
}
console.log("Admin interface data",sagar)
export{}