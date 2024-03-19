/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ResetPointInfo records the workflow event id that is the first one processed by a given
 * build id or binary checksum. A new reset point will be created if either build id or binary
 * checksum changes (although in general only one or the other will be used at a time).
 */
export type ResetPointInfo = {
    /**
     * Worker build id.
     */
    buildId?: string;
    /**
     * A worker binary version identifier (deprecated).
     */
    binaryChecksum?: string;
    /**
     * The first run ID in the execution chain that was touched by this worker build.
     */
    runId?: string;
    /**
     * Event ID of the first WorkflowTaskCompleted event processed by this worker build.
     */
    firstWorkflowTaskCompletedId?: string;
    createTime?: string;
    /**
     * (-- api-linter: core::0214::resource-expiry=disabled
     * aip.dev/not-precedent: TTL is not defined for ResetPointInfo. --)
     * The time that the run is deleted due to retention.
     */
    expireTime?: string;
    /**
     * false if the reset point has pending childWFs/reqCancels/signalExternals.
     */
    resettable?: boolean;
};

