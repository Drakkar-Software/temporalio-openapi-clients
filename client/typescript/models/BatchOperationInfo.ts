/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BatchOperationInfo = {
    /**
     * Batch job ID
     */
    jobId?: string;
    /**
     * Batch operation state
     */
    state?: BatchOperationInfo.state;
    /**
     * Batch operation start time
     */
    startTime?: string;
    /**
     * Batch operation close time
     */
    closeTime?: string;
};
export namespace BatchOperationInfo {
    /**
     * Batch operation state
     */
    export enum state {
        BATCH_OPERATION_STATE_UNSPECIFIED = 'BATCH_OPERATION_STATE_UNSPECIFIED',
        BATCH_OPERATION_STATE_RUNNING = 'BATCH_OPERATION_STATE_RUNNING',
        BATCH_OPERATION_STATE_COMPLETED = 'BATCH_OPERATION_STATE_COMPLETED',
        BATCH_OPERATION_STATE_FAILED = 'BATCH_OPERATION_STATE_FAILED',
    }
}

