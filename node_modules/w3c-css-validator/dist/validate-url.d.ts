import { OptionsWithoutWarnings, OptionsWithWarnings } from './types/options';
import { ValidateURLResultWithoutWarnings, ValidateURLResultWithWarnings } from './types/result';
declare function validateURL(urlToBeValidated: string, options?: OptionsWithoutWarnings): Promise<ValidateURLResultWithoutWarnings>;
declare function validateURL(urlToBeValidated: string, options: OptionsWithWarnings): Promise<ValidateURLResultWithWarnings>;
export default validateURL;
