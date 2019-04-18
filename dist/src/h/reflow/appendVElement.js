"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const share_1 = require("../../share");
exports.default = (element, vElement, parent) => parent.appendChild(vElement.cloneNode(share_1.T()));
