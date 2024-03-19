/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payload } from './Payload';
/**
 * Event marking that an operation was scheduled by a workflow via the ScheduleNexusOperation command.
 */
export type NexusOperationScheduledEventAttributes = {
    /**
     * Endpoint name, must exist in the endpoint registry.
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
     * Input for the operation. The server converts this into Nexus request content and the appropriate content headers
     * internally when sending the StartOperation request. On the handler side, if it is also backed by Temporal, the
     * content is transformed back to the original Payload stored in this event.
     */
    input?: Payload;
    /**
     * Schedule-to-close timeout for this operation.
     * Indicates how long the caller is willing to wait for operation completion.
     * Calls are retried internally by the server.
     * (-- api-linter: core::0140::prepositions=disabled
     * aip.dev/not-precedent: "to" is used to indicate interval. --)
     */
    scheduleToCloseTimeout?: string;
    /**
     * Header to attach to the Nexus request. Note these headers are not the same as Temporal headers on internal
     * activities and child workflows, these are transmitted to Nexus operations that may be external and are not
     * traditional payloads.
     */
    nexusHeader?: Record<string, string>;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event that the corresponding ScheduleNexusOperation command was reported with.
     */
    workflowTaskCompletedEventId?: string;
    /**
     * A unique ID generated by the history service upon creation of this event.
     * The ID will be transmitted with all nexus StartOperation requests and is used as an idempotentency key.
     */
    requestId?: string;
    /**
     * Endpoint ID as resolved in the endpoint registry at the time this event was generated.
     * This is stored on the event and used internally by the server in case the endpoint is renamed from the time the
     * event was originally scheduled.
     */
    endpointId?: string;
};

