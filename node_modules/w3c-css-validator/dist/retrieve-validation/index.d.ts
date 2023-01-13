import { Parameters } from '../types/parameters';
export interface W3CCSSValidatorResponse {
    cssvalidation: {
        validity: boolean;
        errors?: {
            line: number;
            message: string;
            source?: string;
        }[];
        warnings?: {
            line: number;
            level: 0 | 1 | 2;
            message: string;
            source?: string;
        }[];
    };
}
declare const retrieveValidation: (method: 'GET' | 'POST', unprocessedParameters: Parameters, timeout: number) => Promise<W3CCSSValidatorResponse['cssvalidation']>;
export default retrieveValidation;
