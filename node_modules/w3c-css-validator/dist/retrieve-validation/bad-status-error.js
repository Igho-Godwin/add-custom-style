"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BadStatusError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'BadStatusError';
    }
}
exports.default = BadStatusError;
