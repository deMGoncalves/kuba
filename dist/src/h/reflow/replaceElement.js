"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const extendAttributes_1 = __importDefault(require("./extendAttributes"));
const extendChildren_1 = __importDefault(require("./extendChildren"));
exports.default = (element, vElement) => {
    extendAttributes_1.default(element, vElement);
    extendChildren_1.default(element, vElement);
};
