/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BackfillRequest } from './BackfillRequest';
import type { TriggerImmediatelyRequest } from './TriggerImmediatelyRequest';
export type SchedulePatch = {
    /**
     * If set, trigger one action immediately.
     */
    triggerImmediately?: TriggerImmediatelyRequest;
    /**
     * If set, runs though the specified time period(s) and takes actions as if that time
     * passed by right now, all at once. The overlap policy can be overridden for the
     * scope of the backfill.
     */
    backfillRequest?: Array<BackfillRequest>;
    /**
     * If set, change the state to paused or unpaused (respectively) and set the
     * notes field to the value of the string.
     */
    pause?: string;
    unpause?: string;
};

