/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndpointSpec } from './EndpointSpec';
/**
 * A cluster-global binding from an endpoint ID to a target for dispatching incoming Nexus requests.
 */
export type Endpoint = {
    /**
     * Data version for this endpoint, incremented for every update issued via the UpdateNexusEndpoint API.
     */
    version?: string;
    /**
     * Unique server-generated endpoint ID.
     */
    id?: string;
    /**
     * Spec for the endpoint.
     */
    spec?: EndpointSpec;
    /**
     * The date and time when the endpoint was created.
     * (-- api-linter: core::0142::time-field-names=disabled
     * aip.dev/not-precedent: Not following linter rules. --)
     */
    createdTime?: string;
    /**
     * The date and time when the endpoint was last modified.
     * Will not be set if the endpoint has never been modified.
     * (-- api-linter: core::0142::time-field-names=disabled
     * aip.dev/not-precedent: Not following linter rules. --)
     */
    lastModifiedTime?: string;
    /**
     * Server exposed URL prefix for invocation of operations on this endpoint.
     * This doesn't include the protocol, hostname or port as the server does not know how it should be accessed
     * publicly. The URL is stable in the face of endpoint renames.
     */
    urlPrefix?: string;
};

