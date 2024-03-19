/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Range } from './Range';
/**
 * StructuredCalendarSpec describes an event specification relative to the
 * calendar, in a form that's easy to work with programmatically. Each field can
 * be one or more ranges.
 * A timestamp matches if at least one range of each field matches the
 * corresponding fields of the timestamp, except for year: if year is missing,
 * that means all years match. For all fields besides year, at least one Range
 * must be present to match anything.
 * TODO: add relative-to-end-of-month
 * TODO: add nth day-of-week in month
 */
export type StructuredCalendarSpec = {
    /**
     * Match seconds (0-59)
     */
    second?: Array<Range>;
    /**
     * Match minutes (0-59)
     */
    minute?: Array<Range>;
    /**
     * Match hours (0-23)
     */
    hour?: Array<Range>;
    /**
     * Match days of the month (1-31)
     * (-- api-linter: core::0140::prepositions=disabled
     * aip.dev/not-precedent: standard name of field --)
     */
    dayOfMonth?: Array<Range>;
    /**
     * Match months (1-12)
     */
    month?: Array<Range>;
    /**
     * Match years.
     */
    year?: Array<Range>;
    /**
     * Match days of the week (0-6; 0 is Sunday).
     */
    dayOfWeek?: Array<Range>;
    /**
     * Free-form comment describing the intention of this spec.
     */
    comment?: string;
};

