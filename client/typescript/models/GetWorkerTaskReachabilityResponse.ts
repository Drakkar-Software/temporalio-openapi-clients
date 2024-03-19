/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildIdReachability } from './BuildIdReachability';
/**
 * Deprecated. Use `DescribeTaskQueue`.
 */
export type GetWorkerTaskReachabilityResponse = {
    /**
     * Task reachability, broken down by build id and then task queue.
     * When requesting a large number of task queues or all task queues associated with the given build ids in a
     * namespace, all task queues will be listed in the response but some of them may not contain reachability
     * information due to a server enforced limit. When reaching the limit, task queues that reachability information
     * could not be retrieved for will be marked with a single TASK_REACHABILITY_UNSPECIFIED entry. The caller may issue
     * another call to get the reachability for those task queues.
     *
     * Open source users can adjust this limit by setting the server's dynamic config value for
     * `limit.reachabilityTaskQueueScan` with the caveat that this call can strain the visibility store.
     */
    buildIdReachability?: Array<BuildIdReachability>;
};

