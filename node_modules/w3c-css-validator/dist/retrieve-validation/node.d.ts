import { W3CCSSValidatorResponse } from '.';
declare const retrieveInNode: (method: 'GET' | 'POST', parameters: string, timeout: number) => Promise<W3CCSSValidatorResponse['cssvalidation']>;
export default retrieveInNode;
