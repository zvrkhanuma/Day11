// Only change code below this line
function myMutation (arr) {
	var firstWord = arr[0].toLowerCase();
	var secondWord = arr[1].toLowerCase();
	
  for(i=0;i<secondWord.length;i++) {
  
    if(firstWord.indexOf(secondWord[i]) == -1) {
    	return false;
    }
  }
  return true;
};
// Only change code above this line
console.log(myMutation(['hello', 'hey']));
console.log(myMutation(['hello', 'Hello']));
console.log(myMutation(['zyxwvutsroqponmlkjihgfedcba', 'qrstu']));
console.log(myMutation(['Mary', 'Army']));
console.log(myMutation(['Mary', 'Aarmy']));
console.log(myMutation(['Alien', 'line']));
console.log(myMutation(['floor', 'for']));
console.log(myMutation(['hello', 'neo']));
console.log(myMutation(['voodoo', 'no']));
console.log(myMutation(['ate', 'date']));
console.log(myMutation(['Tiger', 'Zebra']));
console.log(myMutation(['Neol', 'Ole']));
module.exports = myMutation;