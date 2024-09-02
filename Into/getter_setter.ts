class student
{
    name:string
    email:string
    private noOfCourse:number
    constructor(name:string,email:string,noOfCourses:number)
    {
        this.name="Sakshi",
        this.email="s@s.com",
        this.noOfCourse=1
    }
    public set setnoOfCourses(courses:number)
    {
        this.noOfCourse=courses
    }
    public  get getnoOfCourses():number
    {
        return this.noOfCourse;
    }
}

let s1:student=new student("Sakshi","s@s.com",1)
//s1.noOfCourse=5;   //will give error as it's private property
console.log("Courses before setter method calling",s1.getnoOfCourses)
s1.setnoOfCourses=5;
s1.getnoOfCourses;
console.log("Courses after setter method calling",s1.getnoOfCourses)

export{}