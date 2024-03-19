/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PollerInfo } from './PollerInfo';
import type { TaskQueueStats } from './TaskQueueStats';
export type TaskQueueTypeInfo = {
    /**
     * Unversioned workers (with `useVersioning=false`) are reported in unversioned result even if they set a Build ID.
     */
    pollers?: Array<PollerInfo>;
    stats?: TaskQueueStats;
};

