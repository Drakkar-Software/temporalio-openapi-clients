/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Memo } from './Memo';
export type WorkflowPropertiesModifiedEventAttributes = {
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
    /**
     * If set, update the workflow memo with the provided values. The values will be merged with
     * the existing memo. If the user wants to delete values, a default/empty Payload should be
     * used as the value for the key being deleted.
     */
    upsertedMemo?: Memo;
};

