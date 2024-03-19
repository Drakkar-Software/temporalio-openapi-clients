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
export type SignalWithStartWorkflowExecutionRequest = {
    namespace?: string;
    workflowId?: string;
    workflowType?: WorkflowType;
    /**
     * The task queue to start this workflow on, if it will be started
     */
    taskQueue?: TaskQueue;
    /**
     * Serialized arguments to the workflow. These are passed as arguments to the workflow function.
     */
    input?: Payloads;
    /**
     * Total workflow execution timeout including retries and continue as new
     */
    workflowExecutionTimeout?: string;
    /**
     * Timeout of a single workflow run
     */
    workflowRunTimeout?: string;
    /**
     * Timeout of a single workflow task
     */
    workflowTaskTimeout?: string;
    /**
     * The identity of the worker/client
     */
    identity?: string;
    /**
     * Used to de-dupe signal w/ start requests
     */
    requestId?: string;
    /**
     * Defines whether to allow re-using the workflow id from a previously *closed* workflow.
     * The default policy is WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE.
     *
     * See `workflow_id_reuse_policy` for handling a workflow id duplication with a *running* workflow.
     */
    workflowIdReusePolicy?: SignalWithStartWorkflowExecutionRequest.workflowIdReusePolicy;
    /**
     * Defines how to resolve a workflow id conflict with a *running* workflow.
     * The default policy is WORKFLOW_ID_CONFLICT_POLICY_USE_EXISTING.
     * Note that WORKFLOW_ID_CONFLICT_POLICY_FAIL is an invalid option.
     *
     * See `workflow_id_reuse_policy` for handling a workflow id duplication with a *closed* workflow.
     */
    workflowIdConflictPolicy?: SignalWithStartWorkflowExecutionRequest.workflowIdConflictPolicy;
    /**
     * The workflow author-defined name of the signal to send to the workflow
     */
    signalName?: string;
    /**
     * Serialized value(s) to provide with the signal
     */
    signalInput?: Payloads;
    /**
     * Deprecated
     */
    control?: string;
    /**
     * Retry policy for the workflow
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
     * Time to wait before dispatching the first workflow task. Cannot be used with `cron_schedule`.
     * Note that the signal will be delivered with the first workflow task. If the workflow gets
     * another SignalWithStartWorkflow before the delay and `skip_generate_workflow_task` is false
     * or not set, a workflow task will be dispatched immediately and the rest of the delay period
     * will be ignored, even if that request also had a delay. Signal via SignalWorkflowExecution
     * will not unblock the workflow.
     */
    workflowStartDelay?: string;
    /**
     * Indicates that a new workflow task should not be generated when this signal is received.
     */
    skipGenerateWorkflowTask?: boolean;
    /**
     * Metadata on the workflow if it is started. This is carried over to the WorkflowExecutionInfo
     * for use by user interfaces to display the fixed as-of-start summary and details of the
     * workflow.
     */
    userMetadata?: UserMetadata;
};
export namespace SignalWithStartWorkflowExecutionRequest {
    /**
     * Defines whether to allow re-using the workflow id from a previously *closed* workflow.
     * The default policy is WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE.
     *
     * See `workflow_id_reuse_policy` for handling a workflow id duplication with a *running* workflow.
     */
    export enum workflowIdReusePolicy {
        WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED = 'WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED',
        WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE = 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE',
        WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY = 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY',
        WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE = 'WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE',
        WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING = 'WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING',
    }
    /**
     * Defines how to resolve a workflow id conflict with a *running* workflow.
     * The default policy is WORKFLOW_ID_CONFLICT_POLICY_USE_EXISTING.
     * Note that WORKFLOW_ID_CONFLICT_POLICY_FAIL is an invalid option.
     *
     * See `workflow_id_reuse_policy` for handling a workflow id duplication with a *closed* workflow.
     */
    export enum workflowIdConflictPolicy {
        WORKFLOW_ID_CONFLICT_POLICY_UNSPECIFIED = 'WORKFLOW_ID_CONFLICT_POLICY_UNSPECIFIED',
        WORKFLOW_ID_CONFLICT_POLICY_FAIL = 'WORKFLOW_ID_CONFLICT_POLICY_FAIL',
        WORKFLOW_ID_CONFLICT_POLICY_USE_EXISTING = 'WORKFLOW_ID_CONFLICT_POLICY_USE_EXISTING',
        WORKFLOW_ID_CONFLICT_POLICY_TERMINATE_EXISTING = 'WORKFLOW_ID_CONFLICT_POLICY_TERMINATE_EXISTING',
    }
}

