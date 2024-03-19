/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Identifies a specific workflow within a namespace. Practically speaking, because run_id is a
 * uuid, a workflow execution is globally unique. Note that many commands allow specifying an empty
 * run id as a way of saying "target the latest run of the workflow".
 */
export type WorkflowExecution = {
    workflowId?: string;
    runId?: string;
};

