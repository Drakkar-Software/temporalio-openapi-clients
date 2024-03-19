/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityPropertiesModifiedExternallyEventAttributes } from './ActivityPropertiesModifiedExternallyEventAttributes';
import type { ActivityTaskCanceledEventAttributes } from './ActivityTaskCanceledEventAttributes';
import type { ActivityTaskCancelRequestedEventAttributes } from './ActivityTaskCancelRequestedEventAttributes';
import type { ActivityTaskCompletedEventAttributes } from './ActivityTaskCompletedEventAttributes';
import type { ActivityTaskFailedEventAttributes } from './ActivityTaskFailedEventAttributes';
import type { ActivityTaskScheduledEventAttributes } from './ActivityTaskScheduledEventAttributes';
import type { ActivityTaskStartedEventAttributes } from './ActivityTaskStartedEventAttributes';
import type { ActivityTaskTimedOutEventAttributes } from './ActivityTaskTimedOutEventAttributes';
import type { ChildWorkflowExecutionCanceledEventAttributes } from './ChildWorkflowExecutionCanceledEventAttributes';
import type { ChildWorkflowExecutionCompletedEventAttributes } from './ChildWorkflowExecutionCompletedEventAttributes';
import type { ChildWorkflowExecutionFailedEventAttributes } from './ChildWorkflowExecutionFailedEventAttributes';
import type { ChildWorkflowExecutionStartedEventAttributes } from './ChildWorkflowExecutionStartedEventAttributes';
import type { ChildWorkflowExecutionTerminatedEventAttributes } from './ChildWorkflowExecutionTerminatedEventAttributes';
import type { ChildWorkflowExecutionTimedOutEventAttributes } from './ChildWorkflowExecutionTimedOutEventAttributes';
import type { ExternalWorkflowExecutionCancelRequestedEventAttributes } from './ExternalWorkflowExecutionCancelRequestedEventAttributes';
import type { ExternalWorkflowExecutionSignaledEventAttributes } from './ExternalWorkflowExecutionSignaledEventAttributes';
import type { Link } from './Link';
import type { MarkerRecordedEventAttributes } from './MarkerRecordedEventAttributes';
import type { NexusOperationCanceledEventAttributes } from './NexusOperationCanceledEventAttributes';
import type { NexusOperationCancelRequestedEventAttributes } from './NexusOperationCancelRequestedEventAttributes';
import type { NexusOperationCompletedEventAttributes } from './NexusOperationCompletedEventAttributes';
import type { NexusOperationFailedEventAttributes } from './NexusOperationFailedEventAttributes';
import type { NexusOperationScheduledEventAttributes } from './NexusOperationScheduledEventAttributes';
import type { NexusOperationStartedEventAttributes } from './NexusOperationStartedEventAttributes';
import type { NexusOperationTimedOutEventAttributes } from './NexusOperationTimedOutEventAttributes';
import type { RequestCancelExternalWorkflowExecutionFailedEventAttributes } from './RequestCancelExternalWorkflowExecutionFailedEventAttributes';
import type { RequestCancelExternalWorkflowExecutionInitiatedEventAttributes } from './RequestCancelExternalWorkflowExecutionInitiatedEventAttributes';
import type { SignalExternalWorkflowExecutionFailedEventAttributes } from './SignalExternalWorkflowExecutionFailedEventAttributes';
import type { SignalExternalWorkflowExecutionInitiatedEventAttributes } from './SignalExternalWorkflowExecutionInitiatedEventAttributes';
import type { StartChildWorkflowExecutionFailedEventAttributes } from './StartChildWorkflowExecutionFailedEventAttributes';
import type { StartChildWorkflowExecutionInitiatedEventAttributes } from './StartChildWorkflowExecutionInitiatedEventAttributes';
import type { TimerCanceledEventAttributes } from './TimerCanceledEventAttributes';
import type { TimerFiredEventAttributes } from './TimerFiredEventAttributes';
import type { TimerStartedEventAttributes } from './TimerStartedEventAttributes';
import type { UpsertWorkflowSearchAttributesEventAttributes } from './UpsertWorkflowSearchAttributesEventAttributes';
import type { UserMetadata } from './UserMetadata';
import type { WorkflowExecutionCanceledEventAttributes } from './WorkflowExecutionCanceledEventAttributes';
import type { WorkflowExecutionCancelRequestedEventAttributes } from './WorkflowExecutionCancelRequestedEventAttributes';
import type { WorkflowExecutionCompletedEventAttributes } from './WorkflowExecutionCompletedEventAttributes';
import type { WorkflowExecutionContinuedAsNewEventAttributes } from './WorkflowExecutionContinuedAsNewEventAttributes';
import type { WorkflowExecutionFailedEventAttributes } from './WorkflowExecutionFailedEventAttributes';
import type { WorkflowExecutionSignaledEventAttributes } from './WorkflowExecutionSignaledEventAttributes';
import type { WorkflowExecutionStartedEventAttributes } from './WorkflowExecutionStartedEventAttributes';
import type { WorkflowExecutionTerminatedEventAttributes } from './WorkflowExecutionTerminatedEventAttributes';
import type { WorkflowExecutionTimedOutEventAttributes } from './WorkflowExecutionTimedOutEventAttributes';
import type { WorkflowExecutionUpdateAcceptedEventAttributes } from './WorkflowExecutionUpdateAcceptedEventAttributes';
import type { WorkflowExecutionUpdateAdmittedEventAttributes } from './WorkflowExecutionUpdateAdmittedEventAttributes';
import type { WorkflowExecutionUpdateCompletedEventAttributes } from './WorkflowExecutionUpdateCompletedEventAttributes';
import type { WorkflowExecutionUpdateRejectedEventAttributes } from './WorkflowExecutionUpdateRejectedEventAttributes';
import type { WorkflowPropertiesModifiedEventAttributes } from './WorkflowPropertiesModifiedEventAttributes';
import type { WorkflowPropertiesModifiedExternallyEventAttributes } from './WorkflowPropertiesModifiedExternallyEventAttributes';
import type { WorkflowTaskCompletedEventAttributes } from './WorkflowTaskCompletedEventAttributes';
import type { WorkflowTaskFailedEventAttributes } from './WorkflowTaskFailedEventAttributes';
import type { WorkflowTaskScheduledEventAttributes } from './WorkflowTaskScheduledEventAttributes';
import type { WorkflowTaskStartedEventAttributes } from './WorkflowTaskStartedEventAttributes';
import type { WorkflowTaskTimedOutEventAttributes } from './WorkflowTaskTimedOutEventAttributes';
/**
 * History events are the method by which Temporal SDKs advance (or recreate) workflow state.
 * See the `EventType` enum for more info about what each event is for.
 */
