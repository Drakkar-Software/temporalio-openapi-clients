/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Event marking an asynchronous operation was started by the responding Nexus handler.
 * If the operation completes synchronously, this event is not generated.
 * In rare situations, such as request timeouts, the service may fail to record the actual start time and will fabricate
 * this event upon receiving the operation completion via callback.
 */
export type NexusOperationStartedEventAttributes = {
    /**
     * The ID of the `NEXUS_OPERATION_SCHEDULED` event this task corresponds to.
     */
    scheduledEventId?: string;
    /**
     * The operation ID returned by the Nexus handler in the response to the StartOperation request.
     * This ID is used when canceling the operation.
     */
    operationId?: string;
    /**
     * The request ID allocated at schedule time.
     */
    requestId?: string;
};

