"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hook_1 = __importDefault(require("./hook"));
const proxy_1 = __importDefault(require("./proxy"));
exports.default = (Component) => (Target) => function Stub(attrs, children) {
    return (this instanceof Stub ? proxy_1.default : hook_1.default)(new Target(Object.assign({}, attrs), children), Component, children);
};
