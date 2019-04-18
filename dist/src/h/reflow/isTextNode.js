"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const share_1 = require("../../share");
exports.default = share_1.compose(share_1.equal(3), share_1.prop('nodeType'));
