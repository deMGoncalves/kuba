"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../__");
const curryOne_1 = __importDefault(require("./curryOne"));
exports.default = (target) => function f2(a, b) {
    switch (arguments.length) {
        case 0:
            return f2;
        case 1:
            return __1.isGap(a) ? f2
                : curryOne_1.default((_b) => target(a, _b));
        default:
            return __1.isGap(a) && __1.isGap(b) ? f2
                : __1.isGap(a) ? curryOne_1.default(_a => target(_a, b))
                    : __1.isGap(b) ? curryOne_1.default(_b => target(a, _b))
                        : target(a, b);
    }
};
