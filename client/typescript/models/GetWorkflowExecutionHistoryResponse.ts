/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataBlob } from './DataBlob';
import type { History } from './History';
export type GetWorkflowExecutionHistoryResponse = {
    history?: History;
    /**
     * Raw history is an alternate representation of history that may be returned if configured on
     * the frontend. This is not supported by all SDKs. Either this or `history` will be set.
     */
    rawHistory?: Array<DataBlob>;
    /**
     * Will be set if there are more history events than were included in this response
     */
    nextPageToken?: string;
    archived?: boolean;
};

