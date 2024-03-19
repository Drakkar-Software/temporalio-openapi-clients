/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * See https://docs.temporal.io/docs/concepts/task-queues/
 */
export type TaskQueue = {
    name?: string;
    /**
     * Default: TASK_QUEUE_KIND_NORMAL.
     */
    kind?: TaskQueue.kind;
    /**
     * Iff kind == TASK_QUEUE_KIND_STICKY, then this field contains the name of
     * the normal task queue that the sticky worker is running on.
     */
    normalName?: string;
};
export namespace TaskQueue {
    /**
     * Default: TASK_QUEUE_KIND_NORMAL.
     */
    export enum kind {
        TASK_QUEUE_KIND_UNSPECIFIED = 'TASK_QUEUE_KIND_UNSPECIFIED',
        TASK_QUEUE_KIND_NORMAL = 'TASK_QUEUE_KIND_NORMAL',
        TASK_QUEUE_KIND_STICKY = 'TASK_QUEUE_KIND_STICKY',
    }
}

