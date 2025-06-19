let arr = [0,1,1,1,2,2,3,3,4];

function removeDuplicate(arr){
    let x=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>arr[x]){
            x++;
            arr[x]=arr[i];
        }
    }
    return x+1;
}

console.log(removeDuplicate(arr))

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
