export function resolveAfter1s() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("10")
        }, 1000)
    })
}