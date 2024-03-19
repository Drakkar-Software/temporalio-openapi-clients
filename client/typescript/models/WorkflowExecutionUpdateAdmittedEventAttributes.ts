/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Request } from './Request';
export type WorkflowExecutionUpdateAdmittedEventAttributes = {
    /**
     * The update request associated with this event.
     */
    request?: Request;
    /**
     * An explanation of why this event was written to history.
     */
    origin?: WorkflowExecutionUpdateAdmittedEventAttributes.origin;
};
export namespace WorkflowExecutionUpdateAdmittedEventAttributes {
    /**
     * An explanation of why this event was written to history.
     */
    export enum origin {
        UPDATE_ADMITTED_EVENT_ORIGIN_UNSPECIFIED = 'UPDATE_ADMITTED_EVENT_ORIGIN_UNSPECIFIED',
        UPDATE_ADMITTED_EVENT_ORIGIN_REAPPLY = 'UPDATE_ADMITTED_EVENT_ORIGIN_REAPPLY',
    }
}

