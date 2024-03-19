/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { History } from './History';
export type GetWorkflowExecutionHistoryReverseResponse = {
    history?: History;
    /**
     * Will be set if there are more history events than were included in this response
     */
    nextPageToken?: string;
};

