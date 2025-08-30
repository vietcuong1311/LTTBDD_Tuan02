"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPromise = allPromise;
function allPromise(name, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Name: ${name} time: ${time}`);
        }, time);
    });
}
