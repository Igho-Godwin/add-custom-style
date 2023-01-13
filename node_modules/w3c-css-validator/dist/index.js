"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const validate_text_1 = __importDefault(require("./validate-text"));
const validate_url_1 = __importDefault(require("./validate-url"));
const cssValidator = {
    validateText: validate_text_1.default,
    validateURL: validate_url_1.default,
};
module.exports = cssValidator;
