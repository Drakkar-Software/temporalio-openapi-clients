/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Callbacks to be delivered internally within the system.
 * This variant is not settable in the API and will be rejected by the service with an INVALID_ARGUMENT error.
 * The only reason that this is exposed is because callbacks are replicated across clusters via the
 * WorkflowExecutionStarted event, which is defined in the public API.
 */
export type Callback_Internal = {
    /**
     * Opaque internal data.
     */
    data?: string;
};

