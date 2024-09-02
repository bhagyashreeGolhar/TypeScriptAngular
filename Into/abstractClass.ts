abstract class student
{
    studentName:string
    studentid:string
    abstract mathmarks():number
    sciencemarks():number
    {
        return 90
    }
}
class sakshi extends student
{
    mathmarks(): number {
        return 98
    }
}
