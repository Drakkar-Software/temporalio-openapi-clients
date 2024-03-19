/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowType } from './WorkflowType';
export type StartChildWorkflowExecutionFailedEventAttributes = {
    /**
     * Namespace of the child workflow.
     * SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.
     */
    namespace?: string;
    namespaceId?: string;
    workflowId?: string;
    workflowType?: WorkflowType;
    cause?: StartChildWorkflowExecutionFailedEventAttributes.cause;
    /**
     * Deprecated
     */
    control?: string;
    /**
     * Id of the `START_CHILD_WORKFLOW_EXECUTION_INITIATED` event which this event corresponds to
     */
    initiatedEventId?: string;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
};
export namespace StartChildWorkflowExecutionFailedEventAttributes {
    export enum cause {
        START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED = 'START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED',
        START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_EXISTS = 'START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_EXISTS',
        START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_NAMESPACE_NOT_FOUND = 'START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_NAMESPACE_NOT_FOUND',
    }
}

