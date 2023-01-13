import validateText from './validate-text';
import validateURL from './validate-url';
declare const cssValidator: {
    validateText: typeof validateText;
    validateURL: typeof validateURL;
};
export = cssValidator;
