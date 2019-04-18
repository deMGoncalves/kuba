"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reflow_1 = __importDefault(require("../reflow"));
exports.default = (target, Component, children) => {
    let element = Component(target, children);
    Object.assign(target, {
        __reflow__() {
            reflow_1.default(element, Component(target, children));
        }
    });
    return element;
};
