/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Callback } from './Callback';
import type { CallbackInfo_Trigger } from './CallbackInfo_Trigger';
import type { Failure } from './Failure';
/**
 * CallbackInfo contains the state of an attached workflow callback.
 */
export type CallbackInfo = {
    /**
     * Information on how this callback should be invoked (e.g. its URL and type).
     */
    callback?: Callback;
    /**
     * Trigger for this callback.
     */
    trigger?: CallbackInfo_Trigger;
    /**
     * The time when the callback was registered.
     */
    registrationTime?: string;
    state?: CallbackInfo.state;
    /**
     * The number of attempts made to deliver the callback.
     * This number represents a minimum bound since the attempt is incremented after the callback request completes.
     */
    attempt?: number;
    /**
     * The time when the last attempt completed.
     */
    lastAttemptCompleteTime?: string;
    /**
     * The last attempt's failure, if any.
     */
    lastAttemptFailure?: Failure;
    /**
     * The time when the next attempt is scheduled.
     */
    nextAttemptScheduleTime?: string;
};
export namespace CallbackInfo {
    export enum state {
        CALLBACK_STATE_UNSPECIFIED = 'CALLBACK_STATE_UNSPECIFIED',
        CALLBACK_STATE_STANDBY = 'CALLBACK_STATE_STANDBY',
        CALLBACK_STATE_SCHEDULED = 'CALLBACK_STATE_SCHEDULED',
        CALLBACK_STATE_BACKING_OFF = 'CALLBACK_STATE_BACKING_OFF',
        CALLBACK_STATE_FAILED = 'CALLBACK_STATE_FAILED',
        CALLBACK_STATE_SUCCEEDED = 'CALLBACK_STATE_SUCCEEDED',
    }
}

