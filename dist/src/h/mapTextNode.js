"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const r = __importStar(require("ramda"));
const mapTextNode = r.cond([
    [r.is(HTMLElement), (child) => child],
    [r.T, (child) => document.createTextNode(child)]
]);
exports.default = (children) => r.map(mapTextNode, children);
