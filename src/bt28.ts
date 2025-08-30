export async function batchProcess(tasks: (() => Promise<any>)[]): Promise<any[]> {
    return Promise.all(tasks.map(task => task()));
}
