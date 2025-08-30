"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectAfter1s = rejectAfter1s;
function rejectAfter1s() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}
