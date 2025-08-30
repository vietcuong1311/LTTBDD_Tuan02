export function randomNumberPromise():Promise<number>{
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random()*100)
        if (randomNumber % 2 === 0) {
            resolve(randomNumber);
          } else {
            reject(new Error(`So le: ${randomNumber}`));
          }
    })
}