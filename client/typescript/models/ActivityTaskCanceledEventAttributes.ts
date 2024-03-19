/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
import type { WorkerVersionStamp } from './WorkerVersionStamp';
export type ActivityTaskCanceledEventAttributes = {
    /**
     * Additional information that the activity reported upon confirming cancellation
     */
    details?: Payloads;
    /**
     * id of the most recent `ACTIVITY_TASK_CANCEL_REQUESTED` event which refers to the same
     * activity
     */
    latestCancelRequestedEventId?: string;
    /**
     * The id of the `ACTIVITY_TASK_SCHEDULED` event this cancel confirmation corresponds to
     */
    scheduledEventId?: string;
    /**
     * The id of the `ACTIVITY_TASK_STARTED` event this cancel confirmation corresponds to
     */
    startedEventId?: string;
    /**
     * id of the worker who canceled this activity
     */
    identity?: string;
    /**
     * Version info of the worker who processed this workflow task.
     * Deprecated. Use the info inside the corresponding ActivityTaskStartedEvent
     */
    workerVersion?: WorkerVersionStamp;
};

