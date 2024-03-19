/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
import type { Payloads } from './Payloads';
export type RespondActivityTaskFailedByIdRequest = {
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
     * Id of the activity to fail
     */
    activityId?: string;
    /**
     * Detailed failure information
     */
    failure?: Failure;
    /**
     * The identity of the worker/client
     */
    identity?: string;
    /**
     * Additional details to be stored as last activity heartbeat
     */
    lastHeartbeatDetails?: Payloads;
};

