/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Header } from './Header';
import type { Payloads } from './Payloads';
/**
 * See https://docs.temporal.io/docs/concepts/queries/
 */
export type WorkflowQuery = {
    /**
     * The workflow-author-defined identifier of the query. Typically a function name.
     */
    queryType?: string;
    /**
     * Serialized arguments that will be provided to the query handler.
     */
    queryArgs?: Payloads;
    /**
     * Headers that were passed by the caller of the query and copied by temporal
     * server into the workflow task.
     */
    header?: Header;
};

