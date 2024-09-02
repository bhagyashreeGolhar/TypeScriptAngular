"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student = /** @class */ (function () {
    function student(name, email, noOfCourses) {
        this.name = "Sakshi",
            this.email = "s@s.com",
            this.noOfCourse = 1;
    }
    Object.defineProperty(student.prototype, "setnoOfCourses", {
        set: function (courses) {
            this.noOfCourse = courses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "getnoOfCourses", {
        get: function () {
            return this.noOfCourse;
        },
        enumerable: false,
        configurable: true
    });
    return student;
}());
var s1 = new student("Sakshi", "s@s.com", 1);
console.log("Courses before setter method calling", s1.getnoOfCourses);
s1.setnoOfCourses = 5;
s1.getnoOfCourses;
console.log("Courses after setter method calling", s1.getnoOfCourses);
