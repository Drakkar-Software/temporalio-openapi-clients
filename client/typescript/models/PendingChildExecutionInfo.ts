/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PendingChildExecutionInfo = {
    workflowId?: string;
    runId?: string;
    workflowTypeName?: string;
    initiatedId?: string;
    /**
     * Default: PARENT_CLOSE_POLICY_TERMINATE.
     */
    parentClosePolicy?: PendingChildExecutionInfo.parentClosePolicy;
};
export namespace PendingChildExecutionInfo {
    /**
     * Default: PARENT_CLOSE_POLICY_TERMINATE.
     */
    export enum parentClosePolicy {
        PARENT_CLOSE_POLICY_UNSPECIFIED = 'PARENT_CLOSE_POLICY_UNSPECIFIED',
        PARENT_CLOSE_POLICY_TERMINATE = 'PARENT_CLOSE_POLICY_TERMINATE',
        PARENT_CLOSE_POLICY_ABANDON = 'PARENT_CLOSE_POLICY_ABANDON',
        PARENT_CLOSE_POLICY_REQUEST_CANCEL = 'PARENT_CLOSE_POLICY_REQUEST_CANCEL',
    }
}

