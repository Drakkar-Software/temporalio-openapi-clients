/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecution } from './WorkflowExecution';
export type ScheduleActionResult = {
    /**
     * Time that the action was taken (according to the schedule, including jitter).
     */
    scheduleTime?: string;
    /**
     * Time that the action was taken (real time).
     */
    actualTime?: string;
    /**
     * If action was start_workflow:
     */
    startWorkflowResult?: WorkflowExecution;
};

