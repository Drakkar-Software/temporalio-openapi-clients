/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityType } from './ActivityType';
import type { Header } from './Header';
import type { Payloads } from './Payloads';
import type { RetryPolicy } from './RetryPolicy';
import type { TaskQueue } from './TaskQueue';
export type ActivityTaskScheduledEventAttributes = {
    /**
     * The worker/user assigned identifier for the activity
     */
    activityId?: string;
    activityType?: ActivityType;
    taskQueue?: TaskQueue;
    header?: Header;
    input?: Payloads;
    /**
     * Indicates how long the caller is willing to wait for an activity completion. Limits how long
     * retries will be attempted. Either this or `start_to_close_timeout` must be specified.
     *
     * (-- api-linter: core::0140::prepositions=disabled
     * aip.dev/not-precedent: "to" is used to indicate interval. --)
     */
    scheduleToCloseTimeout?: string;
    /**
     * Limits time an activity task can stay in a task queue before a worker picks it up. This
     * timeout is always non retryable, as all a retry would achieve is to put it back into the same
     * queue. Defaults to `schedule_to_close_timeout` or workflow execution timeout if not
     * specified.
     *
     * (-- api-linter: core::0140::prepositions=disabled
     * aip.dev/not-precedent: "to" is used to indicate interval. --)
     */
    scheduleToStartTimeout?: string;
    /**
     * Maximum time an activity is allowed to execute after being picked up by a worker. This
     * timeout is always retryable. Either this or `schedule_to_close_timeout` must be
     * specified.
     *
     * (-- api-linter: core::0140::prepositions=disabled
     * aip.dev/not-precedent: "to" is used to indicate interval. --)
     */
    startToCloseTimeout?: string;
    /**
     * Maximum permitted time between successful worker heartbeats.
     */
    heartbeatTimeout?: string;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
    /**
     * Activities are assigned a default retry policy controlled by the service's dynamic
     * configuration. Retries will happen up to `schedule_to_close_timeout`. To disable retries set
     * retry_policy.maximum_attempts to 1.
     */
    retryPolicy?: RetryPolicy;
    /**
     * If this is set, the activity would be assigned to the Build ID of the workflow. Otherwise,
     * Assignment rules of the activity's Task Queue will be used to determine the Build ID.
     */
    useWorkflowBuildId?: boolean;
};

