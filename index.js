/*version 1: solved by using filter()*/
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().split("").filter((val) => val.match(/[a-z0-9]/g));
  return str.join("") == str.reverse().join("");
}

palindrome("eye");
/* version 2: solved by using replace()*/
function palindrome(str) {
  // Nice solution 2!
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "").split("");
  return str.join("") == str.reverse().join("");
}

palindrome("race car");
