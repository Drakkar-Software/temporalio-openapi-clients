/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BackfillRequest = {
    /**
     * Time range to evaluate schedule in. Currently, this time range is
     * exclusive on start_time and inclusive on end_time. (This is admittedly
     * counterintuitive and it may change in the future, so to be safe, use a
     * start time strictly before a scheduled time.) Also note that an action
     * nominally scheduled in the interval but with jitter that pushes it after
     * end_time will not be included.
     */
    startTime?: string;
    endTime?: string;
    /**
     * If set, override overlap policy for this request.
     */
    overlapPolicy?: BackfillRequest.overlapPolicy;
};
export namespace BackfillRequest {
    /**
     * If set, override overlap policy for this request.
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

