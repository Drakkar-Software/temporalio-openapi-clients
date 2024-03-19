/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
export type WorkflowExecutionFailedEventAttributes = {
    /**
     * Serialized result of workflow failure (ex: An exception thrown, or error returned)
     */
    failure?: Failure;
    retryState?: WorkflowExecutionFailedEventAttributes.retryState;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
    /**
     * If another run is started by cron or retry, this contains the new run id.
     */
    newExecutionRunId?: string;
};
export namespace WorkflowExecutionFailedEventAttributes {
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

