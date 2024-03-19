/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
import type { WorkerVersionStamp } from './WorkerVersionStamp';
export type ActivityTaskFailedEventAttributes = {
    /**
     * Failure details
     */
    failure?: Failure;
    /**
     * The id of the `ACTIVITY_TASK_SCHEDULED` event this failure corresponds to
     */
    scheduledEventId?: string;
    /**
     * The id of the `ACTIVITY_TASK_STARTED` event this failure corresponds to
     */
    startedEventId?: string;
    /**
     * id of the worker that failed this task
     */
    identity?: string;
    retryState?: ActivityTaskFailedEventAttributes.retryState;
    /**
     * Version info of the worker who processed this workflow task.
     * Deprecated. Use the info inside the corresponding ActivityTaskStartedEvent
     */
    workerVersion?: WorkerVersionStamp;
};
export namespace ActivityTaskFailedEventAttributes {
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

