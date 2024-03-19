/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
export type RespondActivityTaskFailedByIdResponse = {
    /**
     * Server validation failures could include
     * last_heartbeat_details payload is too large, request failure is too large
     */
    failures?: Array<Failure>;
};

