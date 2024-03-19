/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NexusOperationCancelRequestedEventAttributes = {
    /**
     * The id of the `NEXUS_OPERATION_SCHEDULED` event this cancel request corresponds to.
     */
    scheduledEventId?: string;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event that the corresponding RequestCancelNexusOperation command was reported
     * with.
     */
    workflowTaskCompletedEventId?: string;
};

