/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * System capability details.
 */
export type GetSystemInfoResponse_Capabilities = {
    /**
     * True if signal and query headers are supported.
     */
    signalAndQueryHeader?: boolean;
    /**
     * True if internal errors are differentiated from other types of errors for purposes of
     * retrying non-internal errors.
     *
     * When unset/false, clients retry all failures. When true, clients should only retry
     * non-internal errors.
     */
    internalErrorDifferentiation?: boolean;
    /**
     * True if RespondActivityTaskFailed API supports including heartbeat details
     */
    activityFailureIncludeHeartbeat?: boolean;
    /**
     * Supports scheduled workflow features.
     */
    supportsSchedules?: boolean;
    /**
     * True if server uses protos that include temporal.api.failure.v1.Failure.encoded_attributes
     */
    encodedFailureAttributes?: boolean;
    /**
     * True if server supports dispatching Workflow and Activity tasks based on a worker's build_id
     * (see:
     * https://github.com/temporalio/proposals/blob/a123af3b559f43db16ea6dd31870bfb754c4dc5e/versioning/worker-versions.md)
     */
    buildIdBasedVersioning?: boolean;
    /**
     * True if server supports upserting workflow memo
     */
    upsertMemo?: boolean;
    /**
     * True if server supports eager workflow task dispatching for the StartWorkflowExecution API
     */
    eagerWorkflowStart?: boolean;
    /**
     * True if the server knows about the sdk metadata field on WFT completions and will record
     * it in history
     */
    sdkMetadata?: boolean;
    /**
     * True if the server supports count group by execution status
     */
    countGroupByExecutionStatus?: boolean;
    /**
     * True if the server supports Nexus operations.
     * This flag is dependent both on server version and for Nexus to be enabled via server configuration.
     */
    nexus?: boolean;
};

