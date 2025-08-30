import { tripleAfter1s } from "./bt14";

export async function sequentialTriple() {
    const a = await tripleAfter1s(2);
    const b = await tripleAfter1s(3);
    const c = await tripleAfter1s(4);
    console.log(`15. Call multiple async functions sequentially using await.`);
    console.log("Sequential:", a, b, c);
}
