/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecution } from './WorkflowExecution';
export type ExternalWorkflowExecutionSignaledEventAttributes = {
    /**
     * id of the `SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED` event this event corresponds to
     */
    initiatedEventId?: string;
    /**
     * Namespace of the workflow which was signaled.
     * SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.
     */
    namespace?: string;
    namespaceId?: string;
    workflowExecution?: WorkflowExecution;
    /**
     * Deprecated
     */
    control?: string;
};

