/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Reachability of tasks for a worker on a single task queue.
 */
export type TaskQueueReachability = {
    taskQueue?: string;
    /**
     * Task reachability for a worker in a single task queue.
     * See the TaskReachability docstring for information about each enum variant.
     * If reachability is empty, this worker is considered unreachable in this task queue.
     */
    reachability?: Array<'TASK_REACHABILITY_UNSPECIFIED' | 'TASK_REACHABILITY_NEW_WORKFLOWS' | 'TASK_REACHABILITY_EXISTING_WORKFLOWS' | 'TASK_REACHABILITY_OPEN_WORKFLOWS' | 'TASK_REACHABILITY_CLOSED_WORKFLOWS'>;
};

