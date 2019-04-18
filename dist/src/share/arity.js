"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (n, target) => {
    switch (n) {
        case 0: return () => target();
        case 1: return (a) => target(a);
        case 2: return (a, b) => target(a, b);
        case 3: return (a, b, c) => target(a, b, c);
    }
};
