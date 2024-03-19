/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Header } from './Header';
import type { Payloads } from './Payloads';
/**
 * BatchOperationSignal sends signals to batch workflows.
 * Keep the parameter in sync with temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.
 */
export type BatchOperationSignal = {
    /**
     * The workflow author-defined name of the signal to send to the workflow
     */
    signal?: string;
    /**
     * Serialized value(s) to provide with the signal
     */
    input?: Payloads;
    /**
     * Headers that are passed with the signal to the processing workflow.
     * These can include things like auth or tracing tokens.
     */
    header?: Header;
    /**
     * The identity of the worker/client
     */
    identity?: string;
};

