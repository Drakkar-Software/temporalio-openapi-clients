/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DescribeBatchOperationResponse = {
    /**
     * Batch operation type
     */
    operationType?: DescribeBatchOperationResponse.operationType;
    /**
     * Batch job ID
     */
    jobId?: string;
    /**
     * Batch operation state
     */
    state?: DescribeBatchOperationResponse.state;
    /**
     * Batch operation start time
     */
    startTime?: string;
    /**
     * Batch operation close time
     */
    closeTime?: string;
    /**
     * Total operation count
     */
    totalOperationCount?: string;
    /**
     * Complete operation count
     */
    completeOperationCount?: string;
    /**
     * Failure operation count
     */
    failureOperationCount?: string;
    /**
     * Identity indicates the operator identity
     */
    identity?: string;
    /**
     * Reason indicates the reason to stop a operation
     */
    reason?: string;
};
export namespace DescribeBatchOperationResponse {
    /**
     * Batch operation type
     */
    export enum operationType {
        BATCH_OPERATION_TYPE_UNSPECIFIED = 'BATCH_OPERATION_TYPE_UNSPECIFIED',
        BATCH_OPERATION_TYPE_TERMINATE = 'BATCH_OPERATION_TYPE_TERMINATE',
        BATCH_OPERATION_TYPE_CANCEL = 'BATCH_OPERATION_TYPE_CANCEL',
        BATCH_OPERATION_TYPE_SIGNAL = 'BATCH_OPERATION_TYPE_SIGNAL',
        BATCH_OPERATION_TYPE_DELETE = 'BATCH_OPERATION_TYPE_DELETE',
        BATCH_OPERATION_TYPE_RESET = 'BATCH_OPERATION_TYPE_RESET',
    }
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

