let count = 0;
function countTheDigits(num){

    // for other corner cases
    num = Math.abs(num)  //for negative no

    if(num === 0){return 1;} // if num is zero

    while(num > 0){
        num =Math.floor(num/10);
        count++;
    }
    return count;
}

let no = -680125;
let noOfDigit = countTheDigits(no)
console.log(noOfDigit)