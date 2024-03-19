/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NamespaceConfig } from './NamespaceConfig';
import type { NamespaceInfo } from './NamespaceInfo';
import type { NamespaceReplicationConfig } from './NamespaceReplicationConfig';
export type UpdateNamespaceResponse = {
    namespaceInfo?: NamespaceInfo;
    config?: NamespaceConfig;
    replicationConfig?: NamespaceReplicationConfig;
    failoverVersion?: string;
    isGlobalNamespace?: boolean;
};

