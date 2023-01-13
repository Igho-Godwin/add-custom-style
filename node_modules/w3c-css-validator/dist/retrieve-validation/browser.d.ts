import { W3CCSSValidatorResponse } from '.';
declare const retrieveInBrowser: (method: 'GET' | 'POST', parameters: string, timeout: number) => Promise<W3CCSSValidatorResponse['cssvalidation']>;
export default retrieveInBrowser;
