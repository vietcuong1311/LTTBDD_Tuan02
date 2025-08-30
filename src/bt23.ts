export async function fetchCompletedTodos(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    const completed = todos.filter((todo: any) => todo.completed);
    console.log("23. Completed todos:", completed);
}
