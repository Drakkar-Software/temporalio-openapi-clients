/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimestampedBuildIdAssignmentRule } from './TimestampedBuildIdAssignmentRule';
import type { TimestampedCompatibleBuildIdRedirectRule } from './TimestampedCompatibleBuildIdRedirectRule';
export type GetWorkerVersioningRulesResponse = {
    assignmentRules?: Array<TimestampedBuildIdAssignmentRule>;
    compatibleRedirectRules?: Array<TimestampedCompatibleBuildIdRedirectRule>;
    /**
     * This value can be passed back to UpdateWorkerVersioningRulesRequest to
     * ensure that the rules were not modified between this List and the Update,
     * which could lead to lost updates and other confusion.
     */
    conflictToken?: string;
};

