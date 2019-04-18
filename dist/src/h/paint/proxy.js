"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const share_1 = require("../../share");
const hook_1 = __importDefault(require("./hook"));
exports.default = (target, Component) => new Proxy((_, children) => hook_1.default(target, Component, children), {
    get(_, property) {
        const propertyOrMethod = share_1.prop(property, target);
        return share_1.is(Function, propertyOrMethod)
            ? propertyOrMethod.bind(target)
            : propertyOrMethod;
    }
});
