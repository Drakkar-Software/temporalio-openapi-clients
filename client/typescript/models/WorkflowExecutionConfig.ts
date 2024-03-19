/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskQueue } from './TaskQueue';
import type { UserMetadata } from './UserMetadata';
export type WorkflowExecutionConfig = {
    taskQueue?: TaskQueue;
    workflowExecutionTimeout?: string;
    workflowRunTimeout?: string;
    defaultWorkflowTaskTimeout?: string;
    /**
     * User metadata provided on start workflow.
     */
    userMetadata?: UserMetadata;
};

