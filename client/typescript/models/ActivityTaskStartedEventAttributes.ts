/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
import type { WorkerVersionStamp } from './WorkerVersionStamp';
export type ActivityTaskStartedEventAttributes = {
    /**
     * The id of the `ACTIVITY_TASK_SCHEDULED` event this task corresponds to
     */
    scheduledEventId?: string;
    /**
     * id of the worker that picked up this task
     */
    identity?: string;
    /**
     * TODO ??
     */
    requestId?: string;
    /**
     * Starting at 1, the number of times this task has been attempted
     */
    attempt?: number;
    /**
     * Will be set to the most recent failure details, if this task has previously failed and then
     * been retried.
     */
    lastFailure?: Failure;
    /**
     * Version info of the worker to whom this task was dispatched.
     */
    workerVersion?: WorkerVersionStamp;
    /**
     * Used by server internally to properly reapply build ID redirects to an execution
     * when rebuilding it from events.
     */
    buildIdRedirectCounter?: string;
};

