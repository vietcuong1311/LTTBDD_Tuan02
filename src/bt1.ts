export function delayedPromise() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Hello Async")
        }, 2000)
    })
}

// export function delayedMessage(delay:number): Promise<void> {
//     console.log('after 2s');
//     return new Promise(resolve => setTimeout(resolve, delay))
// }