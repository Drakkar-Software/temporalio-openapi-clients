/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Header } from './Header';
import type { Payloads } from './Payloads';
import type { WorkflowExecution } from './WorkflowExecution';
export type SignalWorkflowExecutionRequest = {
    namespace?: string;
    workflowExecution?: WorkflowExecution;
    /**
     * The workflow author-defined name of the signal to send to the workflow
     */
    signalName?: string;
    /**
     * Serialized value(s) to provide with the signal
     */
    input?: Payloads;
    /**
     * The identity of the worker/client
     */
    identity?: string;
    /**
     * Used to de-dupe sent signals
     */
    requestId?: string;
    /**
     * Deprecated
     */
    control?: string;
    /**
     * Headers that are passed with the signal to the processing workflow.
     * These can include things like auth or tracing tokens.
     */
    header?: Header;
    /**
     * Indicates that a new workflow task should not be generated when this signal is received.
     */
    skipGenerateWorkflowTask?: boolean;
};

