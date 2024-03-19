/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Request } from './Request';
import type { WaitPolicy } from './WaitPolicy';
import type { WorkflowExecution } from './WorkflowExecution';
/**
 * (-- api-linter: core::0134=disabled
 * aip.dev/not-precedent: Update RPCs don't follow Google API format. --)
 */
export type UpdateWorkflowExecutionRequest = {
    /**
     * The namespace name of the target Workflow.
     */
    namespace?: string;
    /**
     * The target Workflow Id and (optionally) a specific Run Id thereof.
     * (-- api-linter: core::0203::optional=disabled
     * aip.dev/not-precedent: false positive triggered by the word "optional" --)
     */
    workflowExecution?: WorkflowExecution;
    /**
     * If set, this call will error if the most recent (if no Run Id is set on
     * `workflow_execution`), or specified (if it is) Workflow Execution is not
     * part of the same execution chain as this Id.
     */
    firstExecutionRunId?: string;
    /**
     * Specifies client's intent to wait for Update results.
     * NOTE: This field works together with API call timeout which is limited by
     * server timeout (maximum wait time). If server timeout is expired before
     * user specified timeout, API call returns even if specified stage is not reached.
     * Actual reached stage will be included in the response.
     */
    waitPolicy?: WaitPolicy;
    /**
     * The request information that will be delivered all the way down to the
     * Workflow Execution.
     */
    request?: Request;
};

