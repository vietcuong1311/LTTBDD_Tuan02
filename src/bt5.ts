export function simulateTask(time:number): Promise<String> {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(`After ${time} ms`)
        }, time)
    })
}