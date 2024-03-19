/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NamespaceConfig } from './NamespaceConfig';
import type { NamespaceReplicationConfig } from './NamespaceReplicationConfig';
import type { UpdateNamespaceInfo } from './UpdateNamespaceInfo';
export type UpdateNamespaceRequest = {
    namespace?: string;
    updateInfo?: UpdateNamespaceInfo;
    config?: NamespaceConfig;
    replicationConfig?: NamespaceReplicationConfig;
    securityToken?: string;
    deleteBadBinary?: string;
    /**
     * promote local namespace to global namespace. Ignored if namespace is already global namespace.
     */
    promoteNamespace?: boolean;
};

