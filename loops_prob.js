// //01. Write a function that searches an element in an array and returns its index and if the element is not present then simply returns -1

// function searchElement(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return i; // Return the index if the element is found
//         }
//     }
//     return -1; // Return -1 if the element is not found
// }

// // Example usage:
// let arr = [2, 5, 33, 56, 98];
// let element = 56;

// let index = searchElement(arr, element);
// if (index !== -1) {
//     console.log("The element " + element + " is at index: " + index);
// } else {
//     console.log(-1);
// }

// 02. Write a function that will return the number of -ve no in an array

// function countNegNo(arr){
//     let totalNum = 0;
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] < 0){
//             totalNum++;
//         }
//     }
//     return totalNum;
// }

// let arr1 = [-2,3,-4,5,-3,-6]
// let ans = countNegNo(arr1)
// console.log(ans)

// 03. Write a function that will return the largest no in given array.

function lasrgestNo(arr){
    let largest = -Infinity
    for(let i =0 ; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

let arr2 = [2,4,6,1,113,-13,15,17]
console.log("The largest no in array is : ",lasrgestNo(arr2))

// 04. Wirte a function that will return smallest no in given array.
let smallest = Infinity;
function smallestNo(arr){
    for( let i = 0; i<arr.length; i++){
        if(arr[i]< smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log('The smallest no in array is: ', smallestNo(arr2))