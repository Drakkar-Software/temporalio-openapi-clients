/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Callback } from './Callback';
import type { Failure } from './Failure';
import type { Header } from './Header';
import type { Link } from './Link';
import type { Memo } from './Memo';
import type { Payloads } from './Payloads';
import type { RetryPolicy } from './RetryPolicy';
import type { SearchAttributes } from './SearchAttributes';
import type { TaskQueue } from './TaskQueue';
import type { UserMetadata } from './UserMetadata';
import type { WorkflowType } from './WorkflowType';
export type StartWorkflowExecutionRequest = {
    namespace?: string;
    workflowId?: string;
    workflowType?: WorkflowType;
    taskQueue?: TaskQueue;
    /**
     * Serialized arguments to the workflow. These are passed as arguments to the workflow function.
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
     * The identity of the client who initiated this request
     */
    identity?: string;
    /**
     * A unique identifier for this start request. Typically UUIDv4.
     */
    requestId?: string;
    /**
     * Defines whether to allow re-using the workflow id from a previously *closed* workflow.
     * The default policy is WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE.
     *
     * See `workflow_id_conflict_policy` for handling a workflow id duplication with a *running* workflow.
     */
    workflowIdReusePolicy?: StartWorkflowExecutionRequest.workflowIdReusePolicy;
    /**
     * Defines how to resolve a workflow id conflict with a *running* workflow.
     * The default policy is WORKFLOW_ID_CONFLICT_POLICY_FAIL.
     *
     * See `workflow_id_reuse_policy` for handling a workflow id duplication with a *closed* workflow.
     */
    workflowIdConflictPolicy?: StartWorkflowExecutionRequest.workflowIdConflictPolicy;
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
     * Request to get the first workflow task inline in the response bypassing matching service and worker polling.
     * If set to `true` the caller is expected to have a worker available and capable of processing the task.
     * The returned task will be marked as started and is expected to be completed by the specified
     * `workflow_task_timeout`.
     */
    requestEagerExecution?: boolean;
    /**
     * These values will be available as ContinuedFailure and LastCompletionResult in the
     * WorkflowExecutionStarted event and through SDKs. The are currently only used by the
     * server itself (for the schedules feature) and are not intended to be exposed in
     * StartWorkflowExecution.
     */
    continuedFailure?: Failure;
    lastCompletionResult?: Payloads;
    /**
     * Time to wait before dispatching the first workflow task. Cannot be used with `cron_schedule`.
     * If the workflow gets a signal before the delay, a workflow task will be dispatched and the rest
     * of the delay will be ignored.
     */
    workflowStartDelay?: string;
    /**
     * Callbacks to be called by the server when this workflow reaches a terminal state.
     * If the workflow continues-as-new, these callbacks will be carried over to the new execution.
     * Callback addresses must be whitelisted in the server's dynamic configuration.
     */
    completionCallbacks?: Array<Callback>;
    /**
     * Metadata on the workflow if it is started. This is carried over to the WorkflowExecutionInfo
     * for use by user interfaces to display the fixed as-of-start summary and details of the
     * workflow.
     */
    userMetadata?: UserMetadata;
    /**
     * Links to be associated with the workflow.
     */
    links?: Array<Link>;
};
export namespace StartWorkflowExecutionRequest {
    /**
     * Defines whether to allow re-using the workflow id from a previously *closed* workflow.
     * The default policy is WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE.
     *
     * See `workflow_id_conflict_policy` for handling a workflow id duplication with a *running* workflow.
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
     * The default policy is WORKFLOW_ID_CONFLICT_POLICY_FAIL.
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

