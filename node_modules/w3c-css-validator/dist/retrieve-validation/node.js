"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const https = __importStar(require("https"));
const bad_status_error_1 = __importDefault(require("./bad-status-error"));
const get_boundary_1 = require("./get-boundary");
const util_1 = require("util");
const retrieveInNode = (method, parameters, timeout) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const req = https.request(`https://jigsaw.w3.org/css-validator/validator${method === 'GET' ? parameters : ''}`, Object.assign({ method,
            timeout }, (method === 'POST'
            ? {
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${parameters.slice(2, get_boundary_1.boundaryLength + 2)}`,
                    'Content-Length': String(new util_1.TextEncoder().encode(parameters).byteLength),
                },
            }
            : {})), (res) => {
            var _a;
            if (typeof res.statusCode === 'number' && (res.statusCode < 200 || res.statusCode >= 300)) {
                reject(new bad_status_error_1.default((_a = res.statusMessage) !== null && _a !== void 0 ? _a : '', res.statusCode));
            }
            let data = '';
            res.on('data', (chunk) => {
                try {
                    data += chunk;
                }
                catch (error) {
                    reject(error);
                }
            });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data).cssvalidation);
                }
                catch (error) {
                    reject(error);
                }
            });
        });
        if (method === 'POST') {
            req.write(parameters);
        }
        req.on('timeout', () => {
            reject(new Error(`The request took longer than ${timeout}ms`));
        });
        req.end();
    });
});
exports.default = retrieveInNode;
