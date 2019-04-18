"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const curryOne_1 = __importDefault(require("./curryOne"));
const curryTwo_1 = __importDefault(require("./curryTwo"));
const curryThree_1 = __importDefault(require("./curryThree"));
exports.default = (target) => {
    switch (target.length) {
        case 0:
            return target;
        case 1:
            return curryOne_1.default(target);
        case 2:
            return curryTwo_1.default(target);
        default:
            return curryThree_1.default(target);
    }
};
