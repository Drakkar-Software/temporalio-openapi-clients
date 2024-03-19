/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StartWorkflowExecutionRequest } from './StartWorkflowExecutionRequest';
import type { UpdateWorkflowExecutionRequest } from './UpdateWorkflowExecutionRequest';
export type ExecuteMultiOperationRequest_Operation = {
    /**
     * Additional restrictions:
     * - setting `cron_schedule` is invalid
     * - setting `request_eager_execution` is invalid
     * - setting `workflow_start_delay` is invalid
     */
    startWorkflow?: StartWorkflowExecutionRequest;
    /**
     * Additional restrictions:
     * - setting `first_execution_run_id` is invalid
     * - setting `workflow_execution.run_id` is invalid
     */
    updateWorkflow?: UpdateWorkflowExecutionRequest;
};

