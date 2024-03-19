/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Outcome } from './Outcome';
import type { UpdateRef } from './UpdateRef';
export type UpdateWorkflowExecutionResponse = {
    /**
     * Enough information for subsequent poll calls if needed. Never null.
     */
    updateRef?: UpdateRef;
    /**
     * The outcome of the Update if and only if the Workflow Update
     * has completed. If this response is being returned before the Update has
     * completed then this field will not be set.
     */
    outcome?: Outcome;
    /**
     * The most advanced lifecycle stage that the Update is known to have
     * reached, where lifecycle stages are ordered
     * UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_UNSPECIFIED <
     * UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ADMITTED <
     * UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ACCEPTED <
     * UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_COMPLETED.
     * UNSPECIFIED will be returned if and only if the server's maximum wait
     * time was reached before the Update reached the stage specified in the
     * request WaitPolicy, and before the context deadline expired; clients may
     * may then retry the call as needed.
     */
    stage?: UpdateWorkflowExecutionResponse.stage;
};
export namespace UpdateWorkflowExecutionResponse {
    /**
     * The most advanced lifecycle stage that the Update is known to have
     * reached, where lifecycle stages are ordered
     * UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_UNSPECIFIED <
     * UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ADMITTED <
     * UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ACCEPTED <
     * UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_COMPLETED.
     * UNSPECIFIED will be returned if and only if the server's maximum wait
     * time was reached before the Update reached the stage specified in the
     * request WaitPolicy, and before the context deadline expired; clients may
     * may then retry the call as needed.
     */
    export enum stage {
        UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_UNSPECIFIED = 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_UNSPECIFIED',
        UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ADMITTED = 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ADMITTED',
        UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ACCEPTED = 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ACCEPTED',
        UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_COMPLETED = 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_COMPLETED',
    }
}

