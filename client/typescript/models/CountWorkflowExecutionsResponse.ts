/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountWorkflowExecutionsResponse_AggregationGroup } from './CountWorkflowExecutionsResponse_AggregationGroup';
export type CountWorkflowExecutionsResponse = {
    /**
     * If `query` is not grouping by any field, the count is an approximate number
     * of workflows that matches the query.
     * If `query` is grouping by a field, the count is simply the sum of the counts
     * of the groups returned in the response. This number can be smaller than the
     * total number of workflows matching the query.
     */
    count?: string;
    /**
     * `groups` contains the groups if the request is grouping by a field.
     * The list might not be complete, and the counts of each group is approximate.
     */
    groups?: Array<CountWorkflowExecutionsResponse_AggregationGroup>;
};

