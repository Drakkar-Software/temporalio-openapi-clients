/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskIdBlock } from './TaskIdBlock';
/**
 * Deprecated. Use `InternalTaskQueueStatus`. This is kept until `DescribeTaskQueue` supports legacy behavior.
 */
export type TaskQueueStatus = {
    backlogCountHint?: string;
    readLevel?: string;
    ackLevel?: string;
    ratePerSecond?: number;
    taskIdBlock?: TaskIdBlock;
};

