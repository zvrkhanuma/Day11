// Create a temps array here

var temps = [
    [31, 32, 19, 37], // pon
    [29, 27, 55, 36], // uto
    [17, 27, 42, 46], // sri
    [29, 52, 21, 64], // cet
    [91, 27, 31, 61] // pet


];
// End of temps array 
function myArrayFunction(arr) {
	var newTemps = [...arr];
  var averageDayTemp = [];

  // Only change code below this line
  
  for(i=0;i<arr.length;i++) {
  	
    var sum = 0;
    var avg = 0;
    for(j=0;j<arr[i].length;j++) {
    	sum += arr[i][j];
      avg = sum/arr[i].length;
    }
  	averageDayTemp.push(avg);
  }
  // Only change code above this line
  return averageDayTemp;
}


console.log (myArrayFunction(temps));
module.exports = myArrayFunction;