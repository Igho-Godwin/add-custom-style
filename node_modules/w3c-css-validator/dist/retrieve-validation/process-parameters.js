"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const build_request_url_parameters_1 = __importDefault(require("./build-request-url-parameters"));
const build_form_data_1 = __importDefault(require("./build-form-data"));
const processParameters = (method, parameters) => {
    if (method === 'GET') {
        if ('text' in parameters) {
            throw new Error('A GET request is not supported with validation by text');
        }
        return (0, build_request_url_parameters_1.default)(parameters);
    }
    if (method === 'POST') {
        if ('url' in parameters) {
            throw new Error('A POST request is not supported with validation by URL');
        }
        return (0, build_form_data_1.default)(parameters);
    }
    throw new Error(`Parameter processing called with unrecognized method: ${method}`);
};
exports.default = processParameters;
