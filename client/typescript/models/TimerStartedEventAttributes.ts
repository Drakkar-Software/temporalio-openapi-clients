/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TimerStartedEventAttributes = {
    /**
     * The worker/user assigned id for this timer
     */
    timerId?: string;
    /**
     * How long until this timer fires
     *
     * (-- api-linter: core::0140::prepositions=disabled
     * aip.dev/not-precedent: "to" is used to indicate interval. --)
     */
    startToFireTimeout?: string;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
};

