/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NexusOperationFailureInfo = {
    /**
     * The NexusOperationScheduled event ID.
     */
    scheduledEventId?: string;
    /**
     * Endpoint name.
     */
    endpoint?: string;
    /**
     * Service name.
     */
    service?: string;
    /**
     * Operation name.
     */
    operation?: string;
    /**
     * Operation ID - may be empty if the operation completed synchronously.
     */
    operationId?: string;
};

