/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SchedulePatch } from './SchedulePatch';
export type PatchScheduleRequest = {
    /**
     * The namespace of the schedule to patch.
     */
    namespace?: string;
    /**
     * The id of the schedule to patch.
     */
    scheduleId?: string;
    patch?: SchedulePatch;
    /**
     * The identity of the client who initiated this request.
     */
    identity?: string;
    /**
     * A unique identifier for this update request for idempotence. Typically UUIDv4.
     */
    requestId?: string;
};