export type HistoryEvent = {
    /**
     * Monotonically increasing event number, starts at 1.
     */
    eventId?: string;
    eventTime?: string;
    eventType?: HistoryEvent.eventType;
    /**
     * TODO: What is this? Appears unused by SDKs
     */
    version?: string;
    /**
     * TODO: What is this? Appears unused by SDKs
     */
    taskId?: string;
    /**
     * Set to true when the SDK may ignore the event as it does not impact workflow state or
     * information in any way that the SDK need be concerned with. If an SDK encounters an event
     * type which it does not understand, it must error unless this is true. If it is true, it's
     * acceptable for the event type and/or attributes to be uninterpretable.
     */
    workerMayIgnore?: boolean;
    /**
     * Metadata on the event. This is often carried over from commands and client calls. Most events
     * won't have this information, and how this information is used is dependent upon the interface
     * that reads it.
     *
     * Current well-known uses:
     * * workflow_execution_started_event_attributes - summary and details from start workflow.
     * * timer_started_event_attributes - summary represents an identifier for the timer for use by
     * user interfaces.
     */
    userMetadata?: UserMetadata;
    /**
     * Links associated with the event.
     */
    links?: Array<Link>;
    workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;
    workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;
    workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;
    workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;
    workflowTaskScheduledEventAttributes?: WorkflowTaskScheduledEventAttributes;
    workflowTaskStartedEventAttributes?: WorkflowTaskStartedEventAttributes;
    workflowTaskCompletedEventAttributes?: WorkflowTaskCompletedEventAttributes;
    workflowTaskTimedOutEventAttributes?: WorkflowTaskTimedOutEventAttributes;
    workflowTaskFailedEventAttributes?: WorkflowTaskFailedEventAttributes;
    activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;
    activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;
    activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;
    activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;
    activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;
    timerStartedEventAttributes?: TimerStartedEventAttributes;
    timerFiredEventAttributes?: TimerFiredEventAttributes;
    activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;
    activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;
    timerCanceledEventAttributes?: TimerCanceledEventAttributes;
    markerRecordedEventAttributes?: MarkerRecordedEventAttributes;
    workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;
    workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;
    workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;
    workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
    requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;
    externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;
    workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;
    startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;
    startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;
    childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;
    childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;
    childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;
    childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;
    childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;
    childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;
    signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;
    signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;
    externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;
    upsertWorkflowSearchAttributesEventAttributes?: UpsertWorkflowSearchAttributesEventAttributes;
    workflowExecutionUpdateAcceptedEventAttributes?: WorkflowExecutionUpdateAcceptedEventAttributes;
    workflowExecutionUpdateRejectedEventAttributes?: WorkflowExecutionUpdateRejectedEventAttributes;
    workflowExecutionUpdateCompletedEventAttributes?: WorkflowExecutionUpdateCompletedEventAttributes;
    workflowPropertiesModifiedExternallyEventAttributes?: WorkflowPropertiesModifiedExternallyEventAttributes;
    activityPropertiesModifiedExternallyEventAttributes?: ActivityPropertiesModifiedExternallyEventAttributes;
    workflowPropertiesModifiedEventAttributes?: WorkflowPropertiesModifiedEventAttributes;
    workflowExecutionUpdateAdmittedEventAttributes?: WorkflowExecutionUpdateAdmittedEventAttributes;
    nexusOperationScheduledEventAttributes?: NexusOperationScheduledEventAttributes;
    nexusOperationStartedEventAttributes?: NexusOperationStartedEventAttributes;
    nexusOperationCompletedEventAttributes?: NexusOperationCompletedEventAttributes;
    nexusOperationFailedEventAttributes?: NexusOperationFailedEventAttributes;
    nexusOperationCanceledEventAttributes?: NexusOperationCanceledEventAttributes;
    nexusOperationTimedOutEventAttributes?: NexusOperationTimedOutEventAttributes;
    nexusOperationCancelRequestedEventAttributes?: NexusOperationCancelRequestedEventAttributes;
};
export namespace HistoryEvent {
    export enum eventType {
        EVENT_TYPE_UNSPECIFIED = 'EVENT_TYPE_UNSPECIFIED',
        EVENT_TYPE_WORKFLOW_EXECUTION_STARTED = 'EVENT_TYPE_WORKFLOW_EXECUTION_STARTED',
        EVENT_TYPE_WORKFLOW_EXECUTION_COMPLETED = 'EVENT_TYPE_WORKFLOW_EXECUTION_COMPLETED',
        EVENT_TYPE_WORKFLOW_EXECUTION_FAILED = 'EVENT_TYPE_WORKFLOW_EXECUTION_FAILED',
        EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT = 'EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT',
        EVENT_TYPE_WORKFLOW_TASK_SCHEDULED = 'EVENT_TYPE_WORKFLOW_TASK_SCHEDULED',
        EVENT_TYPE_WORKFLOW_TASK_STARTED = 'EVENT_TYPE_WORKFLOW_TASK_STARTED',
        EVENT_TYPE_WORKFLOW_TASK_COMPLETED = 'EVENT_TYPE_WORKFLOW_TASK_COMPLETED',
        EVENT_TYPE_WORKFLOW_TASK_TIMED_OUT = 'EVENT_TYPE_WORKFLOW_TASK_TIMED_OUT',
        EVENT_TYPE_WORKFLOW_TASK_FAILED = 'EVENT_TYPE_WORKFLOW_TASK_FAILED',
        EVENT_TYPE_ACTIVITY_TASK_SCHEDULED = 'EVENT_TYPE_ACTIVITY_TASK_SCHEDULED',
        EVENT_TYPE_ACTIVITY_TASK_STARTED = 'EVENT_TYPE_ACTIVITY_TASK_STARTED',
        EVENT_TYPE_ACTIVITY_TASK_COMPLETED = 'EVENT_TYPE_ACTIVITY_TASK_COMPLETED',
        EVENT_TYPE_ACTIVITY_TASK_FAILED = 'EVENT_TYPE_ACTIVITY_TASK_FAILED',
        EVENT_TYPE_ACTIVITY_TASK_TIMED_OUT = 'EVENT_TYPE_ACTIVITY_TASK_TIMED_OUT',
        EVENT_TYPE_ACTIVITY_TASK_CANCEL_REQUESTED = 'EVENT_TYPE_ACTIVITY_TASK_CANCEL_REQUESTED',
        EVENT_TYPE_ACTIVITY_TASK_CANCELED = 'EVENT_TYPE_ACTIVITY_TASK_CANCELED',
        EVENT_TYPE_TIMER_STARTED = 'EVENT_TYPE_TIMER_STARTED',
        EVENT_TYPE_TIMER_FIRED = 'EVENT_TYPE_TIMER_FIRED',
        EVENT_TYPE_TIMER_CANCELED = 'EVENT_TYPE_TIMER_CANCELED',
        EVENT_TYPE_WORKFLOW_EXECUTION_CANCEL_REQUESTED = 'EVENT_TYPE_WORKFLOW_EXECUTION_CANCEL_REQUESTED',
        EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED = 'EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED',
        EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED = 'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED',
        EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED = 'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED',
        EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED = 'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED',
        EVENT_TYPE_MARKER_RECORDED = 'EVENT_TYPE_MARKER_RECORDED',
        EVENT_TYPE_WORKFLOW_EXECUTION_SIGNALED = 'EVENT_TYPE_WORKFLOW_EXECUTION_SIGNALED',
        EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED = 'EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED',
        EVENT_TYPE_WORKFLOW_EXECUTION_CONTINUED_AS_NEW = 'EVENT_TYPE_WORKFLOW_EXECUTION_CONTINUED_AS_NEW',
        EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_INITIATED = 'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_INITIATED',
        EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_FAILED = 'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_FAILED',
        EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_STARTED = 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_STARTED',
        EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_COMPLETED = 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_COMPLETED',
        EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_FAILED = 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_FAILED',
        EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_CANCELED = 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_CANCELED',
        EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TIMED_OUT = 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TIMED_OUT',
        EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TERMINATED = 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TERMINATED',
        EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED = 'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED',
        EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED = 'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED',
        EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_SIGNALED = 'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_SIGNALED',
        EVENT_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES = 'EVENT_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES',
        EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ADMITTED = 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ADMITTED',
        EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ACCEPTED = 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ACCEPTED',
        EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_REJECTED = 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_REJECTED',
        EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_COMPLETED = 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_COMPLETED',
        EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED_EXTERNALLY = 'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED_EXTERNALLY',
        EVENT_TYPE_ACTIVITY_PROPERTIES_MODIFIED_EXTERNALLY = 'EVENT_TYPE_ACTIVITY_PROPERTIES_MODIFIED_EXTERNALLY',
        EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED = 'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED',
        EVENT_TYPE_NEXUS_OPERATION_SCHEDULED = 'EVENT_TYPE_NEXUS_OPERATION_SCHEDULED',
        EVENT_TYPE_NEXUS_OPERATION_STARTED = 'EVENT_TYPE_NEXUS_OPERATION_STARTED',
        EVENT_TYPE_NEXUS_OPERATION_COMPLETED = 'EVENT_TYPE_NEXUS_OPERATION_COMPLETED',
        EVENT_TYPE_NEXUS_OPERATION_FAILED = 'EVENT_TYPE_NEXUS_OPERATION_FAILED',
        EVENT_TYPE_NEXUS_OPERATION_CANCELED = 'EVENT_TYPE_NEXUS_OPERATION_CANCELED',
        EVENT_TYPE_NEXUS_OPERATION_TIMED_OUT = 'EVENT_TYPE_NEXUS_OPERATION_TIMED_OUT',
        EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUESTED = 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUESTED',
    }
}

