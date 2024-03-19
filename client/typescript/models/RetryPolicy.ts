/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * How retries ought to be handled, usable by both workflows and activities
 */
export type RetryPolicy = {
    /**
     * Interval of the first retry. If retryBackoffCoefficient is 1.0 then it is used for all retries.
     */
    initialInterval?: string;
    /**
     * Coefficient used to calculate the next retry interval.
     * The next retry interval is previous interval multiplied by the coefficient.
     * Must be 1 or larger.
     */
    backoffCoefficient?: number;
    /**
     * Maximum interval between retries. Exponential backoff leads to interval increase.
     * This value is the cap of the increase. Default is 100x of the initial interval.
     */
    maximumInterval?: string;
    /**
     * Maximum number of attempts. When exceeded the retries stop even if not expired yet.
     * 1 disables retries. 0 means unlimited (up to the timeouts)
     */
    maximumAttempts?: number;
    /**
     * Non-Retryable errors types. Will stop retrying if the error type matches this list. Note that
     * this is not a substring match, the error *type* (not message) must match exactly.
     */
    nonRetryableErrorTypes?: Array<string>;
};

