"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allowedMediums = [
    'all',
    'braille',
    'embossed',
    'handheld',
    'print',
    'projection',
    'screen',
    'speech',
    'tty',
    'tv',
];
const allowedWarningLevels = [0, 1, 2, 3];
function validateOptions(options) {
    if (options) {
        if (options.medium && !allowedMediums.includes(options.medium)) {
            throw new Error(`The medium must be one of the following: ${allowedMediums.join(', ')}`);
        }
        if (options.warningLevel && !allowedWarningLevels.includes(options.warningLevel)) {
            throw new Error(`The warning level must be one of the following: ${allowedWarningLevels.join(', ')}`);
        }
        if (options.timeout !== undefined && !Number.isInteger(options.timeout)) {
            throw new Error('The timeout must be an integer');
        }
        if (options.timeout && options.timeout < 0) {
            throw new Error('The timeout must be a positive integer');
        }
    }
}
exports.default = validateOptions;
