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
exports.fetchMultipleTodos = fetchMultipleTodos;
function fetchMultipleTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const ids = [1, 2, 3];
        for (const id of ids) {
            const response = yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const data = yield response.json();
            console.log(`22. Todo ${id}:`, data);
        }
    });
}
