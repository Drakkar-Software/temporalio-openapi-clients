/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RecordActivityTaskHeartbeatByIdResponse = {
    /**
     * Will be set to true if the activity has been asked to cancel itself. The SDK should then
     * notify the activity of cancellation if it is still running.
     */
    cancelRequested?: boolean;
};

