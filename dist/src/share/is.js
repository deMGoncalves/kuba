"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
exports.default = _1.curry((typing, target) => (target != null && target.constructor === typing) || target instanceof typing);
