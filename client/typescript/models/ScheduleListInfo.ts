/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScheduleActionResult } from './ScheduleActionResult';
import type { ScheduleSpec } from './ScheduleSpec';
import type { WorkflowType } from './WorkflowType';
/**
 * ScheduleListInfo is an abbreviated set of values from Schedule and ScheduleInfo
 * that's returned in ListSchedules.
 */
export type ScheduleListInfo = {
    /**
     * From spec:
     * Some fields are dropped from this copy of spec: timezone_data
     */
    spec?: ScheduleSpec;
    /**
     * From action:
     * Action is a oneof field, but we need to encode this in JSON and oneof fields don't work
     * well with JSON. If action is start_workflow, this is set:
     */
    workflowType?: WorkflowType;
    /**
     * From state:
     */
    notes?: string;
    paused?: boolean;
    /**
     * From info (maybe fewer entries):
     */
    recentActions?: Array<ScheduleActionResult>;
    futureActionTimes?: Array<string>;
};

