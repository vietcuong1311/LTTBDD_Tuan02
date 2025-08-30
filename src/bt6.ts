export function allPromise(name: String, time: number){
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(`Name: ${name} time: ${time}`)
        }, time)
    })
}