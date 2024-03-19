/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Schedule } from './Schedule';
import type { SearchAttributes } from './SearchAttributes';
export type UpdateScheduleRequest = {
    /**
     * The namespace of the schedule to update.
     */
    namespace?: string;
    /**
     * The id of the schedule to update.
     */
    scheduleId?: string;
    /**
     * The new schedule. The four main fields of the schedule (spec, action,
     * policies, state) are replaced completely by the values in this message.
     */
    schedule?: Schedule;
    /**
     * This can be the value of conflict_token from a DescribeScheduleResponse,
     * which will cause this request to fail if the schedule has been modified
     * between the Describe and this Update.
     * If missing, the schedule will be updated unconditionally.
     */
    conflictToken?: string;
    /**
     * The identity of the client who initiated this request.
     */
    identity?: string;
    /**
     * A unique identifier for this update request for idempotence. Typically UUIDv4.
     */
    requestId?: string;
    /**
     * Schedule search attributes to be updated.
     * Do not set this field if you do not want to update the search attributes.
     * A non-null empty object will set the search attributes to an empty map.
     * Note: you cannot only update the search attributes with `UpdateScheduleRequest`,
     * you must also set the `schedule` field; otherwise, it will unset the schedule.
     */
    searchAttributes?: SearchAttributes;
};

