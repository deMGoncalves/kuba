"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const share_1 = require("../../share");
const appendVElement_1 = __importDefault(require("./appendVElement"));
const differentTagName_1 = __importDefault(require("./differentTagName"));
const isTextNode_1 = __importDefault(require("./isTextNode"));
const notHasElement_1 = __importDefault(require("./notHasElement"));
const notHasVElement_1 = __importDefault(require("./notHasVElement"));
const removeElement_1 = __importDefault(require("./removeElement"));
const replaceChild_1 = __importDefault(require("./replaceChild"));
const replaceElement_1 = __importDefault(require("./replaceElement"));
const replaceTextNode_1 = __importDefault(require("./replaceTextNode"));
exports.default = share_1.cond([notHasElement_1.default, appendVElement_1.default], [notHasVElement_1.default, removeElement_1.default], [differentTagName_1.default, replaceChild_1.default], [isTextNode_1.default, replaceTextNode_1.default], [share_1.T, replaceElement_1.default]);
