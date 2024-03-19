/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Failure } from './Failure';
import type { Payloads } from './Payloads';
/**
 * The outcome of a Workflow Update: success or failure.
 */
export type Outcome = {
    success?: Payloads;
    failure?: Failure;
};

