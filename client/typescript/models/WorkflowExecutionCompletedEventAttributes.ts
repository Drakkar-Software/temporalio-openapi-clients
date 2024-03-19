/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
export type WorkflowExecutionCompletedEventAttributes = {
    /**
     * Serialized result of workflow completion (ie: The return value of the workflow function)
     */
    result?: Payloads;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
    /**
     * If another run is started by cron, this contains the new run id.
     */
    newExecutionRunId?: string;
};

