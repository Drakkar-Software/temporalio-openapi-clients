/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
import type { WorkflowExecution } from './WorkflowExecution';
import type { WorkflowType } from './WorkflowType';
export type ChildWorkflowExecutionCompletedEventAttributes = {
    result?: Payloads;
    /**
     * Namespace of the child workflow.
     * SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.
     */
    namespace?: string;
    namespaceId?: string;
    workflowExecution?: WorkflowExecution;
    workflowType?: WorkflowType;
    /**
     * Id of the `START_CHILD_WORKFLOW_EXECUTION_INITIATED` event which this event corresponds to
     */
    initiatedEventId?: string;
    /**
     * Id of the `CHILD_WORKFLOW_EXECUTION_STARTED` event which this event corresponds to
     */
    startedEventId?: string;
};

