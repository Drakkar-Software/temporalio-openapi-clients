/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * BatchOperationCancellation sends cancel requests to batch workflows.
 * Keep the parameter in sync with temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.
 * Ignore first_execution_run_id because this is used for single workflow operation.
 */
export type BatchOperationCancellation = {
    /**
     * The identity of the worker/client
     */
    identity?: string;
};

