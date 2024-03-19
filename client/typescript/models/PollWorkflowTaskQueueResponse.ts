/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { History } from './History';
import type { Message } from './Message';
import type { TaskQueue } from './TaskQueue';
import type { WorkflowExecution } from './WorkflowExecution';
import type { WorkflowQuery } from './WorkflowQuery';
import type { WorkflowType } from './WorkflowType';
export type PollWorkflowTaskQueueResponse = {
    /**
     * A unique identifier for this task
     */
    taskToken?: string;
    workflowExecution?: WorkflowExecution;
    workflowType?: WorkflowType;
    /**
     * The last workflow task started event which was processed by some worker for this execution.
     * Will be zero if no task has ever started.
     */
    previousStartedEventId?: string;
    /**
     * The id of the most recent workflow task started event, which will have been generated as a
     * result of this poll request being served. Will be zero if the task
     * does not contain any events which would advance history (no new WFT started).
     * Currently this can happen for queries.
     */
    startedEventId?: string;
    /**
     * Starting at 1, the number of attempts to complete this task by any worker.
     */
    attempt?: number;
    /**
     * A hint that there are more tasks already present in this task queue
     * partition. Can be used to prioritize draining a sticky queue.
     *
     * Specifically, the returned number is the number of tasks remaining in
     * the in-memory buffer for this partition, which is currently capped at
     * 1000. Because sticky queues only have one partition, this number is
     * more useful when draining them. Normal queues, typically having more than one
     * partition, will return a number representing only some portion of the
     * overall backlog. Subsequent RPCs may not hit the same partition as
     * this call.
     */
    backlogCountHint?: string;
    /**
     * The history for this workflow, which will either be complete or partial. Partial histories
     * are sent to workers who have signaled that they are using a sticky queue when completing
     * a workflow task.
     */
    history?: History;
    /**
     * Will be set if there are more history events than were included in this response. Such events
     * should be fetched via `GetWorkflowExecutionHistory`.
     */
    nextPageToken?: string;
    /**
     * Legacy queries appear in this field. The query must be responded to via
     * `RespondQueryTaskCompleted`. If the workflow is already closed (queries are permitted on
     * closed workflows) then the `history` field will be populated with the entire history. It
     * may also be populated if this task originates on a non-sticky queue.
     */
    query?: WorkflowQuery;
    /**
     * The task queue this task originated from, which will always be the original non-sticky name
     * for the queue, even if this response came from polling a sticky queue.
     */
    workflowExecutionTaskQueue?: TaskQueue;
    /**
     * When this task was scheduled by the server
     */
    scheduledTime?: string;
    /**
     * When the current workflow task started event was generated, meaning the current attempt.
     */
    startedTime?: string;
    /**
     * Queries that should be executed after applying the history in this task. Responses should be
     * attached to `RespondWorkflowTaskCompletedRequest::query_results`
     */
    queries?: Record<string, WorkflowQuery>;
    /**
     * Protocol messages piggybacking on a WFT as a transport
     */
    messages?: Array<Message>;
};

