/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecution } from './WorkflowExecution';
import type { WorkflowQuery } from './WorkflowQuery';
export type QueryWorkflowRequest = {
    namespace?: string;
    execution?: WorkflowExecution;
    query?: WorkflowQuery;
    /**
     * QueryRejectCondition can used to reject the query if workflow state does not satisfy condition.
     * Default: QUERY_REJECT_CONDITION_NONE.
     */
    queryRejectCondition?: QueryWorkflowRequest.queryRejectCondition;
};
export namespace QueryWorkflowRequest {
    /**
     * QueryRejectCondition can used to reject the query if workflow state does not satisfy condition.
     * Default: QUERY_REJECT_CONDITION_NONE.
     */
    export enum queryRejectCondition {
        QUERY_REJECT_CONDITION_UNSPECIFIED = 'QUERY_REJECT_CONDITION_UNSPECIFIED',
        QUERY_REJECT_CONDITION_NONE = 'QUERY_REJECT_CONDITION_NONE',
        QUERY_REJECT_CONDITION_NOT_OPEN = 'QUERY_REJECT_CONDITION_NOT_OPEN',
        QUERY_REJECT_CONDITION_NOT_COMPLETED_CLEANLY = 'QUERY_REJECT_CONDITION_NOT_COMPLETED_CLEANLY',
    }
}

