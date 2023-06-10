// const heroes=[]; //we should not do this in ts as it will create array of type never so nothing can be pushed in array
const heroes:[]=[]; //we should not do this in ts as it will create array of type empty array(never) so nothing  can be pushed 
// heroes.push("hanuman")
// heroes.push([]); 
const superHeroes:string[]=[]; //this is okay as it means we can push arrays of string
const Heroes:Array <number>=[];  //we can also define array like this
superHeroes.push("hanuman");
superHeroes.push("Ram","Sita");
Heroes.push(2,4);

type User={
    name:string,
    isActive:boolean
}
const allUsers:User[]=[];
allUsers.push({name:"ps",isActive:true});

const mlModels:readonly number[][]=[  //we can also have readonly type array
    [1,2,3,4],  //array inside array //2d array
    [5,6,7,8]
]
export{}