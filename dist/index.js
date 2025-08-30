"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bt1_1 = require("./bt1");
const bt2_1 = require("./bt2");
const bt3_1 = require("./bt3");
const bt4_1 = require("./bt4");
const bt5_1 = require("./bt5");
const bt6_1 = require("./bt6");
const bt7_1 = require("./bt7");
const bt8_1 = require("./bt8");
const bt9_1 = require("./bt9");
const bt10_1 = require("./bt10");
const bt11_1 = require("./bt11");
const bt12_1 = require("./bt12");
const bt13_1 = require("./bt13");
const bt14_1 = require("./bt14");
const bt15_1 = require("./bt15");
const bt16_1 = require("./bt16");
const bt17_1 = require("./bt17");
const bt18_1 = require("./bt18");
const bt19_1 = require("./bt19");
const bt20_1 = require("./bt20");
const bt21_1 = require("./bt21");
const bt22_1 = require("./bt22");
const bt23_1 = require("./bt23");
const bt24_1 = require("./bt24");
const bt25_1 = require("./bt25");
const bt26_1 = require("./bt26");
const bt28_1 = require("./bt28");
const bt29_1 = require("./bt29");
const bt30_1 = require("./bt30");
const bt27_1 = require("./bt27");
//1. Create a Promise that returns the string "Hello Async" after 2 seconds.
(0, bt1_1.delayedPromise)().then((msg) => {
    console.log("1. Create a Promise that returns the string Hello Async after 2 seconds.");
    console.log(msg);
});
//2. Write a function that returns a Promise resolving with the number 10 after 1 second.
(0, bt2_1.resolveAfter1s)().then((msg) => {
    console.log("2. Write a function that returns a Promise resolving with the number 10 after 1 second.");
    console.log(msg);
});
//3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
(0, bt3_1.rejectAfter1s)().then(null, error => {
    console.log("3. Write a function that rejects a Promise with the error Something went wrong after 1 second.");
    console.log(error);
});
//4. Use .then() and .catch() to handle a Promise that returns a random number.
(0, bt4_1.randomNumberPromise)()
    .then((msg) => {
    console.log('So chan', msg);
})
    .catch((error) => {
    console.log(error.message);
});
//5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
(0, bt5_1.simulateTask)(100)
    .then((msg) => {
    console.log(`5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.`);
    console.log(msg);
});
//6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
const p1 = (0, bt6_1.allPromise)('A', 100);
const p2 = (0, bt6_1.allPromise)('B', 200);
const p3 = (0, bt6_1.allPromise)('C', 300);
Promise.all([p1, p2, p3])
    .then(msg => {
    console.log(`6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.`);
    console.log(msg);
})
    .catch(error => {
});
//7. Use Promise.race() to return whichever Promise resolves first.
const prm1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 200));
const prm2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 100));
(0, bt7_1.firstResolved)([prm1, prm2]).then(result => {
    console.log(`7. Use Promise.race() to return whichever Promise resolves first.`);
    console.log(result);
});
//8. Create a Promise chain: square the number 2, then double it, then add 5.
(0, bt8_1.promiseChain)()
    .then((msg) => {
    console.log(`8. Create a Promise chain: square the number 2, then double it, then add 5.`);
    console.log(msg);
});
//9. Read an array after 1s and filter even numbers
(0, bt9_1.filterEvenNumbers)([12, 21, 11, 36, 18])
    .then((msg) => {
    console.log(`9. Read an array after 1s and filter even numbers`);
    console.log(msg);
});
// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
(0, bt10_1.promiseFinally)(Promise.resolve(123))
    .then((msg) => {
    console.log(`10. Use .finally() to log "Done" when a Promise finishes (success or failure).`);
    console.log(msg);
})
    .catch((error) => {
    console.error(error);
});
(0, bt10_1.promiseFinally)(Promise.reject("error"))
    .then((msg) => {
    console.log(`10. Use .finally() to log "Done" when a Promise finishes (success or failure).`);
    console.log(msg);
})
    .catch((error) => {
    console.error(error);
});
// 11. Convert Exercise 1 into async/await.
(0, bt11_1.delayedPromiseAsync)()
    .then((msg) => {
    console.log(`11. Convert Exercise 1 into async/await.`);
    console.log(msg);
});
// 12. Write an async function that calls simulateTask(2000) and logs the result.
(0, bt12_1.runSimulateTask)();
// 13. Handle errors using try/catch with async/await.
(0, bt13_1.handleSimulateTaskError)();
// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
(0, bt14_1.tripleAfter1s)(5)
    .then((msg) => {
    console.log(`14. Write an async function that takes a number, waits 1 second, and returns the number × 3.`);
    console.log(msg);
});
// 15. Call multiple async functions sequentially using await.
(0, bt15_1.sequentialTriple)()
    .then(() => {
});
// 16. Call multiple async functions in parallel using Promise.all().
(0, bt16_1.parallelCalls)()
    .then((msg) => {
    console.log(`16. Call multiple async functions in parallel using Promise.all().`);
    console.log(msg);
});
// 17. Use for await...of to iterate over an array of Promises.
(0, bt17_1.forAwaitExample)()
    .then(() => {
});
// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).
(0, bt18_1.fetchUser)(1)
    .then((user) => {
    console.log(`18. Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).`);
    console.log(user);
});
// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
(0, bt19_1.fetchUsers)([1, 2, 3])
    .then((users) => {
    console.log(`19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.`);
    console.log(users);
});
// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
(0, bt20_1.fetchUserWithTimeout)(1)
    .then((user) => {
    console.log(`20. Add a timeout: if the API call takes more than 2 seconds, throw an error.`);
    console.log(user);
})
    .catch((error) => {
    console.error(error.message);
});
// 21. Use fetch to get data from a public API (e.g.,https://jsonplaceholder.typicode.com/todos/1).
(0, bt21_1.fetchTodo)()
    .then((todo) => {
    console.log(`21. Use fetch to get data from a public API (e.g.,https://jsonplaceholder.typicode.com/todos/1).`);
    console.log(todo);
})
    .catch((error) => {
    console.error(error.message);
});
// 22. Call the API multiple times and log the results.
(0, bt22_1.fetchMultipleTodos)()
    .then(() => {
});
// 23. Write an async function that fetches a list of todos and filters out those that are not completed.
(0, bt23_1.fetchCompletedTodos)()
    .then(() => {
});
// 24. Write an async function postData() that sends a POST request to a test API.
(0, bt24_1.postData)()
    .then(() => {
});
// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.
(0, bt25_1.downloadFile)()
    .then(() => {
});
// 26. Use async/await with setTimeout to simulate a 5-second wait.
(0, bt26_1.waitFiveSeconds)()
    .then(() => {
});
// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.
(0, bt27_1.fetchWithRetry)('https://jsonplaceholder.typicode.com/todos/1', 3)
    .then((data) => {
    console.log(`27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.`);
    console.log(data);
})
    .catch((error) => {
    console.error(error.message);
});
// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
(0, bt28_1.batchProcess)([
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
(0, bt29_1.queueProcess)([
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
(0, bt30_1.allSettledStatus)([
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/invalid-url',
    'https://jsonplaceholder.typicode.com/todos/3'
])
    .then(() => {
});
