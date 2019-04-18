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
const setAttribute = (key, value, target) => target.setAttribute(key, value);
exports.default = r.curry((element, [key, value]) => setAttribute(key, value, element));
