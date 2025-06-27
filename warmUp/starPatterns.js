// Print the 4*4 * pattern using nested loop

// for(let i =0; i<=4; i++){
//     let row = "";
//     for(let j = 0; j<=4; j++){
//         row = row + "*";
//     }
//     console.log(row)
// } 

// second itearation with different itreation

// for(let i =0; i<=4; i++){
//     let row = "";
//     for(let j = 0; j<=i; j++){
//         row = row +(j+1)
//         }
//     console.log(row)
// } 
 
// third iteration

for(let i = 1; i <= 5; i++){
    let row ="";
    for(let j =1; j<=i; j++){
        row += i;
    }
    console.log(row)
}