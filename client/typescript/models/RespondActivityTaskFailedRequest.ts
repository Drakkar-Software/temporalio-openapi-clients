/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
import type { Payloads } from './Payloads';
import type { WorkerVersionStamp } from './WorkerVersionStamp';
export type RespondActivityTaskFailedRequest = {
    /**
     * The task token as received in `PollActivityTaskQueueResponse`
     */
    taskToken?: string;
    /**
     * Detailed failure information
     */
    failure?: Failure;
    /**
     * The identity of the worker/client
     */
    identity?: string;
    namespace?: string;
    /**
     * Additional details to be stored as last activity heartbeat
     */
    lastHeartbeatDetails?: Payloads;
    /**
     * Version info of the worker who processed this task. This message's `build_id` field should
     * always be set by SDKs. Workers opting into versioning will also set the `use_versioning`
     * field to true. See message docstrings for more.
     */
    workerVersion?: WorkerVersionStamp;
};

