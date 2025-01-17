/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * TaskQueueStats contains statistics about task queue backlog and activity.
 *
 * For workflow task queue type, this result is partial because tasks sent to sticky queues are not included. Read
 * comments above each metric to understand the impact of sticky queue exclusion on that metric accuracy.
 */
export type TaskQueueStats = {
    /**
     * The approximate number of tasks backlogged in this task queue. May count expired tasks but eventually
     * converges to the right value. Can be relied upon for scaling decisions.
     *
     * Special note for workflow task queue type: this metric does not count sticky queue tasks. However, because
     * those tasks only remain valid for a few seconds, the inaccuracy becomes less significant as the backlog size
     * grows.
     */
    approximateBacklogCount?: string;
    /**
     * Approximate age of the oldest task in the backlog based on the creation time of the task at the head of
     * the queue. Can be relied upon for scaling decisions.
     *
     * Special note for workflow task queue type: this metric does not count sticky queue tasks. However, because
     * those tasks only remain valid for a few seconds, they should not affect the result when backlog is older than
     * few seconds.
     */
    approximateBacklogAge?: string;
    /**
     * The approximate tasks per second added to the task queue, averaging the last 30 seconds. These includes tasks
     * whether or not they were added to/dispatched from the backlog or they were dispatched immediately without going
     * to the backlog (sync-matched).
     *
     * The difference between `tasks_add_rate` and `tasks_dispatch_rate` is a reliable metric for the rate at which
     * backlog grows/shrinks.
     *
     * Note: the actual tasks delivered to the workers may significantly be higher than the numbers reported by
     * tasks_add_rate, because:
     * - Tasks can be sent to workers without going to the task queue. This is called Eager dispatch. Eager dispatch is
     * enable for activities by default in the latest SDKs.
     * - Tasks going to Sticky queue are not accounted for. Note that, typically, only the first workflow task of each
     * workflow goes to a normal queue, and the rest workflow tasks go to the Sticky queue associated with a specific
     * worker instance.
     */
    tasksAddRate?: number;
    /**
     * The approximate tasks per second dispatched from the task queue, averaging the last 30 seconds. These includes
     * tasks whether or not they were added to/dispatched from the backlog or they were dispatched immediately without
     * going to the backlog (sync-matched).
     *
     * The difference between `tasks_add_rate` and `tasks_dispatch_rate` is a reliable metric for the rate at which
     * backlog grows/shrinks.
     *
     * Note: the actual tasks delivered to the workers may significantly be higher than the numbers reported by
     * tasks_dispatch_rate, because:
     * - Tasks can be sent to workers without going to the task queue. This is called Eager dispatch. Eager dispatch is
     * enable for activities by default in the latest SDKs.
     * - Tasks going to Sticky queue are not accounted for. Note that, typically, only the first workflow task of each
     * workflow goes to a normal queue, and the rest workflow tasks go to the Sticky queue associated with a specific
     * worker instance.
     */
    tasksDispatchRate?: number;
};

