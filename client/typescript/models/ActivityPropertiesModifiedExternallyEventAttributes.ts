/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RetryPolicy } from './RetryPolicy';
export type ActivityPropertiesModifiedExternallyEventAttributes = {
    /**
     * The id of the `ACTIVITY_TASK_SCHEDULED` event this modification corresponds to.
     */
    scheduledEventId?: string;
    /**
     * If set, update the retry policy of the activity, replacing it with the specified one.
     * The number of attempts at the activity is preserved.
     */
    newRetryPolicy?: RetryPolicy;
};

