"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSimulateTaskError = handleSimulateTaskError;
const bt5_1 = require("./bt5");
function handleSimulateTaskError() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, bt5_1.simulateTask)(-100);
            console.error("13. Handle errors using try/catch with async/await:");
            console.log(result);
        }
        catch (error) {
            console.error("13. Handle errors using try/catch with async/await:", error);
        }
    });
}
