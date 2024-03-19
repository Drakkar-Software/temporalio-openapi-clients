/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payload } from './Payload';
/**
 * Nexus operation completed successfully.
 */
export type NexusOperationCompletedEventAttributes = {
    /**
     * The ID of the `NEXUS_OPERATION_SCHEDULED` event. Uniquely identifies this operation.
     */
    scheduledEventId?: string;
    /**
     * Serialized result of the Nexus operation. The response of the Nexus handler.
     * Delivered either via a completion callback or as a response to a synchronous operation.
     */
    result?: Payload;
    /**
     * The request ID allocated at schedule time.
     */
    requestId?: string;
};

