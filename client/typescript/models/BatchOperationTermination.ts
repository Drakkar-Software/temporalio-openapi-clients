/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
/**
 * BatchOperationTermination sends terminate requests to batch workflows.
 * Keep the parameter in sync with temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.
 * Ignore first_execution_run_id because this is used for single workflow operation.
 */
export type BatchOperationTermination = {
    /**
     * Serialized value(s) to provide to the termination event
     */
    details?: Payloads;
    /**
     * The identity of the worker/client
     */
    identity?: string;
};

