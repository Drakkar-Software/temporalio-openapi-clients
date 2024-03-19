/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompatibleVersionSet } from './CompatibleVersionSet';
export type GetWorkerBuildIdCompatibilityResponse = {
    /**
     * Major version sets, in order from oldest to newest. The last element of the list will always
     * be the current default major version. IE: New workflows will target the most recent version
     * in that version set.
     *
     * There may be fewer sets returned than exist, if the request chose to limit this response.
     */
    majorVersionSets?: Array<CompatibleVersionSet>;
};

