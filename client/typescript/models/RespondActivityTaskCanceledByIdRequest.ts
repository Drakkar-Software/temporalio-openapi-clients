/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
export type RespondActivityTaskCanceledByIdRequest = {
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
     * Id of the activity to confirm is cancelled
     */
    activityId?: string;
    /**
     * Serialized additional information to attach to the cancellation
     */
    details?: Payloads;
    /**
     * The identity of the worker/client
     */
    identity?: string;
};

