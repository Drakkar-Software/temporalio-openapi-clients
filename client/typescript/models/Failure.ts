/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityFailureInfo } from './ActivityFailureInfo';
import type { ApplicationFailureInfo } from './ApplicationFailureInfo';
import type { CanceledFailureInfo } from './CanceledFailureInfo';
import type { ChildWorkflowExecutionFailureInfo } from './ChildWorkflowExecutionFailureInfo';
import type { NexusOperationFailureInfo } from './NexusOperationFailureInfo';
import type { Payload } from './Payload';
import type { ResetWorkflowFailureInfo } from './ResetWorkflowFailureInfo';
import type { ServerFailureInfo } from './ServerFailureInfo';
import type { TerminatedFailureInfo } from './TerminatedFailureInfo';
import type { TimeoutFailureInfo } from './TimeoutFailureInfo';
export type Failure = {
    message?: string;
    /**
     * The source this Failure originated in, e.g. TypeScriptSDK / JavaSDK
     * In some SDKs this is used to rehydrate the stack trace into an exception object.
     */
    source?: string;
    stackTrace?: string;
    /**
     * Alternative way to supply `message` and `stack_trace` and possibly other attributes, used for encryption of
     * errors originating in user code which might contain sensitive information.
     * The `encoded_attributes` Payload could represent any serializable object, e.g. JSON object or a `Failure` proto
     * message.
     *
     * SDK authors:
     * - The SDK should provide a default `encodeFailureAttributes` and `decodeFailureAttributes` implementation that:
     * - Uses a JSON object to represent `{ message, stack_trace }`.
     * - Overwrites the original message with "Encoded failure" to indicate that more information could be extracted.
     * - Overwrites the original stack_trace with an empty string.
     * - The resulting JSON object is converted to Payload using the default PayloadConverter and should be processed
     * by the user-provided PayloadCodec
     *
     * - If there's demand, we could allow overriding the default SDK implementation to encode other opaque Failure attributes.
     */
    encodedAttributes?: Payload;
    cause?: Failure;
    applicationFailureInfo?: ApplicationFailureInfo;
    timeoutFailureInfo?: TimeoutFailureInfo;
    canceledFailureInfo?: CanceledFailureInfo;
    terminatedFailureInfo?: TerminatedFailureInfo;
    serverFailureInfo?: ServerFailureInfo;
    resetWorkflowFailureInfo?: ResetWorkflowFailureInfo;
    activityFailureInfo?: ActivityFailureInfo;
    childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo;
    nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo;
};

