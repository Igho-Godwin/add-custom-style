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
const bad_status_error_1 = __importDefault(require("./bad-status-error"));
const get_boundary_1 = require("./get-boundary");
const retrieveInBrowser = (method, parameters, timeout) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new AbortController();
    setTimeout(() => {
        controller.abort();
    }, timeout);
    let res = null;
    try {
        res = yield fetch(`https://jigsaw.w3.org/css-validator/validator${method === 'GET' ? parameters : ''}`, Object.assign({ method, signal: controller.signal }, (method === 'POST'
            ? {
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${parameters.slice(2, get_boundary_1.boundaryLength + 2)}`,
                    'Content-Length': String(new TextEncoder().encode(parameters).byteLength),
                },
                body: parameters,
            }
            : {})));
        if (!res.ok) {
            throw new bad_status_error_1.default(res.statusText, res.status);
        }
    }
    catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
            throw new Error(`The request took longer than ${timeout}ms`);
        }
        throw err;
    }
    if (!res) {
        throw new Error('Response expected');
    }
    const data = (yield res.json());
    return data.cssvalidation;
});
exports.default = retrieveInBrowser;
