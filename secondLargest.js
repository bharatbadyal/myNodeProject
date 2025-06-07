// Write a function to find the second largest no in array
let largest = -Infinity;
let secondLargest = -Infinity


function secondLargestNo(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i]>secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [4,9,0,2,8,7,1];
console.log("The second Largest No. is: ",secondLargestNo(arr))