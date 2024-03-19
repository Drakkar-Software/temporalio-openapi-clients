/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResetOptions } from './ResetOptions';
/**
 * BatchOperationReset sends reset requests to batch workflows.
 * Keep the parameter in sync with temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.
 */
export type BatchOperationReset = {
    /**
     * The identity of the worker/client.
     */
    identity?: string;
    /**
     * Describes what to reset to and how. If set, `reset_type` and `reset_reapply_type` are ignored.
     */
    options?: ResetOptions;
    /**
     * Reset type (deprecated, use `options`).
     */
    resetType?: BatchOperationReset.resetType;
    /**
     * History event reapply options (deprecated, use `options`).
     */
    resetReapplyType?: BatchOperationReset.resetReapplyType;
};
export namespace BatchOperationReset {
    /**
     * Reset type (deprecated, use `options`).
     */
    export enum resetType {
        RESET_TYPE_UNSPECIFIED = 'RESET_TYPE_UNSPECIFIED',
        RESET_TYPE_FIRST_WORKFLOW_TASK = 'RESET_TYPE_FIRST_WORKFLOW_TASK',
        RESET_TYPE_LAST_WORKFLOW_TASK = 'RESET_TYPE_LAST_WORKFLOW_TASK',
    }
    /**
     * History event reapply options (deprecated, use `options`).
     */
    export enum resetReapplyType {
        RESET_REAPPLY_TYPE_UNSPECIFIED = 'RESET_REAPPLY_TYPE_UNSPECIFIED',
        RESET_REAPPLY_TYPE_SIGNAL = 'RESET_REAPPLY_TYPE_SIGNAL',
        RESET_REAPPLY_TYPE_NONE = 'RESET_REAPPLY_TYPE_NONE',
        RESET_REAPPLY_TYPE_ALL_ELIGIBLE = 'RESET_REAPPLY_TYPE_ALL_ELIGIBLE',
    }
}

