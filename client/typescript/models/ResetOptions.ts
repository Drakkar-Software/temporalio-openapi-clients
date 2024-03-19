/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes where and how to reset a workflow, used for batch reset currently
 * and may be used for single-workflow reset later.
 */
export type ResetOptions = {
    /**
     * The id of a specific `WORKFLOW_TASK_COMPLETED`,`WORKFLOW_TASK_TIMED_OUT`, `WORKFLOW_TASK_FAILED`, or
     * `WORKFLOW_TASK_STARTED` event to reset to.
     * Note that this option doesn't make sense when used as part of a batch request.
     */
    workflowTaskId?: string;
    /**
     * Resets to the first workflow task processed by this build id.
     * If the workflow was not processed by the build id, or the workflow task can't be
     * determined, no reset will be performed.
     * Note that by default, this reset is allowed to be to a prior run in a chain of
     * continue-as-new.
     */
    buildId?: string;
    /**
     * Event types to be reapplied (deprecated)
     * Default: RESET_REAPPLY_TYPE_SIGNAL
     */
    resetReapplyType?: ResetOptions.resetReapplyType;
    /**
     * If true, limit the reset to only within the current run. (Applies to build_id targets and
     * possibly others in the future.)
     */
    currentRunOnly?: boolean;
    /**
     * Event types not to be reapplied
     */
    resetReapplyExcludeTypes?: Array<'RESET_REAPPLY_EXCLUDE_TYPE_UNSPECIFIED' | 'RESET_REAPPLY_EXCLUDE_TYPE_SIGNAL' | 'RESET_REAPPLY_EXCLUDE_TYPE_UPDATE'>;
};
export namespace ResetOptions {
    /**
     * Event types to be reapplied (deprecated)
     * Default: RESET_REAPPLY_TYPE_SIGNAL
     */
    export enum resetReapplyType {
        RESET_REAPPLY_TYPE_UNSPECIFIED = 'RESET_REAPPLY_TYPE_UNSPECIFIED',
        RESET_REAPPLY_TYPE_SIGNAL = 'RESET_REAPPLY_TYPE_SIGNAL',
        RESET_REAPPLY_TYPE_NONE = 'RESET_REAPPLY_TYPE_NONE',
        RESET_REAPPLY_TYPE_ALL_ELIGIBLE = 'RESET_REAPPLY_TYPE_ALL_ELIGIBLE',
    }
}

