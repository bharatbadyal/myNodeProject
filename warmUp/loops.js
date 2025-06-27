// for(let a = 0; a < 10; a++){
//     console.log("The value of a: ",a);
// }

// Print all the even no in Array

// let arr = [2,3,5,7,9,13,4]

// for(let a = 0; a < arr.length; a++){
//     if(arr[a] % 2 !== 0){
//         console.log(arr[a])
//     }
// }

// // decrement operartor
// for(let i = 5; i > 0; i--){
//     console.log("Hello World! ",i);
// }

let arr1 = [2,4,6,3,5,7,9,11];
let oddValue = [];
let evenValue = [];
for(let i =0; i < arr1.length; i++){
    if(arr1[i] % 2 == 0){
        evenValue.push(arr1[i]);
    }else{
        oddValue.push(arr1[i]);
    }
}

console.log("Even Values in given Array are: ",evenValue);
console.log("Odd Values in given Array are: ",oddValue);



