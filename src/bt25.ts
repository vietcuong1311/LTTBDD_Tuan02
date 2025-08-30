export async function downloadFile(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("25. File downloaded after 3 seconds.");
}
