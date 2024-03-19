/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ActivityTaskCancelRequestedEventAttributes = {
    /**
     * The id of the `ACTIVITY_TASK_SCHEDULED` event this cancel request corresponds to
     */
    scheduledEventId?: string;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
};

