"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const h_1 = __importDefault(require("./h"));
const paint_1 = __importDefault(require("./paint"));
exports.paint = paint_1.default;
const repaint_1 = __importDefault(require("./repaint"));
exports.repaint = repaint_1.default;
exports.default = h_1.default;
