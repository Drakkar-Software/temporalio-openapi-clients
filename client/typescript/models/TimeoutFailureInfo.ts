/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payloads } from './Payloads';
export type TimeoutFailureInfo = {
    timeoutType?: TimeoutFailureInfo.timeoutType;
    lastHeartbeatDetails?: Payloads;
};
export namespace TimeoutFailureInfo {
    export enum timeoutType {
        TIMEOUT_TYPE_UNSPECIFIED = 'TIMEOUT_TYPE_UNSPECIFIED',
        TIMEOUT_TYPE_START_TO_CLOSE = 'TIMEOUT_TYPE_START_TO_CLOSE',
        TIMEOUT_TYPE_SCHEDULE_TO_START = 'TIMEOUT_TYPE_SCHEDULE_TO_START',
        TIMEOUT_TYPE_SCHEDULE_TO_CLOSE = 'TIMEOUT_TYPE_SCHEDULE_TO_CLOSE',
        TIMEOUT_TYPE_HEARTBEAT = 'TIMEOUT_TYPE_HEARTBEAT',
    }
}

