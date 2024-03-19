/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
export type ApplicationFailureInfo = {
    type?: string;
    nonRetryable?: boolean;
    details?: Payloads;
    /**
     * next_retry_delay can be used by the client to override the activity
     * retry interval calculated by the retry policy. Retry attempts will
     * still be subject to the maximum retries limit and total time limit
     * defined by the policy.
     */
    nextRetryDelay?: string;
};

