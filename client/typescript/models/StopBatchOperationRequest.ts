/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type StopBatchOperationRequest = {
    /**
     * Namespace that contains the batch operation
     */
    namespace?: string;
    /**
     * Batch job id
     */
    jobId?: string;
    /**
     * Reason to stop a batch operation
     */
    reason?: string;
    /**
     * Identity of the operator
     */
    identity?: string;
};

