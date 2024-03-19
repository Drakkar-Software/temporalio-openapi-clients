/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecution } from './WorkflowExecution';
export type ExternalWorkflowExecutionCancelRequestedEventAttributes = {
    /**
     * id of the `REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED` event this event corresponds
     * to
     */
    initiatedEventId?: string;
    /**
     * Namespace of the to-be-cancelled workflow.
     * SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.
     */
    namespace?: string;
    namespaceId?: string;
    workflowExecution?: WorkflowExecution;
};

