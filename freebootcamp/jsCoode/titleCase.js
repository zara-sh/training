
function titleCase(str) {
  var result = str.toLowerCase();
  result = result.split(" ");
  var array = [];
  for(var i = 0; i < result.length; i++){
    array.push(result[i][0].toUpperCase()+result[i].slice(1));
  }
  result = array.join(" ");
  return result;
}

titleCase("I'm a little tea pot");
