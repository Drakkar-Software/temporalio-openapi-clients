/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BadBinaries } from './BadBinaries';
export type NamespaceConfig = {
    workflowExecutionRetentionTtl?: string;
    badBinaries?: BadBinaries;
    /**
     * If unspecified (ARCHIVAL_STATE_UNSPECIFIED) then default server configuration is used.
     */
    historyArchivalState?: NamespaceConfig.historyArchivalState;
    historyArchivalUri?: string;
    /**
     * If unspecified (ARCHIVAL_STATE_UNSPECIFIED) then default server configuration is used.
     */
    visibilityArchivalState?: NamespaceConfig.visibilityArchivalState;
    visibilityArchivalUri?: string;
    /**
     * Map from field name to alias.
     */
    customSearchAttributeAliases?: Record<string, string>;
};
export namespace NamespaceConfig {
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

