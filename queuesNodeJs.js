console.log("Start!...");

setTimeout(()=>{
    console.log("Timer 1");
})

Promise.resolve().then(()=>{
    console.log("Promise 1");
})

process.nextTick(()=>{
    console.log("Next Tick 2");
})

setTimeout(()=>{
    console.log("Timer 2");
})

process.nextTick(()=>{
    console.log("Next Tick 1");
})

for(let i =0; i<10000000; i++){}

console.log("End!...")