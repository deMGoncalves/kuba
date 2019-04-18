"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../__");
exports.default = (target) => function f1(a) {
    switch (arguments.length) {
        case 0:
            return f1;
        default:
            return __1.isGap(a) ? f1 : target(a);
    }
};
