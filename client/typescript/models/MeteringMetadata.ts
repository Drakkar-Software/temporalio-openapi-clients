/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Metadata relevant for metering purposes
 */
export type MeteringMetadata = {
    /**
     * Count of local activities which have begun an execution attempt during this workflow task,
     * and whose first attempt occurred in some previous task. This is used for metering
     * purposes, and does not affect workflow state.
     *
     * (-- api-linter: core::0141::forbidden-types=disabled
     * aip.dev/not-precedent: Negative values make no sense to represent. --)
     */
    nonfirstLocalActivityExecutionAttempts?: number;
};

