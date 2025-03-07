"use strict";
// class User {
//     email : string;
//     name : string;
//     private readonly city : string ="Jaipur";
//     constructor (email :string, name :string){
//         this.email = email;
//         this.name = name;
//     }
// }
// const suren = new User("asd@gmail.com" , "asd")
// suren.city
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    deleteToken() {
        console.log('Deleting token');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Invalid course count');
        }
        this._courseCount = courseNum;
        console.log(this._courseCount);
    }
}
class SubAdmin extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 10;
    }
}
const suren = new User("asd@gmail.com", "Suren");
suren.courseCount = 5;
