"use strict";




function onTheContrary(name){

    let result ="";

    for(let i= name.length - 1; i>=0; i--){

        result+=name[i];
    }
     return result;
}
console.log(onTheContrary("cavid"));




