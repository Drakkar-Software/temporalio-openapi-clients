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
import type { WorkflowType } from './WorkflowType';
export type StartChildWorkflowExecutionInitiatedEventAttributes = {
    /**
     * Namespace of the child workflow.
     * SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.
     */
    namespace?: string;
    namespaceId?: string;
    workflowId?: string;
    workflowType?: WorkflowType;
    taskQueue?: TaskQueue;
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
     * Default: PARENT_CLOSE_POLICY_TERMINATE.
     */
    parentClosePolicy?: StartChildWorkflowExecutionInitiatedEventAttributes.parentClosePolicy;
    /**
     * Deprecated
     */
    control?: string;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
    /**
     * Default: WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE.
     */
    workflowIdReusePolicy?: StartChildWorkflowExecutionInitiatedEventAttributes.workflowIdReusePolicy;
    retryPolicy?: RetryPolicy;
    /**
     * If this child runs on a cron schedule, it will appear here
     */
    cronSchedule?: string;
    header?: Header;
    memo?: Memo;
    searchAttributes?: SearchAttributes;
    /**
     * If this is set, the child workflow inherits the Build ID of the parent. Otherwise, the assignment
     * rules of the child's Task Queue will be used to independently assign a Build ID to it.
     */
    inheritBuildId?: boolean;
};
export namespace StartChildWorkflowExecutionInitiatedEventAttributes {
    /**
     * Default: PARENT_CLOSE_POLICY_TERMINATE.
     */
    export enum parentClosePolicy {
        PARENT_CLOSE_POLICY_UNSPECIFIED = 'PARENT_CLOSE_POLICY_UNSPECIFIED',
        PARENT_CLOSE_POLICY_TERMINATE = 'PARENT_CLOSE_POLICY_TERMINATE',
        PARENT_CLOSE_POLICY_ABANDON = 'PARENT_CLOSE_POLICY_ABANDON',
        PARENT_CLOSE_POLICY_REQUEST_CANCEL = 'PARENT_CLOSE_POLICY_REQUEST_CANCEL',
    }
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

