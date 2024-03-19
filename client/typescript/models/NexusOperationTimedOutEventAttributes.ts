/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
/**
 * Nexus operation timed out.
 */
export type NexusOperationTimedOutEventAttributes = {
    /**
     * The ID of the `NEXUS_OPERATION_SCHEDULED` event. Uniquely identifies this operation.
     */
    scheduledEventId?: string;
    /**
     * Failure details. A NexusOperationFailureInfo wrapping a CanceledFailureInfo.
     */
    failure?: Failure;
    /**
     * The request ID allocated at schedule time.
     */
    requestId?: string;
};

