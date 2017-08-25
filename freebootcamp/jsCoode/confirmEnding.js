
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
 var array = str.split(" ");
  
 console.log(array);
 console.log("str: ",  str[str.length-1]);
 console.log("target: ",  target);
  
 if(array.length===1){
    
    return  str[str.length-1] === target ? true:false;
  }
  
  else{
    
    console.log("last elem arr: ",array[array.length-1]);
    console.log(array[array.length-1].indexOf(target));
    return array[array.length-1].indexOf(target) > -1 ? true:false;
    
    }
  
}

confirmEnding("Bastian", "n");
