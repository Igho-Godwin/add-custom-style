"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boundaryLength = void 0;
exports.boundaryLength = 34;
const getBoundary = () => {
    const allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomBoundaryPiece = '';
    for (let i = 0; i < 10; i += 1) {
        randomBoundaryPiece += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    }
    return `----CSSValidatorBoundary${randomBoundaryPiece}`;
};
exports.default = getBoundary;
