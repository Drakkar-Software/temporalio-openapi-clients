/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Identifies the version(s) of a worker that processed a task
 */
export type WorkerVersionStamp = {
    /**
     * An opaque whole-worker identifier. Replaces the deprecated `binary_checksum` field when this
     * message is included in requests which previously used that.
     */
    buildId?: string;
    /**
     * If set, the worker is opting in to worker versioning. Otherwise, this is used only as a
     * marker for workflow reset points and the BuildIDs search attribute.
     */
    useVersioning?: boolean;
};

