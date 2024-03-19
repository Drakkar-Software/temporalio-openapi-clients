/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskQueue } from './TaskQueue';
export type WorkflowTaskScheduledEventAttributes = {
    /**
     * The task queue this workflow task was enqueued in, which could be a normal or sticky queue
     */
    taskQueue?: TaskQueue;
    /**
     * How long the worker has to process this task once receiving it before it times out
     *
     * (-- api-linter: core::0140::prepositions=disabled
     * aip.dev/not-precedent: "to" is used to indicate interval. --)
     */
    startToCloseTimeout?: string;
    /**
     * Starting at 1, how many attempts there have been to complete this task
     */
    attempt?: number;
};

