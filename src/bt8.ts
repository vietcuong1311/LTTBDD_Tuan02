export function promiseChain() {
    return Promise.resolve(2)
        .then(num => num * num)   
        .then(num => num * 2)     
        .then(num => num + 5);    
}
