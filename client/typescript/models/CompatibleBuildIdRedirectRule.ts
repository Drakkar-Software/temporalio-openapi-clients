/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * These rules apply to tasks assigned to a particular Build ID
 * (`source_build_id`) to redirect them to another *compatible* Build ID
 * (`target_build_id`).
 *
 * It is user's responsibility to ensure that the target Build ID is compatible
 * with the source Build ID (e.g. by using the Patching API).
 *
 * Most deployments are not expected to need these rules, however following
 * situations can greatly benefit from redirects:
 * - Need to move long-running Workflow Executions from an old Build ID to a
 * newer one.
 * - Need to hotfix some broken or stuck Workflow Executions.
 *
 * In steady state, redirect rules are beneficial when dealing with old
 * Executions ran on now-decommissioned Build IDs:
 * - To redirecting the Workflow Queries to the current (compatible) Build ID.
 * - To be able to Reset an old Execution so it can run on the current
 * (compatible) Build ID.
 *
 * Redirect rules can be chained.
 */
export type CompatibleBuildIdRedirectRule = {
    sourceBuildId?: string;
    /**
     * Target Build ID must be compatible with the Source Build ID; that is it
     * must be able to process event histories made by the Source Build ID by
     * using [Patching](https://docs.temporal.io/workflows#patching) or other
     * means.
     */
    targetBuildId?: string;
};

