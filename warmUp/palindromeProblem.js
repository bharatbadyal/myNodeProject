
function checkPalindrom(num){
    let rev = 0;
    let numCopy = num;
    while(num>0){
        let rem = num%10
        rev = (10*rev)+ rem;
        num = Math.floor(num /10);
    }

    if(rev === num){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkPalindrom(123))

// i still have to clear my doubts about this logic so just take it as initial referene to the problem as of 12 Jun 25. 