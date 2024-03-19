/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
import type { Header } from './Header';
import type { Payloads } from './Payloads';
export type MarkerRecordedEventAttributes = {
    /**
     * Workers use this to identify the "types" of various markers. Ex: Local activity, side effect.
     */
    markerName?: string;
    /**
     * Serialized information recorded in the marker
     */
    details?: Record<string, Payloads>;
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
    header?: Header;
    /**
     * Some uses of markers, like a local activity, could "fail". If they did that is recorded here.
     */
    failure?: Failure;
};

