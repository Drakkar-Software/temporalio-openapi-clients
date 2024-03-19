/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndpointTarget } from './EndpointTarget';
import type { Payload } from './Payload';
/**
 * Contains mutable fields for an Endpoint.
 */
export type EndpointSpec = {
    /**
     * Endpoint name, unique for this cluster. Must match `[a-zA-Z_][a-zA-Z0-9_]*`.
     * Renaming an endpoint breaks all workflow callers that reference this endpoint, causing operations to fail.
     */
    name?: string;
    /**
     * Markdown description serialized as a single JSON string.
     * If the Payload is encrypted, the UI and CLI may decrypt with the configured codec server endpoint.
     * By default, the server enforces a limit of 20,000 bytes for this entire payload.
     */
    description?: Payload;
    /**
     * Target to route requests to.
     */
    target?: EndpointTarget;
};

