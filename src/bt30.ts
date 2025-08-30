export async function allSettledStatus(urls: string[]): Promise<void> {
    const promises = urls.map(url => fetch(url));
    const results = await Promise.allSettled(promises);
    results.forEach((result, idx) => {
        if (result.status === "fulfilled") {
            console.log(`30. API ${urls[idx]} succeeded.`);
        } else {
            console.log(`30. API ${urls[idx]} failed:`, result.reason);
        }
    });
}
