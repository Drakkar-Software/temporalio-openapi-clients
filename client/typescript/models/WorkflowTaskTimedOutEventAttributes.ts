/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WorkflowTaskTimedOutEventAttributes = {
    /**
     * The id of the `WORKFLOW_TASK_SCHEDULED` event this task corresponds to
     */
    scheduledEventId?: string;
    /**
     * The id of the `WORKFLOW_TASK_STARTED` event this task corresponds to
     */
    startedEventId?: string;
    timeoutType?: WorkflowTaskTimedOutEventAttributes.timeoutType;
};
export namespace WorkflowTaskTimedOutEventAttributes {
    export enum timeoutType {
        TIMEOUT_TYPE_UNSPECIFIED = 'TIMEOUT_TYPE_UNSPECIFIED',
        TIMEOUT_TYPE_START_TO_CLOSE = 'TIMEOUT_TYPE_START_TO_CLOSE',
        TIMEOUT_TYPE_SCHEDULE_TO_START = 'TIMEOUT_TYPE_SCHEDULE_TO_START',
        TIMEOUT_TYPE_SCHEDULE_TO_CLOSE = 'TIMEOUT_TYPE_SCHEDULE_TO_CLOSE',
        TIMEOUT_TYPE_HEARTBEAT = 'TIMEOUT_TYPE_HEARTBEAT',
    }
}

