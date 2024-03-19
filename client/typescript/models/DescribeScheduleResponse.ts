/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Memo } from './Memo';
import type { Schedule } from './Schedule';
import type { ScheduleInfo } from './ScheduleInfo';
import type { SearchAttributes } from './SearchAttributes';
export type DescribeScheduleResponse = {
    /**
     * The complete current schedule details. This may not match the schedule as
     * created because:
     * - some types of schedule specs may get compiled into others (e.g.
     * CronString into StructuredCalendarSpec)
     * - some unspecified fields may be replaced by defaults
     * - some fields in the state are modified automatically
     * - the schedule may have been modified by UpdateSchedule or PatchSchedule
     */
    schedule?: Schedule;
    /**
     * Extra schedule state info.
     */
    info?: ScheduleInfo;
    /**
     * The memo and search attributes that the schedule was created with.
     */
    memo?: Memo;
    searchAttributes?: SearchAttributes;
    /**
     * This value can be passed back to UpdateSchedule to ensure that the
     * schedule was not modified between a Describe and an Update, which could
     * lead to lost updates and other confusion.
     */
    conflictToken?: string;
};

