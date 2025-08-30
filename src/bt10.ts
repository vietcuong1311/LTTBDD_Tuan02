export function promiseFinally<T>(promise: Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
        promise
            .then(resolve)
            .catch(reject)
            .finally(() => console.log("Done"));
    });
}