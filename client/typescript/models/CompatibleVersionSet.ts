/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Used by the worker versioning APIs, represents an unordered set of one or more versions which are
 * considered to be compatible with each other. Currently the versions are always worker build IDs.
 */
export type CompatibleVersionSet = {
    /**
     * All the compatible versions, unordered, except for the last element, which is considered the set "default".
     */
    buildIds?: Array<string>;
};

