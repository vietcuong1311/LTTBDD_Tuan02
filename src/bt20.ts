import { fetchUser } from "./bt18";

export async function fetchUserWithTimeout(id: number): Promise<{ id: number, name: string }> {
    return Promise.race([
        fetchUser(id),
        new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 2000)
        )
    ]);
}