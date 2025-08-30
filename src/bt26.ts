export async function waitFiveSeconds(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("26. Waited 5 seconds.");
}
