/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from './Meta';
import type { Outcome } from './Outcome';
export type WorkflowExecutionUpdateCompletedEventAttributes = {
    /**
     * The metadata about this update.
     */
    meta?: Meta;
    /**
     * The event ID indicating the acceptance of this update.
     */
    acceptedEventId?: string;
    /**
     * The outcome of executing the workflow update function.
     */
    outcome?: Outcome;
};

