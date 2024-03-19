/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
import type { WorkerVersionStamp } from './WorkerVersionStamp';
export type ActivityTaskCompletedEventAttributes = {
    /**
     * Serialized results of the activity. IE: The return value of the activity function
     */
    result?: Payloads;
    /**
     * The id of the `ACTIVITY_TASK_SCHEDULED` event this completion corresponds to
     */
    scheduledEventId?: string;
    /**
     * The id of the `ACTIVITY_TASK_STARTED` event this completion corresponds to
     */
    startedEventId?: string;
    /**
     * id of the worker that completed this task
     */
    identity?: string;
    /**
     * Version info of the worker who processed this workflow task.
     * Deprecated. Use the info inside the corresponding ActivityTaskStartedEvent
     */
    workerVersion?: WorkerVersionStamp;
};

