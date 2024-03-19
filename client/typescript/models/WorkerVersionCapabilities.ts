/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Identifies the version(s) that a worker is compatible with when polling or identifying itself,
 * and whether or not this worker is opting into the build-id based versioning feature. This is
 * used by matching to determine which workers ought to receive what tasks.
 */
export type WorkerVersionCapabilities = {
    /**
     * An opaque whole-worker identifier
     */
    buildId?: string;
    /**
     * If set, the worker is opting in to worker versioning, and wishes to only receive appropriate
     * tasks.
     */
    useVersioning?: boolean;
};

