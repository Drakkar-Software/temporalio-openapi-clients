/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
export type RecordActivityTaskHeartbeatByIdRequest = {
    /**
     * Namespace of the workflow which scheduled this activity
     */
    namespace?: string;
    /**
     * Id of the workflow which scheduled this activity
     */
    workflowId?: string;
    /**
     * Run Id of the workflow which scheduled this activity
     */
    runId?: string;
    /**
     * Id of the activity we're heartbeating
     */
    activityId?: string;
    /**
     * Arbitrary data, of which the most recent call is kept, to store for this activity
     */
    details?: Payloads;
    /**
     * The identity of the worker/client
     */
    identity?: string;
};

