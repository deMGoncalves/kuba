"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const r = __importStar(require("ramda"));
const mapTextNode_1 = __importDefault(require("./mapTextNode"));
const appendChildren = (children, element) => {
    r.forEach(child => element.appendChild(child), mapTextNode_1.default(children));
    return element;
};
exports.default = r.curry(appendChildren);
