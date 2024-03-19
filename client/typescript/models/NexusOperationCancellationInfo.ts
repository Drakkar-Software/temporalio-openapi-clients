/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
/**
 * NexusOperationCancellationInfo contains the state of a nexus operation cancellation.
 */
export type NexusOperationCancellationInfo = {
    /**
     * The time when cancellation was requested.
     */
    requestedTime?: string;
    state?: NexusOperationCancellationInfo.state;
    /**
     * The number of attempts made to deliver the cancel operation request.
     * This number represents a minimum bound since the attempt is incremented after the request completes.
     */
    attempt?: number;
    /**
     * The time when the last attempt completed.
     */
    lastAttemptCompleteTime?: string;
    /**
     * The last attempt's failure, if any.
     */
    lastAttemptFailure?: Failure;
    /**
     * The time when the next attempt is scheduled.
     */
    nextAttemptScheduleTime?: string;
};
export namespace NexusOperationCancellationInfo {
    export enum state {
        NEXUS_OPERATION_CANCELLATION_STATE_UNSPECIFIED = 'NEXUS_OPERATION_CANCELLATION_STATE_UNSPECIFIED',
        NEXUS_OPERATION_CANCELLATION_STATE_SCHEDULED = 'NEXUS_OPERATION_CANCELLATION_STATE_SCHEDULED',
        NEXUS_OPERATION_CANCELLATION_STATE_BACKING_OFF = 'NEXUS_OPERATION_CANCELLATION_STATE_BACKING_OFF',
        NEXUS_OPERATION_CANCELLATION_STATE_SUCCEEDED = 'NEXUS_OPERATION_CANCELLATION_STATE_SUCCEEDED',
        NEXUS_OPERATION_CANCELLATION_STATE_FAILED = 'NEXUS_OPERATION_CANCELLATION_STATE_FAILED',
        NEXUS_OPERATION_CANCELLATION_STATE_TIMED_OUT = 'NEXUS_OPERATION_CANCELLATION_STATE_TIMED_OUT',
    }
}

