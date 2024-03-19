/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Memo } from './Memo';
import type { ScheduleListInfo } from './ScheduleListInfo';
import type { SearchAttributes } from './SearchAttributes';
/**
 * ScheduleListEntry is returned by ListSchedules.
 */
export type ScheduleListEntry = {
    scheduleId?: string;
    memo?: Memo;
    searchAttributes?: SearchAttributes;
    info?: ScheduleListInfo;
};

