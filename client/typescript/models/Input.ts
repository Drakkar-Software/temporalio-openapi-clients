/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Header } from './Header';
import type { Payloads } from './Payloads';
export type Input = {
    /**
     * Headers that are passed with the Update from the requesting entity.
     * These can include things like auth or tracing tokens.
     */
    header?: Header;
    /**
     * The name of the Update handler to invoke on the target Workflow.
     */
    name?: string;
    /**
     * The arguments to pass to the named Update handler.
     */
    args?: Payloads;
};

