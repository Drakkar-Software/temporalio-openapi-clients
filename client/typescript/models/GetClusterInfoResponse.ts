/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VersionInfo } from './VersionInfo';
/**
 * GetClusterInfoResponse contains information about Temporal cluster.
 */
export type GetClusterInfoResponse = {
    /**
     * Key is client name i.e "temporal-go", "temporal-java", or "temporal-cli".
     * Value is ranges of supported versions of this client i.e ">1.1.1 <=1.4.0 || ^5.0.0".
     */
    supportedClients?: Record<string, string>;
    serverVersion?: string;
    clusterId?: string;
    versionInfo?: VersionInfo;
    clusterName?: string;
    historyShardCount?: number;
    persistenceStore?: string;
    visibilityStore?: string;
};

