import retrieveValidation from '.';
import { Parameters as RequestParameters } from '../types/parameters';
declare const processParameters: (method: Parameters<typeof retrieveValidation>[0], parameters: RequestParameters) => string;
export default processParameters;
