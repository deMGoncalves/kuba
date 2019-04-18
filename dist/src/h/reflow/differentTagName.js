"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const share_1 = require("../../share");
exports.default = (element, vElement) => share_1.different(element.tagName, vElement.tagName);
