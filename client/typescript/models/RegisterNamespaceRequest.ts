/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClusterReplicationConfig } from './ClusterReplicationConfig';
export type RegisterNamespaceRequest = {
    namespace?: string;
    description?: string;
    ownerEmail?: string;
    workflowExecutionRetentionPeriod?: string;
    clusters?: Array<ClusterReplicationConfig>;
    activeClusterName?: string;
    /**
     * A key-value map for any customized purpose.
     */
    data?: Record<string, string>;
    securityToken?: string;
    isGlobalNamespace?: boolean;
    /**
     * If unspecified (ARCHIVAL_STATE_UNSPECIFIED) then default server configuration is used.
     */
    historyArchivalState?: RegisterNamespaceRequest.historyArchivalState;
    historyArchivalUri?: string;
    /**
     * If unspecified (ARCHIVAL_STATE_UNSPECIFIED) then default server configuration is used.
     */
    visibilityArchivalState?: RegisterNamespaceRequest.visibilityArchivalState;
    visibilityArchivalUri?: string;
};
export namespace RegisterNamespaceRequest {
    /**
     * If unspecified (ARCHIVAL_STATE_UNSPECIFIED) then default server configuration is used.
     */
    export enum historyArchivalState {
        ARCHIVAL_STATE_UNSPECIFIED = 'ARCHIVAL_STATE_UNSPECIFIED',
        ARCHIVAL_STATE_DISABLED = 'ARCHIVAL_STATE_DISABLED',
        ARCHIVAL_STATE_ENABLED = 'ARCHIVAL_STATE_ENABLED',
    }
    /**
     * If unspecified (ARCHIVAL_STATE_UNSPECIFIED) then default server configuration is used.
     */
    export enum visibilityArchivalState {
        ARCHIVAL_STATE_UNSPECIFIED = 'ARCHIVAL_STATE_UNSPECIFIED',
        ARCHIVAL_STATE_DISABLED = 'ARCHIVAL_STATE_DISABLED',
        ARCHIVAL_STATE_ENABLED = 'ARCHIVAL_STATE_ENABLED',
    }
}

