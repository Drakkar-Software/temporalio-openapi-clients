/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Memo } from './Memo';
export type WorkflowPropertiesModifiedExternallyEventAttributes = {
    /**
     * If set to a nonempty string, future workflow tasks for this workflow shall be dispatched on
     * the provided queue.
     */
    newTaskQueue?: string;
    /**
     * If set, update the workflow task timeout to this value.
     */
    newWorkflowTaskTimeout?: string;
    /**
     * If set, update the workflow run timeout to this value. May be set to 0 for no timeout.
     */
    newWorkflowRunTimeout?: string;
    /**
     * If set, update the workflow execution timeout to this value. May be set to 0 for no timeout.
     */
    newWorkflowExecutionTimeout?: string;
    /**
     * If set, update the workflow memo with the provided values. The values will be merged with
     * the existing memo. If the user wants to delete values, a default/empty Payload should be
     * used as the value for the key being deleted.
     */
    upsertedMemo?: Memo;
};

