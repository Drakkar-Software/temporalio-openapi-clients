/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payload } from './Payload';
/**
 * Information a user can set, often for use by user interfaces.
 */
export type UserMetadata = {
    /**
     * Short-form text that provides a summary. This payload should be a "json/plain"-encoded payload
     * that is a single JSON string for use in user interfaces. User interface formatting may not
     * apply to this text when used in "title" situations. The payload data section is limited to 400
     * bytes by default.
     */
    summary?: Payload;
    /**
     * Long-form text that provides details. This payload should be a "json/plain"-encoded payload
     * that is a single JSON string for use in user interfaces. User interface formatting may apply to
     * this text in common use. The payload data section is limited to 20000 bytes by default.
     */
    details?: Payload;
};
