import { simulateTask } from "./bt5";

export async function handleSimulateTaskError() {
    try {
        const result = await simulateTask(-100);
        console.error("13. Handle errors using try/catch with async/await:");
        console.log(result);
    } catch (error) {
        console.error("13. Handle errors using try/catch with async/await:", error);
    }
}