/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewWorkflowExecutionInfo } from './NewWorkflowExecutionInfo';
export type ScheduleAction = {
    /**
     * All fields of NewWorkflowExecutionInfo are valid except for:
     * - workflow_id_reuse_policy
     * - cron_schedule
     * The workflow id of the started workflow may not match this exactly,
     * it may have a timestamp appended for uniqueness.
     */
    startWorkflow?: NewWorkflowExecutionInfo;
};

