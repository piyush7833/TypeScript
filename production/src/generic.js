"use strict";
// In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.
Object.defineProperty(exports, "__esModule", { value: true });
var sports = [];
function identity1(val) {
    return val;
}
function identity2(val) {
    return val;
}
//generics
function identity3(val) {
    return val;
}
function identity4(val) {
    return val; //val.length will give error as it is not always the case that it is an array
}
identity4({ company: "coc", type: 4 });
identity3(3);
//generics in array and arrow functions
function loggingIdentity1(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg; //need to return product itself 
}
//getting an index using generics
function getSearchProducts(products) {
    // do some database operations
    var myIndex = 3;
    return products[myIndex];
}
//above function using arro functions
var getMoreSearchProducts = function (products) {
    //do some database operations
    var myIndex = 4;
    return products[myIndex];
};
