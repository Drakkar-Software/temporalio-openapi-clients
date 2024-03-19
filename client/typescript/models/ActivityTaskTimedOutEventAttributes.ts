/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
export type ActivityTaskTimedOutEventAttributes = {
    /**
     * If this activity had failed, was retried, and then timed out, that failure is stored as the
     * `cause` in here.
     */
    failure?: Failure;
    /**
     * The id of the `ACTIVITY_TASK_SCHEDULED` event this timeout corresponds to
     */
    scheduledEventId?: string;
    /**
     * The id of the `ACTIVITY_TASK_STARTED` event this timeout corresponds to
     */
    startedEventId?: string;
    retryState?: ActivityTaskTimedOutEventAttributes.retryState;
};
export namespace ActivityTaskTimedOutEventAttributes {
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

