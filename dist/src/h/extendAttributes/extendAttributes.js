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
const isEvent_1 = __importDefault(require("./isEvent"));
const setEvent_1 = __importDefault(require("./setEvent"));
const setAttribute_1 = __importDefault(require("./setAttribute"));
const extendAttributes = (attributes, element) => {
    r.forEach(r.cond([
        [isEvent_1.default, setEvent_1.default(element)],
        [r.T, setAttribute_1.default(element)]
    ]), r.toPairs(attributes));
    return element;
};
exports.default = r.curry(extendAttributes);
