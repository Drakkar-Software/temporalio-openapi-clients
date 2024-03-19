/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScheduleAction } from './ScheduleAction';
import type { SchedulePolicies } from './SchedulePolicies';
import type { ScheduleSpec } from './ScheduleSpec';
import type { ScheduleState } from './ScheduleState';
export type Schedule = {
    spec?: ScheduleSpec;
    action?: ScheduleAction;
    policies?: SchedulePolicies;
    state?: ScheduleState;
};

