/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchOperationCancellation } from './BatchOperationCancellation';
import type { BatchOperationDeletion } from './BatchOperationDeletion';
import type { BatchOperationReset } from './BatchOperationReset';
import type { BatchOperationSignal } from './BatchOperationSignal';
import type { BatchOperationTermination } from './BatchOperationTermination';
import type { WorkflowExecution } from './WorkflowExecution';
export type StartBatchOperationRequest = {
    /**
     * Namespace that contains the batch operation
     */
    namespace?: string;
    /**
     * Visibility query defines the the group of workflow to apply the batch operation
     * This field and `executions` are mutually exclusive
     */
    visibilityQuery?: string;
    /**
     * Job ID defines the unique ID for the batch job
     */
    jobId?: string;
    /**
     * Reason to perform the batch operation
     */
    reason?: string;
    /**
     * Executions to apply the batch operation
     * This field and `visibility_query` are mutually exclusive
     */
    executions?: Array<WorkflowExecution>;
    /**
     * Limit for the number of operations processed per second within this batch.
     * Its purpose is to reduce the stress on the system caused by batch operations, which helps to prevent system
     * overload and minimize potential delays in executing ongoing tasks for user workers.
     * Note that when no explicit limit is provided, the server will operate according to its limit defined by the
     * dynamic configuration key `worker.batcherRPS`. This also applies if the value in this field exceeds the
     * server's configured limit.
     */
    maxOperationsPerSecond?: number;
    terminationOperation?: BatchOperationTermination;
    signalOperation?: BatchOperationSignal;
    cancellationOperation?: BatchOperationCancellation;
    deletionOperation?: BatchOperationDeletion;
    resetOperation?: BatchOperationReset;
};

