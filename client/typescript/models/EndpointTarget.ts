/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndpointTarget_External } from './EndpointTarget_External';
import type { EndpointTarget_Worker } from './EndpointTarget_Worker';
/**
 * Target to route requests to.
 */
export type EndpointTarget = {
    worker?: EndpointTarget_Worker;
    external?: EndpointTarget_External;
};

