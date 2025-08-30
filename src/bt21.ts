export async function fetchTodo(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("21. Fetched todo:", data);
}
