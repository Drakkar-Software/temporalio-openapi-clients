/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchAttributes } from './SearchAttributes';
export type UpsertWorkflowSearchAttributesEventAttributes = {
    /**
     * The `WORKFLOW_TASK_COMPLETED` event which this command was reported with
     */
    workflowTaskCompletedEventId?: string;
    searchAttributes?: SearchAttributes;
};

