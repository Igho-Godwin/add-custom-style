declare class BadStatusError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
export default BadStatusError;
