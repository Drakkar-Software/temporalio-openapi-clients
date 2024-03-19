/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
export type RecordActivityTaskHeartbeatRequest = {
    /**
     * The task token as received in `PollActivityTaskQueueResponse`
     */
    taskToken?: string;
    /**
     * Arbitrary data, of which the most recent call is kept, to store for this activity
     */
    details?: Payloads;
    /**
     * The identity of the worker/client
     */
    identity?: string;
    namespace?: string;
};

