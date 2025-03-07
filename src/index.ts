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
    protected _courseCount = 1;
   readonly city :string = "Jaipur";
   constructor(
    public email :string,
    public name : string,
   ){}

   private deleteToken (){

    console.log('Deleting token');
    
   }

get getAppleEmail():string{
    return `apple${this.email}`
}

get courseCount () :number{

    return this._courseCount
}

set courseCount(courseNum:number)  {


if(courseNum <= 1){
    throw new Error('Invalid course count')
}  
this._courseCount = courseNum; 
console.log(this._courseCount);


}


}

class SubAdmin extends User {
    isFamily:boolean = true;
    changeCourseCount (){
        this._courseCount=10;
    }
}


const suren = new User("asd@gmail.com", "Suren");
suren.courseCount = 5;