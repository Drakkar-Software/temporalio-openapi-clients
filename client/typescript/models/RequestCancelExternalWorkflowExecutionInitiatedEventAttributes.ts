/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecution } from './WorkflowExecution';
export type RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = {
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
    /**
     * The namespace the workflow to be cancelled lives in.
     * SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.
     */
    namespace?: string;
    namespaceId?: string;
    workflowExecution?: WorkflowExecution;
    /**
     * Deprecated
     */
    control?: string;
    /**
     * Workers are expected to set this to true if the workflow they are requesting to cancel is
     * a child of the workflow which issued the request
     */
    childWorkflowOnly?: boolean;
    /**
     * Reason for requesting the cancellation
     */
    reason?: string;
};

