/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PollWorkflowTaskQueueResponse } from './PollWorkflowTaskQueueResponse';
export type StartWorkflowExecutionResponse = {
    /**
     * The run id of the workflow that was started - or used (via WorkflowIdConflictPolicy USE_EXISTING).
     */
    runId?: string;
    /**
     * If true, a new workflow was started.
     */
    started?: boolean;
    /**
     * When `request_eager_execution` is set on the `StartWorkflowExecutionRequest`, the server - if supported - will
     * return the first workflow task to be eagerly executed.
     * The caller is expected to have a worker available to process the task.
     */
    eagerWorkflowTask?: PollWorkflowTaskQueueResponse;
};

