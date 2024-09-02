type user1=
{
    readonly id:number    //this is readonly variable
    name: string;
    age?: number;   //this is optional variable 
}

let sakshi:user1={id: 11,name:"Bhagyashree",age:23}
let abc:user1={id:15,name:"abc"}   //age is optional so we can skip it
//sakshi.id=12   ///it will throw error as it's readonly we can;t change value


export{}