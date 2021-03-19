// Only change code below this line
function largestNumFromArr(arr){
    var maxNumArray = [];
    for (i=0; i < arr.length; i++){
        max = arr[i][0];
        for (j=0; j < arr[i].length; j++){
                if (arr [i][j]>max){max = arr [i][j]};
            if (arr[i][j] > maxNumArray[i]){
                maxNumArray[i] = arr[i][j];
            }
        }
        maxNumArray.push (max);
    }

return maxNumArray;
}
var arr1 =[
    [13,27,18,26],
    [4,5,1,3],
    [32,35,37,39],
    [1000,1001,857,1]
];
var arr2 = [
    [4,9,1,3],
    [13,35,18,26],
    [32,35,97,39],
    [1000000,1001,857,1]
];
var arr3 = [
    [17,23,25,12],
    [25,7,34,48],
    [4,10,18,21],
    [72,3,17,10]
];
// Only change code above this line
console.log(largestNumFromArr(arr1));
console.log(largestNumFromArr(arr2));
console.log(largestNumFromArr(arr3));
module.exports = largestNumFromArr;