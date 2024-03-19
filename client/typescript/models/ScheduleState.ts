/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ScheduleState = {
    /**
     * Informative human-readable message with contextual notes, e.g. the reason
     * a schedule is paused. The system may overwrite this message on certain
     * conditions, e.g. when pause-on-failure happens.
     */
    notes?: string;
    /**
     * If true, do not take any actions based on the schedule spec.
     */
    paused?: boolean;
    /**
     * If limited_actions is true, decrement remaining_actions after each
     * action, and do not take any more scheduled actions if remaining_actions
     * is zero. Actions may still be taken by explicit request (i.e. trigger
     * immediately or backfill). Skipped actions (due to overlap policy) do not
     * count against remaining actions.
     * If a schedule has no more remaining actions, then the schedule will be
     * subject to automatic deletion (after several days).
     */
    limitedActions?: boolean;
    remainingActions?: string;
};

