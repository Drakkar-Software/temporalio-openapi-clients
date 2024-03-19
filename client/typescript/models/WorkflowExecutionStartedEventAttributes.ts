/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Callback } from './Callback';
import type { Failure } from './Failure';
import type { Header } from './Header';
import type { Memo } from './Memo';
import type { Payloads } from './Payloads';
import type { ResetPoints } from './ResetPoints';
import type { RetryPolicy } from './RetryPolicy';
import type { SearchAttributes } from './SearchAttributes';
import type { TaskQueue } from './TaskQueue';
import type { WorkerVersionStamp } from './WorkerVersionStamp';
import type { WorkflowExecution } from './WorkflowExecution';
import type { WorkflowType } from './WorkflowType';
/**
 * Always the first event in workflow history
 */
export type WorkflowExecutionStartedEventAttributes = {
    workflowType?: WorkflowType;
    /**
     * If this workflow is a child, the namespace our parent lives in.
     * SDKs and UI tools should use `parent_workflow_namespace` field but server must use `parent_workflow_namespace_id` only.
     */
    parentWorkflowNamespace?: string;
    parentWorkflowNamespaceId?: string;
    /**
     * Contains information about parent workflow execution that initiated the child workflow these attributes belong to.
     * If the workflow these attributes belong to is not a child workflow of any other execution, this field will not be populated.
     */
    parentWorkflowExecution?: WorkflowExecution;
    /**
     * EventID of the child execution initiated event in parent workflow
     */
    parentInitiatedEventId?: string;
    taskQueue?: TaskQueue;
    /**
     * SDK will deserialize this and provide it as arguments to the workflow function
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
     * Run id of the previous workflow which continued-as-new or retired or cron executed into this
     * workflow.
     */
    continuedExecutionRunId?: string;
    initiator?: WorkflowExecutionStartedEventAttributes.initiator;
    continuedFailure?: Failure;
    lastCompletionResult?: Payloads;
    /**
     * This is the run id when the WorkflowExecutionStarted event was written.
     * A workflow reset changes the execution run_id, but preserves this field.
     */
    originalExecutionRunId?: string;
    /**
     * Identity of the client who requested this execution
     */
    identity?: string;
    /**
     * This is the very first runId along the chain of ContinueAsNew, Retry, Cron and Reset.
     * Used to identify a chain.
     */
    firstExecutionRunId?: string;
    retryPolicy?: RetryPolicy;
    /**
     * Starting at 1, the number of times we have tried to execute this workflow
     */
    attempt?: number;
    /**
     * The absolute time at which the workflow will be timed out.
     * This is passed without change to the next run/retry of a workflow.
     */
    workflowExecutionExpirationTime?: string;
    /**
     * If this workflow runs on a cron schedule, it will appear here
     */
    cronSchedule?: string;
    /**
     * For a cron workflow, this contains the amount of time between when this iteration of
     * the cron workflow was scheduled and when it should run next per its cron_schedule.
     */
    firstWorkflowTaskBackoff?: string;
    memo?: Memo;
    searchAttributes?: SearchAttributes;
    prevAutoResetPoints?: ResetPoints;
    header?: Header;
    /**
     * Version of the child execution initiated event in parent workflow
     * It should be used together with parent_initiated_event_id to identify
     * a child initiated event for global namespace
     */
    parentInitiatedEventVersion?: string;
    /**
     * This field is new in 1.21.
     */
    workflowId?: string;
    /**
     * If this workflow intends to use anything other than the current overall default version for
     * the queue, then we include it here.
     * Deprecated. use `inherited_build_id` instead
     */
    sourceVersionStamp?: WorkerVersionStamp;
    /**
     * Completion callbacks attached when this workflow was started.
     */
    completionCallbacks?: Array<Callback>;
    /**
     * Contains information about the root workflow execution.
     * The root workflow execution is defined as follows:
     * 1. A workflow without parent workflow is its own root workflow.
     * 2. A workflow that has a parent workflow has the same root workflow as its parent workflow.
     * Note: workflows continued as new or reseted may or may not have parents, check examples below.
     *
     * Examples:
     * Scenario 1: Workflow W1 starts child workflow W2, and W2 starts child workflow W3.
     * - The root workflow of all three workflows is W1.
     * Scenario 2: Workflow W1 starts child workflow W2, and W2 continued as new W3.
     * - The root workflow of all three workflows is W1.
     * Scenario 3: Workflow W1 continued as new W2.
     * - The root workflow of W1 is W1 and the root workflow of W2 is W2.
     * Scenario 4: Workflow W1 starts child workflow W2, and W2 is reseted, creating W3
     * - The root workflow of all three workflows is W1.
     * Scenario 5: Workflow W1 is reseted, creating W2.
     * - The root workflow of W1 is W1 and the root workflow of W2 is W2.
     */
    rootWorkflowExecution?: WorkflowExecution;
    /**
     * When present, this execution is assigned to the build ID of its parent or previous execution.
     */
    inheritedBuildId?: string;
};
export namespace WorkflowExecutionStartedEventAttributes {
    export enum initiator {
        CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED = 'CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED',
        CONTINUE_AS_NEW_INITIATOR_WORKFLOW = 'CONTINUE_AS_NEW_INITIATOR_WORKFLOW',
        CONTINUE_AS_NEW_INITIATOR_RETRY = 'CONTINUE_AS_NEW_INITIATOR_RETRY',
        CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE = 'CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE',
    }
}

