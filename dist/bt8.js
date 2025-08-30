"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseChain = promiseChain;
function promiseChain() {
    return Promise.resolve(2)
        .then(num => num * num)
        .then(num => num * 2)
        .then(num => num + 5);
}
