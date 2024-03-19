/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payload } from './Payload';
/**
 * A user-defined set of *indexed* fields that are used/exposed when listing/searching workflows.
 * The payload is not serialized in a user-defined way.
 */
export type SearchAttributes = {
    indexedFields?: Record<string, Payload>;
};

