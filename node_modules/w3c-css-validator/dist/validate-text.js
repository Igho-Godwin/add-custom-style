"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const retrieve_validation_1 = __importDefault(require("./retrieve-validation"));
function validateText(textToBeValidated, options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        if (!textToBeValidated) {
            throw new Error('You must pass in text to be validated');
        }
        if (typeof textToBeValidated !== 'string') {
            throw new Error('The text to be validated must be a string');
        }
        const cssValidationResponse = yield (0, retrieve_validation_1.default)('POST', {
            text: textToBeValidated,
            medium: options === null || options === void 0 ? void 0 : options.medium,
            warningLevel: options === null || options === void 0 ? void 0 : options.warningLevel,
        }, (_a = options === null || options === void 0 ? void 0 : options.timeout) !== null && _a !== void 0 ? _a : 10000);
        const base = {
            valid: false,
            errors: [],
        };
        const result = (options === null || options === void 0 ? void 0 : options.warningLevel)
            ? Object.assign(Object.assign({}, base), { warnings: [] }) : base;
        result.valid = cssValidationResponse.validity;
        (_b = cssValidationResponse.errors) === null || _b === void 0 ? void 0 : _b.forEach((error) => {
            result.errors.push({
                line: error.line,
                message: error.message.replace(/[ :]+$/, '').trim(),
            });
        });
        if ('warnings' in result) {
            (_c = cssValidationResponse.warnings) === null || _c === void 0 ? void 0 : _c.forEach((warning) => {
                result.warnings.push({
                    line: warning.line,
                    message: warning.message.replace(/[ :]+$/, '').trim(),
                    level: (warning.level + 1),
                });
            });
        }
        return result;
    });
}
exports.default = validateText;
