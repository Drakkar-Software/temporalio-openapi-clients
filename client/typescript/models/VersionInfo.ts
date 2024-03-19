/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Alert } from './Alert';
import type { ReleaseInfo } from './ReleaseInfo';
/**
 * VersionInfo contains details about current and recommended release versions as well as alerts and upgrade instructions.
 */
export type VersionInfo = {
    current?: ReleaseInfo;
    recommended?: ReleaseInfo;
    instructions?: string;
    alerts?: Array<Alert>;
    lastUpdateTime?: string;
};

