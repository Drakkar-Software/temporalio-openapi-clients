/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Callback_Internal } from './Callback_Internal';
import type { Callback_Nexus } from './Callback_Nexus';
/**
 * Callback to attach to various events in the system, e.g. workflow run completion.
 */
export type Callback = {
    nexus?: Callback_Nexus;
    internal?: Callback_Internal;
};

