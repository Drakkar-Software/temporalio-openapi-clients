/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Header } from './Header';
import type { Payloads } from './Payloads';
import type { WorkflowExecution } from './WorkflowExecution';
export type WorkflowExecutionSignaledEventAttributes = {
    /**
     * The name/type of the signal to fire
     */
    signalName?: string;
    /**
     * Will be deserialized and provided as argument(s) to the signal handler
     */
    input?: Payloads;
    /**
     * id of the worker/client who sent this signal
     */
    identity?: string;
    /**
     * Headers that were passed by the sender of the signal and copied by temporal
     * server into the workflow task.
     */
    header?: Header;
    /**
     * Indicates the signal did not generate a new workflow task when received.
     */
    skipGenerateWorkflowTask?: boolean;
    /**
     * When signal origin is a workflow execution, this field is set.
     */
    externalWorkflowExecution?: WorkflowExecution;
};

