/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Header } from './Header';
import type { Memo } from './Memo';
import type { Payloads } from './Payloads';
import type { RetryPolicy } from './RetryPolicy';
import type { SearchAttributes } from './SearchAttributes';
import type { TaskQueue } from './TaskQueue';
import type { UserMetadata } from './UserMetadata';
import type { WorkflowType } from './WorkflowType';
/**
 * NewWorkflowExecutionInfo is a shared message that encapsulates all the
 * required arguments to starting a workflow in different contexts.
 */
export type NewWorkflowExecutionInfo = {
    workflowId?: string;
    workflowType?: WorkflowType;
    taskQueue?: TaskQueue;
    /**
     * Serialized arguments to the workflow.
     */
    input?: Payloads;
    /**
     * Total workflow execution timeout including retries and continue as new.
     */
    workflowExecutionTimeout?: string;
    /**
     * Timeout of a single workflow run.
     */
    workflowRunTimeout?: string;
    /**
     * Timeout of a single workflow task.
     */
    workflowTaskTimeout?: string;
    /**
     * Default: WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE.
     */
    workflowIdReusePolicy?: NewWorkflowExecutionInfo.workflowIdReusePolicy;
    /**
     * The retry policy for the workflow. Will never exceed `workflow_execution_timeout`.
     */
    retryPolicy?: RetryPolicy;
    /**
     * See https://docs.temporal.io/docs/content/what-is-a-temporal-cron-job/
     */
    cronSchedule?: string;
    memo?: Memo;
    searchAttributes?: SearchAttributes;
    header?: Header;
    /**
     * Metadata on the workflow if it is started. This is carried over to the WorkflowExecutionConfig
     * for use by user interfaces to display the fixed as-of-start summary and details of the
     * workflow.
     */
    userMetadata?: UserMetadata;
};
export namespace NewWorkflowExecutionInfo {
    /**
     * Default: WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE.
     */
    export enum workflowIdReusePolicy {
        WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED = 'WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED',
        WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE = 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE',
        WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY = 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY',
        WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE = 'WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE',
        WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING = 'WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING',
    }
}

