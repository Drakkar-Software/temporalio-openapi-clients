/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Namespace capability details. Should contain what features are enabled in a namespace.
 */
export type NamespaceInfo_Capabilities = {
    /**
     * True if the namespace supports eager workflow start.
     */
    eagerWorkflowStart?: boolean;
    /**
     * True if the namespace supports sync update
     */
    syncUpdate?: boolean;
    /**
     * True if the namespace supports async update
     */
    asyncUpdate?: boolean;
};

