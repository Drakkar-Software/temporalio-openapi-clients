/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TriggerImmediatelyRequest = {
    /**
     * If set, override overlap policy for this one request.
     */
    overlapPolicy?: TriggerImmediatelyRequest.overlapPolicy;
};
export namespace TriggerImmediatelyRequest {
    /**
     * If set, override overlap policy for this one request.
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

