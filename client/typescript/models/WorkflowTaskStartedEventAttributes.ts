/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkerVersionStamp } from './WorkerVersionStamp';
export type WorkflowTaskStartedEventAttributes = {
    /**
     * The id of the `WORKFLOW_TASK_SCHEDULED` event this task corresponds to
     */
    scheduledEventId?: string;
    /**
     * Identity of the worker who picked up this task
     */
    identity?: string;
    /**
     * TODO: ? Appears unused?
     */
    requestId?: string;
    /**
     * True if this workflow should continue-as-new soon because its history size (in
     * either event count or bytes) is getting large.
     */
    suggestContinueAsNew?: boolean;
    /**
     * Total history size in bytes, which the workflow might use to decide when to
     * continue-as-new regardless of the suggestion. Note that history event count is
     * just the event id of this event, so we don't include it explicitly here.
     */
    historySizeBytes?: string;
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

