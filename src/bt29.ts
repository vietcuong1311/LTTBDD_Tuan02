export async function queueProcess(tasks: (() => Promise<any>)[]): Promise<any[]> {
    const results = [];
    for (const task of tasks) {
        results.push(await task());
    }
    return results;
}
