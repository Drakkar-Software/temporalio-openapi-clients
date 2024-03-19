/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link_WorkflowEvent } from './Link_WorkflowEvent';
/**
 * Link can be associated with history events. It might contain information about an external entity
 * related to the history event. For example, workflow A makes a Nexus call that starts workflow B:
 * in this case, a history event in workflow A could contain a Link to the workflow started event in
 * workflow B, and vice-versa.
 */
export type Link = {
    workflowEvent?: Link_WorkflowEvent;
};

