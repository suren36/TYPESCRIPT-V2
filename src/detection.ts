function provideId(id : string | null ){
    if(!id){
        console.log("Please provide an id")
        return
    }
    id.toLowerCase()
}
function detectType(val:number | string ){

    if(typeof val ===  "string"){
        return val.toUpperCase()
    }
    return val + 3



}


interface User {

    name:string,
    email:string,
    isAdmin:boolean,

}

interface Admin{
    name:String,
    email:string,
    isAdmin : boolean,
}

function isAdmin( account:User | Admin){



    if("isAdmin" in account){
        return account.isAdmin
    }
    return false

}
type Fish = {swim:() => void};
type Bird = {fly:() => void};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet :Fish | Bird ) {
    if(isFish(pet)){
        pet
        return "Fish"
    }
    else{
        pet
        return "Bird"
    }
}
// ------------------

interface circle   {

    kind :"circle",
    radius : number
}

interface square {
    
        kind : "square",
        sideLength : number
}

interface rectangle {

    kind : "rectangle",
    width : number,
    height : number
}


type  Shape =  circle | square | rectangle

 
 function getArea(
    shape : Shape
 ){

if(shape.kind === "circle"){
return Math.PI * shape.radius
}
if(shape.kind ==="square"){
    return shape.sideLength * shape.sideLength
}
if(shape.kind === "rectangle"){
    return shape.height * shape.width

 }}
 function switharea(shape:Shape){
switch(shape.kind){
    case "circle":
        return Math.PI * shape.radius
    case "square":
        return shape.sideLength * shape.sideLength
    case "rectangle":
        return shape.height * shape.width

        default:
            const _exhaustiveCheck:never = shape
            return _exhaustiveCheck
}

 }