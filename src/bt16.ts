import { tripleAfter1s } from "./bt14";

export async function parallelCalls(): Promise<number[]> {
    return Promise.all([
        tripleAfter1s(2),
        tripleAfter1s(3),
        tripleAfter1s(4)
    ]);
}