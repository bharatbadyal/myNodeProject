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

let firstName = "Bharat"
let lastName = "Sharma"

let fullName = firstName + " " + lastName
console.log(fullName)

// array 
let arr = [ 5,10,2,0,1]

console.log("The given array values are:", arr)
console.log("The value at the index[1]: ", arr[1])

// array with multiple types of permitive values

let person = ["Bharat",28,5.11,true,["Hatli",184152,"kathua"]]

console.log(person[4][1])

// Objects

let obj1 ={
    "name" :"Bharat",
    "age" : 28,
    "bool": true
}

console.log(obj1.name)