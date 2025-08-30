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
exports.sequentialTriple = sequentialTriple;
const bt14_1 = require("./bt14");
function sequentialTriple() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield (0, bt14_1.tripleAfter1s)(2);
        const b = yield (0, bt14_1.tripleAfter1s)(3);
        const c = yield (0, bt14_1.tripleAfter1s)(4);
        console.log(`15. Call multiple async functions sequentially using await.`);
        console.log("Sequential:", a, b, c);
    });
}
