/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateNamespaceInfo = {
    description?: string;
    ownerEmail?: string;
    /**
     * A key-value map for any customized purpose.
     * If data already exists on the namespace,
     * this will merge with the existing key values.
     */
    data?: Record<string, string>;
    /**
     * New namespace state, server will reject if transition is not allowed.
     * Allowed transitions are:
     * Registered -> [ Deleted | Deprecated | Handover ]
     * Handover -> [ Registered ]
     * Default is NAMESPACE_STATE_UNSPECIFIED which is do not change state.
     */
    state?: UpdateNamespaceInfo.state;
};
export namespace UpdateNamespaceInfo {
    /**
     * New namespace state, server will reject if transition is not allowed.
     * Allowed transitions are:
     * Registered -> [ Deleted | Deprecated | Handover ]
     * Handover -> [ Registered ]
     * Default is NAMESPACE_STATE_UNSPECIFIED which is do not change state.
     */
    export enum state {
        NAMESPACE_STATE_UNSPECIFIED = 'NAMESPACE_STATE_UNSPECIFIED',
        NAMESPACE_STATE_REGISTERED = 'NAMESPACE_STATE_REGISTERED',
        NAMESPACE_STATE_DEPRECATED = 'NAMESPACE_STATE_DEPRECATED',
        NAMESPACE_STATE_DELETED = 'NAMESPACE_STATE_DELETED',
    }
}

