/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
export type WorkflowExecutionTerminatedEventAttributes = {
    /**
     * User/client provided reason for termination
     */
    reason?: string;
    details?: Payloads;
    /**
     * id of the client who requested termination
     */
    identity?: string;
};

