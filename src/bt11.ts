export async function delayedPromiseAsync(): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "Hello Async";
}
