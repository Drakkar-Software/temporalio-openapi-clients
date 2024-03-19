/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
import type { WorkerVersionStamp } from './WorkerVersionStamp';
export type RespondActivityTaskCanceledRequest = {
    /**
     * The task token as received in `PollActivityTaskQueueResponse`
     */
    taskToken?: string;
    /**
     * Serialized additional information to attach to the cancellation
     */
    details?: Payloads;
    /**
     * The identity of the worker/client
     */
    identity?: string;
    namespace?: string;
    /**
     * Version info of the worker who processed this task. This message's `build_id` field should
     * always be set by SDKs. Workers opting into versioning will also set the `use_versioning`
     * field to true. See message docstrings for more.
     */
    workerVersion?: WorkerVersionStamp;
};

