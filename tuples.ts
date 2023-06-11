//it is kind of specialized array
let user:(string|number)[]=[1,"ps"];  //this is an array //here we can insert data in any format i.e. num string or string num
let tuser:[string,number,boolean];  //this is an tuple in this we have to insert data in specific order like here it is in string then num then bool
tuser=["ps",21,true];
let rgb:[number,number,number]=[1,2,3]; //we can not insert any other data in tuple as it contains only 3 numbers
type User=[string,number]; //tuple type
let newUser:User=["ps",21 ];
// newUser[1]=1;
// newUser.push(true); //its causing an error as our tuple is not of type boolean
newUser.push(2); //it is pushing the value which it should not as it allow only a string and number
export{}