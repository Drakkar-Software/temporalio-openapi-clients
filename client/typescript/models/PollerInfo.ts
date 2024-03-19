/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkerVersionCapabilities } from './WorkerVersionCapabilities';
export type PollerInfo = {
    lastAccessTime?: string;
    identity?: string;
    ratePerSecond?: number;
    /**
     * If a worker has opted into the worker versioning feature while polling, its capabilities will
     * appear here.
     */
    workerVersionCapabilities?: WorkerVersionCapabilities;
};

