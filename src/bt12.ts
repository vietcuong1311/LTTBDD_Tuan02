
import { simulateTask } from "./bt5";

export async function runSimulateTask(): Promise<void> {
    const result = await simulateTask(2000);
    console.log(`12. Write an async function that calls simulateTask(2000) and logs the result.`);
    console.log(result);
}