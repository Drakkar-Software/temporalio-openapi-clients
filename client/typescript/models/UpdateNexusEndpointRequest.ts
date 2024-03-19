/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndpointSpec } from './EndpointSpec';
export type UpdateNexusEndpointRequest = {
    /**
     * Server-generated unique endpoint ID.
     */
    id?: string;
    /**
     * Data version for this endpoint. Must match current version.
     */
    version?: string;
    spec?: EndpointSpec;
};

