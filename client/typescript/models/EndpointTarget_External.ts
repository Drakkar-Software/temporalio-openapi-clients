/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Target an external server by URL.
 * At a later point, this will support providing credentials, in the meantime, an http.RoundTripper can be injected
 * into the server to modify the request.
 */
export type EndpointTarget_External = {
    /**
     * URL to call.
     */
    url?: string;
};

