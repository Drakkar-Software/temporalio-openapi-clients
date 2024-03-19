/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskQueueReachability } from './TaskQueueReachability';
/**
 * Reachability of tasks for a worker by build id, in one or more task queues.
 */
export type BuildIdReachability = {
    /**
     * A build id or empty if unversioned.
     */
    buildId?: string;
    /**
     * Reachability per task queue.
     */
    taskQueueReachability?: Array<TaskQueueReachability>;
};

