import { Parameters } from '../types/parameters';
declare const buildFormData: (parameters: Extract<Parameters, {
    text: string;
}>) => string;
export default buildFormData;
