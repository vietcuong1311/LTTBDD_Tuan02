"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstResolved = firstResolved;
function firstResolved(promises) {
    return Promise.race(promises);
}
