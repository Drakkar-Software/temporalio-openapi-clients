/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecution } from './WorkflowExecution';
export type WorkflowExecutionCancelRequestedEventAttributes = {
    /**
     * User provided reason for requesting cancellation
     * TODO: shall we create a new field with name "reason" and deprecate this one?
     */
    cause?: string;
    /**
     * TODO: Is this the ID of the event in the workflow which initiated this cancel, if there was one?
     */
    externalInitiatedEventId?: string;
    externalWorkflowExecution?: WorkflowExecution;
    /**
     * id of the worker or client who requested this cancel
     */
    identity?: string;
};

