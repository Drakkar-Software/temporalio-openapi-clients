/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecuteMultiOperationRequest_Operation } from './ExecuteMultiOperationRequest_Operation';
export type ExecuteMultiOperationRequest = {
    namespace?: string;
    /**
     * List of operations to execute within a single workflow.
     *
     * Preconditions:
     * - The list of operations must not be empty.
     * - The workflow ids must match across operations.
     * - The only valid list of operations at this time is [StartWorkflow, UpdateWorkflow], in this order.
     *
     * Note that additional operation-specific restrictions have to be considered.
     */
    operations?: Array<ExecuteMultiOperationRequest_Operation>;
};

