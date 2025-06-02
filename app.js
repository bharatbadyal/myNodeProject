let name = "Node Ep. 03";
let a = 10;
let b = 32;

console.log(name)
console.log(a+b)
// console.log(global)
console.log(this)

if(name == "Node "){
    console.log("Nothing")
}
else{
    console.log("Else ")
}

let total = 0;
for(let a =0 ; a <10; a++){
    total += a;
}
console.log(total)

for(let i =0; i<10;i++){
    console.log("i = ",i)
}