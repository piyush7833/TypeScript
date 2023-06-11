"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//it is kind of specialized array
var user = [1, "ps"]; //this is an array //here we can insert data in any format i.e. num string or string num
var tuser; //this is an tuple in this we have to insert data in specific order like here it is in string then num then bool
tuser = ["ps", 21, true];
var rgb = [1, 2, 3]; //we can not insert any other data in tuple as it contains only 3 numbers
var newUser = ["ps", 21];
// newUser[1]=1;
// newUser.push(true); //its causing an error as our tuple is not of type boolean
newUser.push(2); //it is pushing the value which it should not as it allow only a string and number
