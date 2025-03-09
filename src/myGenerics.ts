//Generics Type

const score:Array<number>= []


function identityOne(val : number | string): number |string {
    return val
}

function identifyTwo( val :  any): any{
    return val

} 
function identityThree<Type>(val:Type): Type{

return val
}
function identityFour<T>(val:T): T{

return val
}


interface Bottle {
    brand:string,
    type:number
}

identityFour<Bottle>({
    brand:"Coca Cola",
    type:2
}) 


function getSearchProducts<T>(products:T[]): T{

    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,> ( products : T[])  : T => {
    const myIndex =3
    return products[myIndex]
}

 interface Database {
    id:number,
    name:string
 }



function identityFive<T, U extends Database>(val: T, valt: U):object
 {
    return {
        val, valt
    };
}
identityFive(3, { id: 3, name: "hello" })
// -----------------------------------

interface Quiz {
    name:string,
    id:number
    type:string
}
interface Course{
name:string,
id:number,
type:string

}