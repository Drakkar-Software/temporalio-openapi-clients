/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecution } from './WorkflowExecution';
/**
 * The data needed by a client to refer to a previously invoked Workflow Update.
 */
export type UpdateRef = {
    workflowExecution?: WorkflowExecution;
    updateId?: string;
};

