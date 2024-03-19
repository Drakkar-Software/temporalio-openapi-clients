/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TimerCanceledEventAttributes = {
    /**
     * Will match the `timer_id` from `TIMER_STARTED` event for this timer
     */
    timerId?: string;
    /**
     * The id of the `TIMER_STARTED` event itself
     */
    startedEventId?: string;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
    /**
     * The id of the worker who requested this cancel
     */
    identity?: string;
};

