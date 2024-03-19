/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecution } from './WorkflowExecution';
export type RequestCancelWorkflowExecutionRequest = {
    namespace?: string;
    workflowExecution?: WorkflowExecution;
    /**
     * The identity of the worker/client
     */
    identity?: string;
    /**
     * Used to de-dupe cancellation requests
     */
    requestId?: string;
    /**
     * If set, this call will error if the most recent (if no run id is set on
     * `workflow_execution`), or specified (if it is) workflow execution is not part of the same
     * execution chain as this id.
     */
    firstExecutionRunId?: string;
    /**
     * Reason for requesting the cancellation
     */
    reason?: string;
};

