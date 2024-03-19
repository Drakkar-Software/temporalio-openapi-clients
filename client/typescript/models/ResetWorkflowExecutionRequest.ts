/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecution } from './WorkflowExecution';
export type ResetWorkflowExecutionRequest = {
    namespace?: string;
    workflowExecution?: WorkflowExecution;
    reason?: string;
    /**
     * The id of a `WORKFLOW_TASK_COMPLETED`,`WORKFLOW_TASK_TIMED_OUT`, `WORKFLOW_TASK_FAILED`, or
     * `WORKFLOW_TASK_STARTED` event to reset to.
     */
    workflowTaskFinishEventId?: string;
    /**
     * Used to de-dupe reset requests
     */
    requestId?: string;
    /**
     * Event types to be reapplied (deprecated)
     * Default: RESET_REAPPLY_TYPE_SIGNAL
     */
    resetReapplyType?: ResetWorkflowExecutionRequest.resetReapplyType;
    /**
     * Event types not to be reapplied
     */
    resetReapplyExcludeTypes?: Array<'RESET_REAPPLY_EXCLUDE_TYPE_UNSPECIFIED' | 'RESET_REAPPLY_EXCLUDE_TYPE_SIGNAL' | 'RESET_REAPPLY_EXCLUDE_TYPE_UPDATE'>;
};
export namespace ResetWorkflowExecutionRequest {
    /**
     * Event types to be reapplied (deprecated)
     * Default: RESET_REAPPLY_TYPE_SIGNAL
     */
    export enum resetReapplyType {
        RESET_REAPPLY_TYPE_UNSPECIFIED = 'RESET_REAPPLY_TYPE_UNSPECIFIED',
        RESET_REAPPLY_TYPE_SIGNAL = 'RESET_REAPPLY_TYPE_SIGNAL',
        RESET_REAPPLY_TYPE_NONE = 'RESET_REAPPLY_TYPE_NONE',
        RESET_REAPPLY_TYPE_ALL_ELIGIBLE = 'RESET_REAPPLY_TYPE_ALL_ELIGIBLE',
    }
}

