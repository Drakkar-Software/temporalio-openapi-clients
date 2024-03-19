/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
import type { Header } from './Header';
import type { Memo } from './Memo';
import type { Payloads } from './Payloads';
import type { SearchAttributes } from './SearchAttributes';
import type { TaskQueue } from './TaskQueue';
import type { WorkflowType } from './WorkflowType';
export type WorkflowExecutionContinuedAsNewEventAttributes = {
    /**
     * The run ID of the new workflow started by this continue-as-new
     */
    newExecutionRunId?: string;
    workflowType?: WorkflowType;
    taskQueue?: TaskQueue;
    input?: Payloads;
    /**
     * Timeout of a single workflow run.
     */
    workflowRunTimeout?: string;
    /**
     * Timeout of a single workflow task.
     */
    workflowTaskTimeout?: string;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
    /**
     * TODO: How and is this used?
     */
    backoffStartInterval?: string;
    initiator?: WorkflowExecutionContinuedAsNewEventAttributes.initiator;
    /**
     * TODO: David are these right?
     * Deprecated. If a workflow's retry policy would cause a new run to start when the current one
     * has failed, this field would be populated with that failure. Now (when supported by server
     * and sdk) the final event will be `WORKFLOW_EXECUTION_FAILED` with `new_execution_run_id` set.
     */
    failure?: Failure;
    /**
     * TODO: Is this the result of *this* workflow as it continued-as-new?
     */
    lastCompletionResult?: Payloads;
    header?: Header;
    memo?: Memo;
    searchAttributes?: SearchAttributes;
    /**
     * If this is set, the new execution inherits the Build ID of the current execution. Otherwise,
     * the assignment rules will be used to independently assign a Build ID to the new execution.
     */
    inheritBuildId?: boolean;
};
export namespace WorkflowExecutionContinuedAsNewEventAttributes {
    export enum initiator {
        CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED = 'CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED',
        CONTINUE_AS_NEW_INITIATOR_WORKFLOW = 'CONTINUE_AS_NEW_INITIATOR_WORKFLOW',
        CONTINUE_AS_NEW_INITIATOR_RETRY = 'CONTINUE_AS_NEW_INITIATOR_RETRY',
        CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE = 'CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE',
    }
}

