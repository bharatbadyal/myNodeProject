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


let arr1 = [2,3,4,4,5,5,5]
function rmDu(arr1){
    let x=0;
    for(let i=0; i<arr1.length;i++){
        if(arr1[i]>arr1[x]){
            x++;
            arr1[x]=arr[i];
        }
    }
    return x+1;
}

// var removeElement = function(nums, val) {
//   let x = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != val) {
//       nums[x] = nums[i];
//       x++;
//     }
//   }
//   return x;
// };
         


var removeElement = function(nums,val){
  let x = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i] != val){
      nums[x]=nums[i];
      x++
    }
  }
  return x;
};