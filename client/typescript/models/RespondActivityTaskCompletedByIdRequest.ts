/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
export type RespondActivityTaskCompletedByIdRequest = {
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
     * Id of the activity to complete
     */
    activityId?: string;
    /**
     * The serialized result of activity execution
     */
    result?: Payloads;
    /**
     * The identity of the worker/client
     */
    identity?: string;
};

