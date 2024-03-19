/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SignalWithStartWorkflowExecutionResponse = {
    /**
     * The run id of the workflow that was started - or just signaled, if it was already running.
     */
    runId?: string;
    /**
     * If true, a new workflow was started.
     */
    started?: boolean;
};

