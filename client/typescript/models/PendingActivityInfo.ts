/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityType } from './ActivityType';
import type { Failure } from './Failure';
import type { Payloads } from './Payloads';
import type { WorkerVersionStamp } from './WorkerVersionStamp';
export type PendingActivityInfo = {
    activityId?: string;
    activityType?: ActivityType;
    state?: PendingActivityInfo.state;
    heartbeatDetails?: Payloads;
    lastHeartbeatTime?: string;
    lastStartedTime?: string;
    attempt?: number;
    maximumAttempts?: number;
    scheduledTime?: string;
    expirationTime?: string;
    lastFailure?: Failure;
    lastWorkerIdentity?: string;
    /**
     * This means the activity is independently versioned and not bound to the build ID of its workflow.
     * The activity will use the build id in this field instead.
     * If the task fails and is scheduled again, the assigned build ID may change according to the latest versioning
     * rules.
     */
    lastIndependentlyAssignedBuildId?: string;
    /**
     * The version stamp of the worker to whom this activity was most recently dispatched
     */
    lastWorkerVersionStamp?: WorkerVersionStamp;
};
export namespace PendingActivityInfo {
    export enum state {
        PENDING_ACTIVITY_STATE_UNSPECIFIED = 'PENDING_ACTIVITY_STATE_UNSPECIFIED',
        PENDING_ACTIVITY_STATE_SCHEDULED = 'PENDING_ACTIVITY_STATE_SCHEDULED',
        PENDING_ACTIVITY_STATE_STARTED = 'PENDING_ACTIVITY_STATE_STARTED',
        PENDING_ACTIVITY_STATE_CANCEL_REQUESTED = 'PENDING_ACTIVITY_STATE_CANCEL_REQUESTED',
    }
}

