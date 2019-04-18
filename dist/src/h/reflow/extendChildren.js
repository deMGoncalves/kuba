"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("./"));
const greaterNumberOfChildren_1 = __importDefault(require("./greaterNumberOfChildren"));
exports.default = (element, vElement) => {
    for (var i = 0; i < greaterNumberOfChildren_1.default(element, vElement); i++) {
        _1.default(element.childNodes[i], vElement.childNodes[i], element);
    }
};
