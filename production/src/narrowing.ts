//in js type of array and null is object //type of empty string is also an string
function detectType(val: number | string) {
    if (typeof val == "number") {
        return val.toPrecision(2);
    }
    else {
        return val.toLowerCase();
    }
}
function provoideId(id: string | null) {
    if (id === null) {
        console.log("please provide id")  //always check for cautions
        return;
    } else {
        return id.toLowerCase();
    }
}

// We wrapped the entire body of the function in a truthy check, but this has a subtle downside: we may no longer be handling the empty string case correctly.
function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") { //for array we checkit as object
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}


//in operator narrowing

interface User {
    name: string,
    email: string
}
interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
    else {
        return false
    }
}



//instance of narrowing

// you’ll see more of this when we get into classes, they can still be useful for most values that can be constructed with new. As you might have guessed, instanceof is also a type guard, and TypeScript narrows in branches guarded by instanceofs

function logValue(x: Date | string) {
    if (x instanceof Date) {  //if x is instance of date  //i.e. type of class date 
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}


//type predicates narrowing


type Fish = {
    swim: () => void
}
type Bird = {
    Fly: () => void
}


function isFish(pet: Fish | Bird): pet is Fish { //pet is required to ensure it is fish
    return (pet as Fish).swim !== undefined //typecaste pet as fish and check that whether swim is defined for it or not
}
// function isFish(pet:Fish|Bird){
//     return (pet as Fish).swim!==undefined //typecaste pet as fish and check that whether swim is defined for it or not
// }

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet  //ts is still confused that pet is bird or fish as isFish is returning boolean value  //if in isFish return value in function is not return as pet is Fish
        return "Fish food"
    }
    else {
        pet
        return "Bird Food"
    }
}



//discrimination unions
//use a property in all of the interfaces
interface Circles {
    kind: "circle",
    radius: number
}
interface Square {
    kind: "square",
    sideLength: number
}
interface Rectangle {
    kind: "rectangle",
    length: number
    width: number
}

type Shape = Circles | Square | Rectangle;  //if new shape comes in lets say triangle then discrimination will fall apart but exhaustive checking still works  //but in exhaustive checking if their are too much types it is problematic and it is also not checking the new type so for it always use default case in exhaustive checking whoe return type is never
function getShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        return Math.pow(2, shape.sideLength)
    }
    else {
        return (shape.length * shape.width)
    }
}


//exhaustive checking 
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return Math.pow(2, shape.sideLength)

        case "rectangle":
            return (shape.length * shape.width)

        default:  //this will provide error if i wont't check case of newly assigned shape so it acts as reminder
            const _exhaustiveCheckForShape: never = shape;  //type never is never going to assigned a shape //it never runs
            return _exhaustiveCheckForShape;
    }
}

export { }