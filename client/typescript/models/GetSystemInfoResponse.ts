/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetSystemInfoResponse_Capabilities } from './GetSystemInfoResponse_Capabilities';
export type GetSystemInfoResponse = {
    /**
     * Version of the server.
     */
    serverVersion?: string;
    /**
     * All capabilities the system supports.
     */
    capabilities?: GetSystemInfoResponse_Capabilities;
};

