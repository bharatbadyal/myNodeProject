// Write a program that defines a function to calculate the sum of two integers 
// and prints the result. Call this function by passing two integer values.

function sumOfNo(a,b){
    return a+b;
}

let a = 12;
let b = 21;

let sumOfVariables = sumOfNo(a,b)
console.log(sumOfVariables)


// Write a function that takes an integer and returns its square. Call this function and print the result.

// square(x) is a function that computes the square of a number.
// It returns the result instead of printing it.
// square(3) returns 9, which is then printed.

function square(a){
    return a*a;
}

let x = 21;
let squareOfNum = square(x);
console.log(squareOfNum)


// Write a function that accepts a person’s age and prints whether the person is:

// “Invalid input” if the age is less than 1.
// “Not eligible to vote” if the age is less than 18.
// “Eligible to vote” if the age is 18 or above.
// Call the function with different test values: 18, 0, and 8.

let age = 18;

function eligibleToVote(a){
    if(a < 1){
        console.log("Invalid age!");
    }
    else if(a < 18){
        console.log("Still not eligible to Vote");
    }
    else{
        console.log("You can vote");
    }
}

console.log(eligibleToVote(12))

console.log(eligibleToVote(age))

console.log(eligibleToVote(0))


// Write a function that accepts a number and checks whether it is even or odd.

// If the number is divisible by 2 (i.e., remainder is 0), it’s an Even number.
// Otherwise, it’s an Odd number.
// Test the function with inputs 18 and 5.

function evenOrOdd(a){
    let rem = a%2;
    if(rem == 0){
        console.log("even")
    }
    else{
        console.log("Odd")
    }
}
console.log(evenOrOdd(18))
console.log(evenOrOdd(5))