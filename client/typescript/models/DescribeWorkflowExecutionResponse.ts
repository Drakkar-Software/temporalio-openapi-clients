/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CallbackInfo } from './CallbackInfo';
import type { PendingActivityInfo } from './PendingActivityInfo';
import type { PendingChildExecutionInfo } from './PendingChildExecutionInfo';
import type { PendingNexusOperationInfo } from './PendingNexusOperationInfo';
import type { PendingWorkflowTaskInfo } from './PendingWorkflowTaskInfo';
import type { WorkflowExecutionConfig } from './WorkflowExecutionConfig';
import type { WorkflowExecutionInfo } from './WorkflowExecutionInfo';
export type DescribeWorkflowExecutionResponse = {
    executionConfig?: WorkflowExecutionConfig;
    workflowExecutionInfo?: WorkflowExecutionInfo;
    pendingActivities?: Array<PendingActivityInfo>;
    pendingChildren?: Array<PendingChildExecutionInfo>;
    pendingWorkflowTask?: PendingWorkflowTaskInfo;
    callbacks?: Array<CallbackInfo>;
    pendingNexusOperations?: Array<PendingNexusOperationInfo>;
};

