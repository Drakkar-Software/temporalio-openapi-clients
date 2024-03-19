/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
import type { WorkflowExecution } from './WorkflowExecution';
import type { WorkflowType } from './WorkflowType';
export type ChildWorkflowExecutionFailedEventAttributes = {
    failure?: Failure;
    /**
     * Namespace of the child workflow.
     * SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.
     */
    namespace?: string;
    namespaceId?: string;
    workflowExecution?: WorkflowExecution;
    workflowType?: WorkflowType;
    /**
     * Id of the `START_CHILD_WORKFLOW_EXECUTION_INITIATED` event which this event corresponds to
     */
    initiatedEventId?: string;
    /**
     * Id of the `CHILD_WORKFLOW_EXECUTION_STARTED` event which this event corresponds to
     */
    startedEventId?: string;
    retryState?: ChildWorkflowExecutionFailedEventAttributes.retryState;
};
export namespace ChildWorkflowExecutionFailedEventAttributes {
    export enum retryState {
        RETRY_STATE_UNSPECIFIED = 'RETRY_STATE_UNSPECIFIED',
        RETRY_STATE_IN_PROGRESS = 'RETRY_STATE_IN_PROGRESS',
        RETRY_STATE_NON_RETRYABLE_FAILURE = 'RETRY_STATE_NON_RETRYABLE_FAILURE',
        RETRY_STATE_TIMEOUT = 'RETRY_STATE_TIMEOUT',
        RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED = 'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED',
        RETRY_STATE_RETRY_POLICY_NOT_SET = 'RETRY_STATE_RETRY_POLICY_NOT_SET',
        RETRY_STATE_INTERNAL_SERVER_ERROR = 'RETRY_STATE_INTERNAL_SERVER_ERROR',
        RETRY_STATE_CANCEL_REQUESTED = 'RETRY_STATE_CANCEL_REQUESTED',
    }
}

