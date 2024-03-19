/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PollerInfo } from './PollerInfo';
import type { TaskQueueStatus } from './TaskQueueStatus';
import type { TaskQueueVersionInfo } from './TaskQueueVersionInfo';
export type DescribeTaskQueueResponse = {
    /**
     * Deprecated. Use `versions_info.types_info.pollers` with `ENHANCED` mode instead.
     * Not set in `ENHANCED` mode.
     */
    pollers?: Array<PollerInfo>;
    /**
     * Deprecated. Not set in `ENHANCED` mode.
     */
    taskQueueStatus?: TaskQueueStatus;
    /**
     * This map contains Task Queue information for each Build ID. Empty string as key value means unversioned.
     * Only set in `ENHANCED` mode.
     */
    versionsInfo?: Record<string, TaskQueueVersionInfo>;
};

