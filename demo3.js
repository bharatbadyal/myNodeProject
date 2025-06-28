console.log("Start!...")

setTimeout(()=>{
    Promise.resolve().then(()=> console.log("Promise 1 ..."));
    process.nextTick(()=> console.log("Next Tick 1 ..."));
    for(let i=0; i<1000000000; i++){
        // console.log("Inside the loop!...")
    }
},0);

Promise.resolve().then(()=> console.log("Promise 2"));
process.nextTick(()=>{
    console.log("Process Next Tick .....")
})

setTimeout(()=>{
    console.log("Inside the timer funciton 2...")
},0);

console.log("End!.....")