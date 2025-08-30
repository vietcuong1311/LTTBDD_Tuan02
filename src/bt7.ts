export function firstResolved<T>(promises: Promise<T>[]): Promise<T> {
    return Promise.race(promises);
}