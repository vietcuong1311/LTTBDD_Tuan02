import { fetchUser } from "./bt18";

export async function fetchUsers(ids: number[]): Promise<{ id: number, name: string }[]> {
    return Promise.all(ids.map(id => fetchUser(id)));
}   