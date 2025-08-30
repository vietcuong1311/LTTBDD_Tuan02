export async function fetchUser(id: number): Promise<{ id: number, name: string }> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { id, name: `User${id}` };
}