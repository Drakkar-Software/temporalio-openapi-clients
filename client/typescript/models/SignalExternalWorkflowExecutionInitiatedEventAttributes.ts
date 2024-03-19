/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Header } from './Header';
import type { Payloads } from './Payloads';
import type { WorkflowExecution } from './WorkflowExecution';
export type SignalExternalWorkflowExecutionInitiatedEventAttributes = {
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
    /**
     * Namespace of the to-be-signalled workflow.
     * SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.
     */
    namespace?: string;
    namespaceId?: string;
    workflowExecution?: WorkflowExecution;
    /**
     * name/type of the signal to fire in the external workflow
     */
    signalName?: string;
    /**
     * Serialized arguments to provide to the signal handler
     */
    input?: Payloads;
    /**
     * Deprecated
     */
    control?: string;
    /**
     * Workers are expected to set this to true if the workflow they are requesting to cancel is
     * a child of the workflow which issued the request
     */
    childWorkflowOnly?: boolean;
    header?: Header;
};

