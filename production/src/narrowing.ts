//in js type of array and null is object //type of empty string is also an string
function detectType(val:number|string){
    if(typeof val=="number"){
        return val.toPrecision(2);
    }
    else{
        return val.toLowerCase();
    }
}
function provoideId(id:string|null){
    if(id===null){
       console.log("please provide id")  //always check for cautions
       return;
    }else{
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

  interface User{
    name:string,
    email:string
  }
  interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
  }

  function isAdminAccount(account:User|Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
    else{
        return false
    }
  }

export{}