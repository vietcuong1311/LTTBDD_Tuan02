import { delayedPromise } from "./bt1";
import { resolveAfter1s } from "./bt2";
import { rejectAfter1s } from "./bt3";
import { randomNumberPromise } from "./bt4";
import { simulateTask } from "./bt5";
import { allPromise } from "./bt6";



//1. Create a Promise that returns the string "Hello Async" after 2 seconds.
delayedPromise().then((msg) => {
    console.log("1. Create a Promise that returns the string Hello Async after 2 seconds.");
    console.log(msg); 
})

//2. Write a function that returns a Promise resolving with the number 10 after 1 second.
resolveAfter1s().then((msg) => {
    console.log("2. Write a function that returns a Promise resolving with the number 10 after 1 second.");
    console.log(msg); 
})

//3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
rejectAfter1s().then(null, error=>{
    console.log("3. Write a function that rejects a Promise with the error Something went wrong after 1 second.");
    console.log(error);     
})

//4. Use .then() and .catch() to handle a Promise that returns a random number.
randomNumberPromise()
.then((msg) => {
    console.log('So chan', msg);
})
.catch((error)=>{
    console.log(error.message);
})


//5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
simulateTask(100)
.then((msg) => {
    console.log(`5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.`);
    console.log(msg);
})

//6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
const p1 = allPromise('A', 100);
const p2 = allPromise('B', 200);
const p3 = allPromise('C', 300);

Promise.all([p1, p2, p3])
  .then(msg => {
    console.log(`6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.`);
    
    console.log(msg); 
  })
  .catch(error => {
  });