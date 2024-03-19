/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MeteringMetadata } from './MeteringMetadata';
import type { WorkerVersionStamp } from './WorkerVersionStamp';
import type { WorkflowTaskCompletedMetadata } from './WorkflowTaskCompletedMetadata';
export type WorkflowTaskCompletedEventAttributes = {
    /**
     * The id of the `WORKFLOW_TASK_SCHEDULED` event this task corresponds to
     */
    scheduledEventId?: string;
    /**
     * The id of the `WORKFLOW_TASK_STARTED` event this task corresponds to
     */
    startedEventId?: string;
    /**
     * Identity of the worker who completed this task
     */
    identity?: string;
    /**
     * Binary ID of the worker who completed this task
     */
    binaryChecksum?: string;
    /**
     * Version info of the worker who processed this workflow task. If present, the `build_id` field
     * within is also used as `binary_checksum`, which may be omitted in that case (it may also be
     * populated to preserve compatibility).
     * Deprecated. Use the info inside the corresponding WorkflowTaskStartedEvent
     */
    workerVersion?: WorkerVersionStamp;
    /**
     * Data the SDK wishes to record for itself, but server need not interpret, and does not
     * directly impact workflow state.
     */
    sdkMetadata?: WorkflowTaskCompletedMetadata;
    /**
     * Local usage data sent during workflow task completion and recorded here for posterity
     */
    meteringMetadata?: MeteringMetadata;
};

