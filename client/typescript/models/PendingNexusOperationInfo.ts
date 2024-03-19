/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
import type { NexusOperationCancellationInfo } from './NexusOperationCancellationInfo';
/**
 * PendingNexusOperationInfo contains the state of a pending Nexus operation.
 */
export type PendingNexusOperationInfo = {
    /**
     * Endpoint name.
     * Resolved to a URL via the cluster's endpoint registry.
     */
    endpoint?: string;
    /**
     * Service name.
     */
    service?: string;
    /**
     * Operation name.
     */
    operation?: string;
    /**
     * Operation ID. Only set for asynchronous operations after a successful StartOperation call.
     */
    operationId?: string;
    /**
     * Schedule-to-close timeout for this operation.
     * This is the only timeout settable by a workflow.
     * (-- api-linter: core::0140::prepositions=disabled
     * aip.dev/not-precedent: "to" is used to indicate interval. --)
     */
    scheduleToCloseTimeout?: string;
    /**
     * The time when the operation was scheduled.
     */
    scheduledTime?: string;
    state?: PendingNexusOperationInfo.state;
    /**
     * The number of attempts made to deliver the start operation request.
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
    cancellationInfo?: NexusOperationCancellationInfo;
    /**
     * The event ID of the NexusOperationScheduled event. Can be used to correlate an operation in the
     * DescribeWorkflowExecution response with workflow history.
     */
    scheduledEventId?: string;
};
export namespace PendingNexusOperationInfo {
    export enum state {
        PENDING_NEXUS_OPERATION_STATE_UNSPECIFIED = 'PENDING_NEXUS_OPERATION_STATE_UNSPECIFIED',
        PENDING_NEXUS_OPERATION_STATE_SCHEDULED = 'PENDING_NEXUS_OPERATION_STATE_SCHEDULED',
        PENDING_NEXUS_OPERATION_STATE_BACKING_OFF = 'PENDING_NEXUS_OPERATION_STATE_BACKING_OFF',
        PENDING_NEXUS_OPERATION_STATE_STARTED = 'PENDING_NEXUS_OPERATION_STATE_STARTED',
    }
}

