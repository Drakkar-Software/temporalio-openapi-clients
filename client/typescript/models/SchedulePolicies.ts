/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SchedulePolicies = {
    /**
     * Policy for overlaps.
     * Note that this can be changed after a schedule has taken some actions,
     * and some changes might produce unintuitive results. In general, the later
     * policy overrides the earlier policy.
     */
    overlapPolicy?: SchedulePolicies.overlapPolicy;
    /**
     * Policy for catchups:
     * If the Temporal server misses an action due to one or more components
     * being down, and comes back up, the action will be run if the scheduled
     * time is within this window from the current time.
     * This value defaults to one year, and can't be less than 10 seconds.
     */
    catchupWindow?: string;
    /**
     * If true, and a workflow run fails or times out, turn on "paused".
     * This applies after retry policies: the full chain of retries must fail to
     * trigger a pause here.
     */
    pauseOnFailure?: boolean;
    /**
     * If true, and the action would start a workflow, a timestamp will not be
     * appended to the scheduled workflow id.
     */
    keepOriginalWorkflowId?: boolean;
};
export namespace SchedulePolicies {
    /**
     * Policy for overlaps.
     * Note that this can be changed after a schedule has taken some actions,
     * and some changes might produce unintuitive results. In general, the later
     * policy overrides the earlier policy.
     */
    export enum overlapPolicy {
        SCHEDULE_OVERLAP_POLICY_UNSPECIFIED = 'SCHEDULE_OVERLAP_POLICY_UNSPECIFIED',
        SCHEDULE_OVERLAP_POLICY_SKIP = 'SCHEDULE_OVERLAP_POLICY_SKIP',
        SCHEDULE_OVERLAP_POLICY_BUFFER_ONE = 'SCHEDULE_OVERLAP_POLICY_BUFFER_ONE',
        SCHEDULE_OVERLAP_POLICY_BUFFER_ALL = 'SCHEDULE_OVERLAP_POLICY_BUFFER_ALL',
        SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER = 'SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER',
        SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER = 'SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER',
        SCHEDULE_OVERLAP_POLICY_ALLOW_ALL = 'SCHEDULE_OVERLAP_POLICY_ALLOW_ALL',
    }
}

