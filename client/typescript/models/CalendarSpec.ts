/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * CalendarSpec describes an event specification relative to the calendar,
 * similar to a traditional cron specification, but with labeled fields. Each
 * field can be one of:
 * *: matches always
 * x: matches when the field equals x
 * x/y : matches when the field equals x+n*y where n is an integer
 * x-z: matches when the field is between x and z inclusive
 * w,x,y,...: matches when the field is one of the listed values
 * Each x, y, z, ... is either a decimal integer, or a month or day of week name
 * or abbreviation (in the appropriate fields).
 * A timestamp matches if all fields match.
 * Note that fields have different default values, for convenience.
 * Note that the special case that some cron implementations have for treating
 * day_of_month and day_of_week as "or" instead of "and" when both are set is
 * not implemented.
 * day_of_week can accept 0 or 7 as Sunday
 * CalendarSpec gets compiled into StructuredCalendarSpec, which is what will be
 * returned if you describe the schedule.
 */
export type CalendarSpec = {
    /**
     * Expression to match seconds. Default: 0
     */
    second?: string;
    /**
     * Expression to match minutes. Default: 0
     */
    minute?: string;
    /**
     * Expression to match hours. Default: 0
     */
    hour?: string;
    /**
     * Expression to match days of the month. Default: *
     * (-- api-linter: core::0140::prepositions=disabled
     * aip.dev/not-precedent: standard name of field --)
     */
    dayOfMonth?: string;
    /**
     * Expression to match months. Default: *
     */
    month?: string;
    /**
     * Expression to match years. Default: *
     */
    year?: string;
    /**
     * Expression to match days of the week. Default: *
     */
    dayOfWeek?: string;
    /**
     * Free-form comment describing the intention of this spec.
     */
    comment?: string;
};

