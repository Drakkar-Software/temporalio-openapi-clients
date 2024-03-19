/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchOperationInfo } from './BatchOperationInfo';
export type ListBatchOperationsResponse = {
    /**
     * BatchOperationInfo contains the basic info about batch operation
     */
    operationInfo?: Array<BatchOperationInfo>;
    nextPageToken?: string;
};

