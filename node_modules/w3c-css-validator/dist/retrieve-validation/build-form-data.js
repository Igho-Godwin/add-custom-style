"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_boundary_1 = __importDefault(require("./get-boundary"));
const buildFormData = (parameters) => {
    var _a;
    const CRLF = '\r\n';
    const boundary = `--${(0, get_boundary_1.default)()}`;
    const pieces = [
        `Content-Disposition: form-data; name="text"${CRLF}${CRLF}${parameters.text}${CRLF}`,
        `Content-Disposition: form-data; name="profile"${CRLF}${CRLF}css3${CRLF}`,
        `Content-Disposition: form-data; name="output"${CRLF}${CRLF}application/json${CRLF}`,
        `Content-Disposition: form-data; name="usermedium"${CRLF}${CRLF}${(_a = parameters.medium) !== null && _a !== void 0 ? _a : 'all'}${CRLF}`,
        `Content-Disposition: form-data; name="warning"${CRLF}${CRLF}${(parameters === null || parameters === void 0 ? void 0 : parameters.warningLevel) ? String(parameters.warningLevel - 1) : 'no'}${CRLF}`,
    ];
    return `${boundary}${CRLF}${pieces.join(`${boundary}${CRLF}`)}${boundary}`;
};
exports.default = buildFormData;
