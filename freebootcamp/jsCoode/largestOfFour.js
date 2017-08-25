
function largestOfFour(arr) {
  // You can do this!
  var array = [];
  
  function maxArray(ar){
      return Math.max.apply(null,ar) ;
   }
  
   for(var i = 0; i<arr.length; i++){
      var maxArr = maxArray(arr[i]);
       array.push(maxArr);
    }
  
  return array;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
