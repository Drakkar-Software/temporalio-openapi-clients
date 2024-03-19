/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Range represents a set of integer values, used to match fields of a calendar
 * time in StructuredCalendarSpec. If end < start, then end is interpreted as
 * equal to start. This means you can use a Range with start set to a value, and
 * end and step unset (defaulting to 0) to represent a single value.
 */
export type Range = {
    /**
     * Start of range (inclusive).
     */
    start?: number;
    /**
     * End of range (inclusive).
     */
    end?: number;
    /**
     * Step (optional, default 1).
     */
    step?: number;
};

