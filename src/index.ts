import { delayedPromise } from "./bt1";
import { resolveAfter1s } from "./bt2";
import { rejectAfter1s } from "./bt3";
import { randomNumberPromise } from "./bt4";
import { simulateTask } from "./bt5";
import { allPromise } from "./bt6";
import { firstResolved } from "./bt7";
import { promiseChain } from "./bt8";
import { filterEvenNumbers } from "./bt9";
import { promiseFinally } from "./bt10";
import { delayedPromiseAsync } from "./bt11";
import { runSimulateTask } from "./bt12";
import { handleSimulateTaskError } from "./bt13";
import { tripleAfter1s } from "./bt14";
import { sequentialTriple } from "./bt15";
import { parallelCalls } from "./bt16";
import { forAwaitExample } from "./bt17";
import { fetchUser } from "./bt18";
import { fetchUsers } from "./bt19";
import { fetchUserWithTimeout } from "./bt20";
import { fetchTodo } from "./bt21";
import { fetchMultipleTodos } from "./bt22";
import { fetchCompletedTodos } from "./bt23";
import { postData } from "./bt24";
import { downloadFile } from "./bt25";
import { waitFiveSeconds } from "./bt26";
import { batchProcess } from "./bt28";
import { queueProcess } from "./bt29";
import { allSettledStatus } from "./bt30";
import { fetchWithRetry } from "./bt27";

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

//7. Use Promise.race() to return whichever Promise resolves first.
const prm1 = new Promise(
    (resolve) => setTimeout(() => resolve("Promise 1"), 200));
const prm2 = new Promise(
    (resolve) => setTimeout(() => resolve("Promise 2"), 100));

firstResolved([prm1, prm2]).then(result => {
    console.log(`7. Use Promise.race() to return whichever Promise resolves first.`);
    console.log(result); 
});

//8. Create a Promise chain: square the number 2, then double it, then add 5.
promiseChain()
.then((msg) => {
    console.log(`8. Create a Promise chain: square the number 2, then double it, then add 5.`);
    console.log(msg);
})

//9. Read an array after 1s and filter even numbers
filterEvenNumbers([12, 21, 11, 36, 18])
.then((msg) => {
    console.log(`9. Read an array after 1s and filter even numbers`);
    console.log(msg);
})

// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
promiseFinally(Promise.resolve(123))
.then((msg) => {
    console.log(`10. Use .finally() to log "Done" when a Promise finishes (success or failure).`);
    console.log(msg);
})
.catch((error) => {
    console.error(error);
});

promiseFinally(Promise.reject("error"))
.then((msg) => {
    console.log(`10. Use .finally() to log "Done" when a Promise finishes (success or failure).`);
    console.log(msg);
})
.catch((error) => {
    console.error(error);
});

// 11. Convert Exercise 1 into async/await.
delayedPromiseAsync()
.then((msg) => {
    console.log(`11. Convert Exercise 1 into async/await.`);
    console.log(msg); 
});

// 12. Write an async function that calls simulateTask(2000) and logs the result.
runSimulateTask()

// 13. Handle errors using try/catch with async/await.
handleSimulateTaskError()

// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
tripleAfter1s(5)
.then((msg) => {
    console.log(`14. Write an async function that takes a number, waits 1 second, and returns the number × 3.`);
    console.log(msg); 
});
// 15. Call multiple async functions sequentially using await.
sequentialTriple()
.then(() => {    
});

// 16. Call multiple async functions in parallel using Promise.all().
parallelCalls()
.then((msg) => {
    console.log(`16. Call multiple async functions in parallel using Promise.all().`);
    console.log(msg);
});

// 17. Use for await...of to iterate over an array of Promises.
forAwaitExample()
.then(() => {    
});

// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).
fetchUser(1)
.then((user) => {
    console.log(`18. Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).`);
    console.log(user);
});

// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
fetchUsers([1, 2, 3])
.then((users) => {
    console.log(`19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.`);
    console.log(users);
});

// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
fetchUserWithTimeout(1)
.then((user) => {
    console.log(`20. Add a timeout: if the API call takes more than 2 seconds, throw an error.`);
    console.log(user);
})
.catch((error) => {
    console.error(error.message);
}); 
// 21. Use fetch to get data from a public API (e.g.,https://jsonplaceholder.typicode.com/todos/1).
fetchTodo()
.then((todo) => {
    console.log(`21. Use fetch to get data from a public API (e.g.,https://jsonplaceholder.typicode.com/todos/1).`); 
    console.log(todo);
})
.catch((error) => {
    console.error(error.message);
});

// 22. Call the API multiple times and log the results.
fetchMultipleTodos()
.then(() => {    
});

// 23. Write an async function that fetches a list of todos and filters out those that are not completed.
fetchCompletedTodos()
.then(() => {    
});
// 24. Write an async function postData() that sends a POST request to a test API.
postData()
.then(() => {    
});

// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.
downloadFile()
.then(() => {    
});

// 26. Use async/await with setTimeout to simulate a 5-second wait.
waitFiveSeconds()
.then(() => {    
});

// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.
fetchWithRetry('https://jsonplaceholder.typicode.com/todos/1', 3)
.then((data) => {
    console.log(`27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.`);     
    console.log(data);
})
.catch((error) => {
    console.error(error.message);
});

// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
batchProcess([
    () => new Promise(resolve => setTimeout(() => resolve('Task 1 done'), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 2 done'), 2000)),   
    () => new Promise(resolve => setTimeout(() => resolve('Task 3 done'), 1500)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 4 done'), 2500)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 5 done'), 3000))
])
.then((results) => {
    console.log(`28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).`);
    console.log(results);
});

// 29. Write an async function queueProcess() that processes tasks sequentially in a queue.
queueProcess([
    () => new Promise(resolve => setTimeout(() => resolve('Task 1 done'), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 2 done'), 2000)),   
    () => new Promise(resolve => setTimeout(() => resolve('Task 3 done'), 1500)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 4 done'), 2500)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 5 done'), 3000))
])
.then((results) => {
    console.log(`29. Write an async function queueProcess() that processes tasks sequentially in a queue.`);
    console.log(results);
});

// 30. Use async/await + Promise.allSettled() to handle multiple API calls and display their success/failure status.
allSettledStatus([
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/invalid-url', 
    'https://jsonplaceholder.typicode.com/todos/3'
])
.then(() => {    
});