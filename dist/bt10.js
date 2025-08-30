"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseFinally = promiseFinally;
function promiseFinally(promise) {
    return new Promise((resolve, reject) => {
        promise
            .then(resolve)
            .catch(reject)
            .finally(() => console.log("Done"));
    });
}
