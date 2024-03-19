/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
/**
 * Nexus operation completed as canceled. May or may not have been due to a cancellation request by the workflow.
 */
export type NexusOperationCanceledEventAttributes = {
    /**
     * The ID of the `NEXUS_OPERATION_SCHEDULED` event. Uniquely identifies this operation.
     */
    scheduledEventId?: string;
    /**
     * Cancellation details.
     */
    failure?: Failure;
    /**
     * The request ID allocated at schedule time.
     */
    requestId?: string;
};

