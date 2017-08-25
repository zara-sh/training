
function palindrome(str) {
  // Good luck!
  var result = str.replace(/[\W_]+/g, '');
  var string1 = result.toLowerCase();
  result = string1.split("");
  result = result.reverse();
  var string2 = result.join("");
  return (string1 === string2) ? true : false ;
}



palindrome("My age is 0, 0 si ega ym.");
