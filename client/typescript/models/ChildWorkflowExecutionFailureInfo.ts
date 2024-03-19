/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecution } from './WorkflowExecution';
import type { WorkflowType } from './WorkflowType';
export type ChildWorkflowExecutionFailureInfo = {
    namespace?: string;
    workflowExecution?: WorkflowExecution;
    workflowType?: WorkflowType;
    initiatedEventId?: string;
    startedEventId?: string;
    retryState?: ChildWorkflowExecutionFailureInfo.retryState;
};
export namespace ChildWorkflowExecutionFailureInfo {
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

