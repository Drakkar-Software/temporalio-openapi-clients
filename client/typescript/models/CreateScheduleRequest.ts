/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Memo } from './Memo';
import type { Schedule } from './Schedule';
import type { SchedulePatch } from './SchedulePatch';
import type { SearchAttributes } from './SearchAttributes';
/**
 * (-- api-linter: core::0203::optional=disabled
 * aip.dev/not-precedent: field_behavior annotation not available in our gogo fork --)
 */
export type CreateScheduleRequest = {
    /**
     * The namespace the schedule should be created in.
     */
    namespace?: string;
    /**
     * The id of the new schedule.
     */
    scheduleId?: string;
    /**
     * The schedule spec, policies, action, and initial state.
     */
    schedule?: Schedule;
    /**
     * Optional initial patch (e.g. to run the action once immediately).
     */
    initialPatch?: SchedulePatch;
    /**
     * The identity of the client who initiated this request.
     */
    identity?: string;
    /**
     * A unique identifier for this create request for idempotence. Typically UUIDv4.
     */
    requestId?: string;
    /**
     * Memo and search attributes to attach to the schedule itself.
     */
    memo?: Memo;
    searchAttributes?: SearchAttributes;
};

