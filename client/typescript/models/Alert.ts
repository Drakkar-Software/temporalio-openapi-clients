/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Alert contains notification and severity.
 */
export type Alert = {
    message?: string;
    severity?: Alert.severity;
};
export namespace Alert {
    export enum severity {
        SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED',
        SEVERITY_HIGH = 'SEVERITY_HIGH',
        SEVERITY_MEDIUM = 'SEVERITY_MEDIUM',
        SEVERITY_LOW = 'SEVERITY_LOW',
    }
}

