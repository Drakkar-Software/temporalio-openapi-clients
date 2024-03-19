/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClusterReplicationConfig } from './ClusterReplicationConfig';
export type NamespaceReplicationConfig = {
    activeClusterName?: string;
    clusters?: Array<ClusterReplicationConfig>;
    state?: NamespaceReplicationConfig.state;
};
export namespace NamespaceReplicationConfig {
    export enum state {
        REPLICATION_STATE_UNSPECIFIED = 'REPLICATION_STATE_UNSPECIFIED',
        REPLICATION_STATE_NORMAL = 'REPLICATION_STATE_NORMAL',
        REPLICATION_STATE_HANDOVER = 'REPLICATION_STATE_HANDOVER',
    }
}

