/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Target a worker polling on a Nexus task queue in a specific namespace.
 */
export type EndpointTarget_Worker = {
    /**
     * Namespace to route requests to.
     */
    namespace?: string;
    /**
     * Nexus task queue to route requests to.
     */
    taskQueue?: string;
};

