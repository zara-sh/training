
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var array = [];
   var len = arr.length/size;

   var lastArr = arr.length%size;
  
  
  var k = 0;
  
  while(k+size <=arr.length-lastArr) {
    
    var arrInside = [];
    
    for(var i = k; i < k+size; i++ ){
      arrInside.push(arr[i]);
    }
    
    array.push(arrInside); 
    k = k+size;
    
    console.log("k: ",k);
    console.log("arrInside: ",arrInside);
  }
  
  if(k!=arr.length){
  var lastInsideArr =[];
  for (var j = k; j < arr.length; j++){
    lastInsideArr.push(arr[j]);
  }
   
    array.push( lastInsideArr);
  }
  console.log(array);
  
  return array;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
