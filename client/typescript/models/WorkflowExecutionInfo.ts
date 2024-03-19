/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Memo } from './Memo';
import type { ResetPoints } from './ResetPoints';
import type { SearchAttributes } from './SearchAttributes';
import type { WorkerVersionStamp } from './WorkerVersionStamp';
import type { WorkflowExecution } from './WorkflowExecution';
import type { WorkflowType } from './WorkflowType';
export type WorkflowExecutionInfo = {
    execution?: WorkflowExecution;
    type?: WorkflowType;
    startTime?: string;
    closeTime?: string;
    status?: WorkflowExecutionInfo.status;
    historyLength?: string;
    parentNamespaceId?: string;
    parentExecution?: WorkflowExecution;
    executionTime?: string;
    memo?: Memo;
    searchAttributes?: SearchAttributes;
    autoResetPoints?: ResetPoints;
    taskQueue?: string;
    stateTransitionCount?: string;
    historySizeBytes?: string;
    /**
     * If set, the most recent worker version stamp that appeared in a workflow task completion
     */
    mostRecentWorkerVersionStamp?: WorkerVersionStamp;
    /**
     * Workflow execution duration is defined as difference between close time and execution time.
     * This field is only populated if the workflow is closed.
     */
    executionDuration?: string;
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
    rootExecution?: WorkflowExecution;
    /**
     * The currently assigned build ID for this execution. Presence of this value means worker versioning is used
     * for this execution. Assigned build ID is selected based on Worker Versioning Assignment Rules
     * when the first workflow task of the execution is scheduled. If the first workflow task fails and is scheduled
     * again, the assigned build ID may change according to the latest versioning rules.
     * Assigned build ID can also change in the middle of a execution if Compatible Redirect Rules are applied to
     * this execution.
     */
    assignedBuildId?: string;
    /**
     * Build ID inherited from a previous/parent execution. If present, assigned_build_id will be set to this, instead
     * of using the assignment rules.
     */
    inheritedBuildId?: string;
    /**
     * The first run ID in the execution chain.
     * Executions created via the following operations are considered to be in the same chain
     * - ContinueAsNew
     * - Workflow Retry
     * - Workflow Reset
     * - Cron Schedule
     */
    firstRunId?: string;
};
export namespace WorkflowExecutionInfo {
    export enum status {
        WORKFLOW_EXECUTION_STATUS_UNSPECIFIED = 'WORKFLOW_EXECUTION_STATUS_UNSPECIFIED',
        WORKFLOW_EXECUTION_STATUS_RUNNING = 'WORKFLOW_EXECUTION_STATUS_RUNNING',
        WORKFLOW_EXECUTION_STATUS_COMPLETED = 'WORKFLOW_EXECUTION_STATUS_COMPLETED',
        WORKFLOW_EXECUTION_STATUS_FAILED = 'WORKFLOW_EXECUTION_STATUS_FAILED',
        WORKFLOW_EXECUTION_STATUS_CANCELED = 'WORKFLOW_EXECUTION_STATUS_CANCELED',
        WORKFLOW_EXECUTION_STATUS_TERMINATED = 'WORKFLOW_EXECUTION_STATUS_TERMINATED',
        WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW = 'WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW',
        WORKFLOW_EXECUTION_STATUS_TIMED_OUT = 'WORKFLOW_EXECUTION_STATUS_TIMED_OUT',
    }
}

