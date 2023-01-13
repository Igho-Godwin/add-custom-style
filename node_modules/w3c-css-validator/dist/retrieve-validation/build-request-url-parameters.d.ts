import { Parameters } from '../types/parameters';
declare function buildRequestURLParameters(parameters: Extract<Parameters, {
    url: string;
}>): string;
export default buildRequestURLParameters;
