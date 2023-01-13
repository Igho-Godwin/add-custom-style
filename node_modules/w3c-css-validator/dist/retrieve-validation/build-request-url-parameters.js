"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildRequestURLParameters(parameters) {
    var _a;
    const params = {
        uri: encodeURIComponent(parameters.url),
        usermedium: (_a = parameters === null || parameters === void 0 ? void 0 : parameters.medium) !== null && _a !== void 0 ? _a : 'all',
        warning: (parameters === null || parameters === void 0 ? void 0 : parameters.warningLevel) ? parameters.warningLevel - 1 : 'no',
        output: 'application/json',
        profile: 'css3',
    };
    return `?${Object.entries(params)
        .map(([key, val]) => `${key}=${val}`)
        .join('&')}`;
}
exports.default = buildRequestURLParameters;
