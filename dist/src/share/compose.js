"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { flip } from './'
const flip_1 = __importDefault(require("./flip"));
exports.default = flip_1.default((first, ...others) => (...args) => others.reduce((result, target) => target(result), first(...args)));
