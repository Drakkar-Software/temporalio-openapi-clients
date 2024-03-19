/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Request } from './Request';
export type WorkflowExecutionUpdateAcceptedEventAttributes = {
    /**
     * The instance ID of the update protocol that generated this event.
     */
    protocolInstanceId?: string;
    /**
     * The message ID of the original request message that initiated this
     * update. Needed so that the worker can recreate and deliver that same
     * message as part of replay.
     */
    acceptedRequestMessageId?: string;
    /**
     * The event ID used to sequence the original request message.
     */
    acceptedRequestSequencingEventId?: string;
    /**
     * The message payload of the original request message that initiated this
     * update.
     */
    acceptedRequest?: Request;
};

