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
const executeComponent_1 = __importDefault(require("./executeComponent"));
const createElement_1 = __importDefault(require("./createElement"));
const h = r.cond([
    [r.is(String), createElement_1.default],
    [r.is(Function), executeComponent_1.default]
]);
exports.default = (tagNameOrComponent, attributes, ...children) => h(tagNameOrComponent, Object.assign({}, attributes), r.flatten(children));
