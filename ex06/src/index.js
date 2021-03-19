// Only change code below this line
var myArray = [
    [2,5,6,7,8,9],

    [2.5,2,0.5,0.2,8],

    [1,2,3,4,5,6,7,8,9]
];
function multiplyArrayFunction(myArray){
var newArray = [...myArray];
var sum=0;
var product = 1;
var myArraySum = [];
var myArrayProduct = [];
for (var i=0; i < myArray.length; i++){
    var rowSum=0;
    var rowProduct=1;
    for (var j=0; j < myArray[i].length; j++){
        sum += newArray[i][j];
        rowSum += newArray[i][j];
        product *= newArray[i][j];
        rowProduct *= newArray[i][j];
    }
    myArrayProduct.push(rowProduct);
    myArraySum.push(rowSum);
}
return myArraySum, myArrayProduct;
}

// Only change code above this line
console.log(multiplyArrayFunction(myArray));
module.exports = multiplyArrayFunction;