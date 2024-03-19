/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies client's intent to wait for Update results.
 */
export type WaitPolicy = {
    /**
     * Indicates the Update lifecycle stage that the Update must reach before
     * API call is returned.
     * NOTE: This field works together with API call timeout which is limited by
     * server timeout (maximum wait time). If server timeout is expired before
     * user specified timeout, API call returns even if specified stage is not reached.
     */
    lifecycleStage?: WaitPolicy.lifecycleStage;
};
export namespace WaitPolicy {
    /**
     * Indicates the Update lifecycle stage that the Update must reach before
     * API call is returned.
     * NOTE: This field works together with API call timeout which is limited by
     * server timeout (maximum wait time). If server timeout is expired before
     * user specified timeout, API call returns even if specified stage is not reached.
     */
    export enum lifecycleStage {
        UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_UNSPECIFIED = 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_UNSPECIFIED',
        UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ADMITTED = 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ADMITTED',
        UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ACCEPTED = 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ACCEPTED',
        UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_COMPLETED = 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_COMPLETED',
    }
}

