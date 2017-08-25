function findLongestWord(str) {
  var result = str.split(" ");
  console.log("first array: ",result);
  var array = [];
  for(var i = 0; i<result.length; i++){
    array.push(result[i].length);
  }
  console.log("befor sort: ",array);
    array = array.sort(function(a,b){
	  return a < b ? -1 : 1;
  });
  console.log("after sort: ",array);
  return array[array.length-1];
}