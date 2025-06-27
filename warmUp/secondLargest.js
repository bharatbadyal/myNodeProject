// // Write a function to find the second largest no in array
// let largest = -Infinity;
// let secondLargest = -Infinity


// function secondLargestNo(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             secondLargest = largest;
//             largest = arr[i];
//         }else if(arr[i]>secondLargest){
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }

// let arr = [4,9,0,2,8,7,1];
// console.log("The second Largest No. is: ",secondLargestNo(arr))


// // Lets Practice Loop in Loop

// for(let i=0; i<1; i++){
//     for(let j=0; j<2; j++){
//         for(let k=0; k<3;k++){
            
//         console.log("The value of i for j for k is: ",i,j,k)

//         }
//         }
// }

//experimental code

// for(let i=0; i<5;i++){
//     for(let j =0; j<i;j++){
//         console.log(i,j);
//     }
// }

// for(let i=0; i<3;i++){
//     for(let j =i; j>=0;j--){
//         console.log(i,j);
//     }
// }
for(let i=3; i>0;i--){
    for(let j =0; j<i;j++){
        console.log(i,j);
    }
}

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

