/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FailoverStatus } from './FailoverStatus';
import type { NamespaceConfig } from './NamespaceConfig';
import type { NamespaceInfo } from './NamespaceInfo';
import type { NamespaceReplicationConfig } from './NamespaceReplicationConfig';
export type DescribeNamespaceResponse = {
    namespaceInfo?: NamespaceInfo;
    config?: NamespaceConfig;
    replicationConfig?: NamespaceReplicationConfig;
    failoverVersion?: string;
    isGlobalNamespace?: boolean;
    /**
     * Contains the historical state of failover_versions for the cluster, truncated to contain only the last N
     * states to ensure that the list does not grow unbounded.
     */
    failoverHistory?: Array<FailoverStatus>;
};

