/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NamespaceInfo_Capabilities } from './NamespaceInfo_Capabilities';
export type NamespaceInfo = {
    name?: string;
    state?: NamespaceInfo.state;
    description?: string;
    ownerEmail?: string;
    /**
     * A key-value map for any customized purpose.
     */
    data?: Record<string, string>;
    id?: string;
    /**
     * All capabilities the namespace supports.
     */
    capabilities?: NamespaceInfo_Capabilities;
    /**
     * Whether scheduled workflows are supported on this namespace. This is only needed
     * temporarily while the feature is experimental, so we can give it a high tag.
     */
    supportsSchedules?: boolean;
};
export namespace NamespaceInfo {
    export enum state {
        NAMESPACE_STATE_UNSPECIFIED = 'NAMESPACE_STATE_UNSPECIFIED',
        NAMESPACE_STATE_REGISTERED = 'NAMESPACE_STATE_REGISTERED',
        NAMESPACE_STATE_DEPRECATED = 'NAMESPACE_STATE_DEPRECATED',
        NAMESPACE_STATE_DELETED = 'NAMESPACE_STATE_DELETED',
    }
}

