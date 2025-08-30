
export function filterEvenNumbers(arr: number[]) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(arr.filter(num => num % 2 === 0));
        }, 1000);
    });
}

