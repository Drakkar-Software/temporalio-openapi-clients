/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PendingWorkflowTaskInfo = {
    state?: PendingWorkflowTaskInfo.state;
    scheduledTime?: string;
    /**
     * original_scheduled_time is the scheduled time of the first workflow task during workflow task heartbeat.
     * Heartbeat workflow task is done by RespondWorkflowTaskComplete with ForceCreateNewWorkflowTask == true and no command
     * In this case, OriginalScheduledTime won't change. Then when current time - original_scheduled_time exceeds
     * some threshold, the workflow task will be forced timeout.
     */
    originalScheduledTime?: string;
    startedTime?: string;
    attempt?: number;
};
export namespace PendingWorkflowTaskInfo {
    export enum state {
        PENDING_WORKFLOW_TASK_STATE_UNSPECIFIED = 'PENDING_WORKFLOW_TASK_STATE_UNSPECIFIED',
        PENDING_WORKFLOW_TASK_STATE_SCHEDULED = 'PENDING_WORKFLOW_TASK_STATE_SCHEDULED',
        PENDING_WORKFLOW_TASK_STATE_STARTED = 'PENDING_WORKFLOW_TASK_STATE_STARTED',
    }
}

