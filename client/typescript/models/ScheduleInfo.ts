/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScheduleActionResult } from './ScheduleActionResult';
import type { WorkflowExecution } from './WorkflowExecution';
export type ScheduleInfo = {
    /**
     * Number of actions taken so far.
     */
    actionCount?: string;
    /**
     * Number of times a scheduled action was skipped due to missing the catchup window.
     */
    missedCatchupWindow?: string;
    /**
     * Number of skipped actions due to overlap.
     */
    overlapSkipped?: string;
    /**
     * Number of dropped actions due to buffer limit.
     */
    bufferDropped?: string;
    /**
     * Number of actions in the buffer. The buffer holds the actions that cannot
     * be immediately triggered (due to the overlap policy). These actions can be a result of
     * the normal schedule or a backfill.
     */
    bufferSize?: string;
    /**
     * Currently-running workflows started by this schedule. (There might be
     * more than one if the overlap policy allows overlaps.)
     * Note that the run_ids in here are the original execution run ids as
     * started by the schedule. If the workflows retried, did continue-as-new,
     * or were reset, they might still be running but with a different run_id.
     */
    runningWorkflows?: Array<WorkflowExecution>;
    /**
     * Most recent ten actual action times (including manual triggers).
     */
    recentActions?: Array<ScheduleActionResult>;
    /**
     * Next ten scheduled action times.
     */
    futureActionTimes?: Array<string>;
    /**
     * Timestamps of schedule creation and last update.
     */
    createTime?: string;
    updateTime?: string;
    invalidScheduleError?: string;
};

