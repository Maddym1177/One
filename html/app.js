function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects

    return numberArray.map(function(inputArray) {
        return { val: inputArray };
    });
}
    var inputArray = [1, 2, 3];

    var transformedArray = transformToObjects(inputArray);
    // console.log(transformedArray);
    transformToObjects(inputArray);


// function transformToObjects(numberArray) {
//     // Todo: Add your logic
//     // should return an array of objects

//     return inputArray.map(function(numberArray) {
//         return { val: numberArray };
//     });
// }
//     var inputArray = [1, 2, 3];

//     var transformedArray = transformToObjects(inputArray);
//     console.log(transformedArray);

// transformToObjects();

// function transformToObjects() {
//     // Todo: Add your logic
//     // should return an array of objects
//     const inputArray = [1, 2, 3]
//     const newArray = []
//     array.map(el => {
//         obj.val = el
//         newArray.push(obj)
//     })
//    console.log(newArray);
    
// }
// transformToObjects();

// function transformToObjects(numbers) {
//     return numbers.map(function(number) {
//         return { val: number };
//     });
// }

// // Example usage:
// var inputArray = [1, 2, 3];
// var transformedArray = transformToObjects(inputArray);
// console.log(transformedArray); // Output: [{val: 1}, {val: 2}, {val: 3}]


