/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
/**
 * Nexus operation failed.
 */
export type NexusOperationFailedEventAttributes = {
    /**
     * The ID of the `NEXUS_OPERATION_SCHEDULED` event. Uniquely identifies this operation.
     */
    scheduledEventId?: string;
    /**
     * Failure details. A NexusOperationFailureInfo wrapping an ApplicationFailureInfo.
     */
    failure?: Failure;
    /**
     * The request ID allocated at schedule time.
     */
    requestId?: string;
};

