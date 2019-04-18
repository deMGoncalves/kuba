"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../__");
const curryOne_1 = __importDefault(require("./curryOne"));
const curryTwo_1 = __importDefault(require("./curryTwo"));
exports.default = (target) => function f3(a, b, c) {
    switch (arguments.length) {
        case 0:
            return f3;
        case 1:
            return __1.isGap(a) ? f3
                : curryTwo_1.default((_b, _c) => target(a, _b, _c));
        case 2:
            return __1.isGap(a) && __1.isGap(b) ? f3
                : __1.isGap(a) ? curryTwo_1.default((_a, _c) => target(_a, b, _c))
                    : __1.isGap(b) ? curryTwo_1.default((_b, _c) => target(a, _b, _c))
                        : curryOne_1.default(_c => target(a, b, _c));
        default:
            return __1.isGap(a) && __1.isGap(b) && __1.isGap(c) ? f3
                : __1.isGap(a) && __1.isGap(b) ? curryTwo_1.default((_a, _b) => target(_a, _b, c))
                    : __1.isGap(a) && __1.isGap(c) ? curryTwo_1.default((_a, _c) => target(_a, b, _c))
                        : __1.isGap(b) && __1.isGap(c) ? curryTwo_1.default((_b, _c) => target(a, _b, _c))
                            : __1.isGap(a) ? curryOne_1.default(_a => target(_a, b, c))
                                : __1.isGap(b) ? curryOne_1.default(_b => target(a, _b, c))
                                    : __1.isGap(c) ? curryOne_1.default(_c => target(a, b, _c))
                                        : target(a, b, c);
    }
};
