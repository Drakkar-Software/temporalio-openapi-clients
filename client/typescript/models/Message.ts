/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoogleProtobufAny } from './GoogleProtobufAny';
/**
 * (-- api-linter: core::0146::any=disabled
 * aip.dev/not-precedent: We want runtime extensibility for the body field --)
 */
export type Message = {
    /**
     * An ID for this specific message.
     */
    id?: string;
    /**
     * Identifies the specific instance of a protocol to which this message
     * belongs.
     */
    protocolInstanceId?: string;
    eventId?: string;
    commandIndex?: string;
    /**
     * The opaque data carried by this message. The protocol type can be
     * extracted from the package name of the message carried inside the Any.
     */
    body?: GoogleProtobufAny;
};

