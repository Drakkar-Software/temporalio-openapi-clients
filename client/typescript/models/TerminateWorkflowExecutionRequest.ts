/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
import type { WorkflowExecution } from './WorkflowExecution';
export type TerminateWorkflowExecutionRequest = {
    namespace?: string;
    workflowExecution?: WorkflowExecution;
    reason?: string;
    /**
     * Serialized additional information to attach to the termination event
     */
    details?: Payloads;
    /**
     * The identity of the worker/client
     */
    identity?: string;
    /**
     * If set, this call will error if the most recent (if no run id is set on
     * `workflow_execution`), or specified (if it is) workflow execution is not part of the same
     * execution chain as this id.
     */
    firstExecutionRunId?: string;
};

