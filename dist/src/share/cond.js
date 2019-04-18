"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (...handlers) => function (...args) {
    for (let [can, proccess] of handlers) {
        if (can(...args))
            return proccess(...args);
    }
};
