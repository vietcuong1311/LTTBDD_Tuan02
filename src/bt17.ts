import { tripleAfter1s } from "./bt14";

export async function forAwaitExample(): Promise<void> {
    const promises = [tripleAfter1s(1), tripleAfter1s(2), tripleAfter1s(3)];
    for await (const result of promises) {
        console.log("17. for await...of result:", result);
    }
}
