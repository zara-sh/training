function chunkArrayInGroups(arr, size) {
  // Break it up.
  var array = [];
  var len = arr.length/size;
   console.log("len: ",len);
  var lastArr = arr.length%size;
  
  console.log("lastArr: ",lastArr);
  console.log("arr.length-lastArr: ",arr.length-lastArr);
  
  var k = 0;
  
  while(k+len <=arr.length-lastArr) {
    
    var arrInside = [];
    
    for(var i = k; i < k+len; i++ ){
      arrInside.push(arr[i]);
    }
    
    array.push(arrInside);
    k = k+len;
    
    console.log("k: ",k);
    console.log("arrInside: ",arrInside);
  }
  
  if(k!=arr.length){
  var lastInsideArr =[];
  for (var j = k; j < arr.length; j++){
    lastInsideArr.push(arr[j]);
  }
    console.log(lastInsideArr);
    array.push( lastInsideArr);
  }
  console.log(array);
  
  