class User {

    email : string;
    name : string;
    city : string ="";

    constructor (email :string, name :string){

        this.email = email;
        this.name = name;
    }

}

const suren = new User("asd@gmail.com" , "asd")