export async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let i = 0; i <= retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Fetch failed");
            return await response.json();
        } catch (error) {
            if (i === retries) throw error;
        }
    }
}
