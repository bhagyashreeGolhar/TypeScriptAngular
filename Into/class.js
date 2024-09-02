//creating class with constructor
var user = /** @class */ (function () {
    function user(name, email) {
        this.name = name,
            this.email;
        email;
    }
    return user;
}());
//creating object of class
var user1 = new user("Bhagyashree", "bhagya@gmail.com");
console.log("Name is : ", user1.name, " & Email of user:", user1.email);
