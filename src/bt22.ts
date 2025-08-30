export async function fetchMultipleTodos(): Promise<void> {
    const ids = [1, 2, 3];
    for (const id of ids) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        console.log(`22. Todo ${id}:`, data);
    }
}