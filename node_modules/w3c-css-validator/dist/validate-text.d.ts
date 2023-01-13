import { OptionsWithoutWarnings, OptionsWithWarnings } from './types/options';
import { ValidateTextResultWithoutWarnings, ValidateTextResultWithWarnings } from './types/result';
declare function validateText(textToValidate: string, options?: OptionsWithoutWarnings): Promise<ValidateTextResultWithoutWarnings>;
declare function validateText(textToValidate: string, options: OptionsWithWarnings): Promise<ValidateTextResultWithWarnings>;
export default validateText;
