/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountWorkflowExecutionsResponse } from '../models/CountWorkflowExecutionsResponse';
import type { CreateScheduleRequest } from '../models/CreateScheduleRequest';
import type { CreateScheduleResponse } from '../models/CreateScheduleResponse';
import type { DeleteScheduleResponse } from '../models/DeleteScheduleResponse';
import type { DescribeBatchOperationResponse } from '../models/DescribeBatchOperationResponse';
import type { DescribeNamespaceResponse } from '../models/DescribeNamespaceResponse';
import type { DescribeScheduleResponse } from '../models/DescribeScheduleResponse';
import type { DescribeTaskQueueResponse } from '../models/DescribeTaskQueueResponse';
import type { DescribeWorkflowExecutionResponse } from '../models/DescribeWorkflowExecutionResponse';
import type { ExecuteMultiOperationRequest } from '../models/ExecuteMultiOperationRequest';
import type { ExecuteMultiOperationResponse } from '../models/ExecuteMultiOperationResponse';
import type { GetClusterInfoResponse } from '../models/GetClusterInfoResponse';
import type { GetSystemInfoResponse } from '../models/GetSystemInfoResponse';
import type { GetWorkerBuildIdCompatibilityResponse } from '../models/GetWorkerBuildIdCompatibilityResponse';
import type { GetWorkerTaskReachabilityResponse } from '../models/GetWorkerTaskReachabilityResponse';
import type { GetWorkerVersioningRulesResponse } from '../models/GetWorkerVersioningRulesResponse';
import type { GetWorkflowExecutionHistoryResponse } from '../models/GetWorkflowExecutionHistoryResponse';
import type { GetWorkflowExecutionHistoryReverseResponse } from '../models/GetWorkflowExecutionHistoryReverseResponse';
import type { ListArchivedWorkflowExecutionsResponse } from '../models/ListArchivedWorkflowExecutionsResponse';
import type { ListBatchOperationsResponse } from '../models/ListBatchOperationsResponse';
import type { ListNamespacesResponse } from '../models/ListNamespacesResponse';
import type { ListScheduleMatchingTimesResponse } from '../models/ListScheduleMatchingTimesResponse';
import type { ListSchedulesResponse } from '../models/ListSchedulesResponse';
import type { ListWorkflowExecutionsResponse } from '../models/ListWorkflowExecutionsResponse';
import type { PatchScheduleRequest } from '../models/PatchScheduleRequest';
import type { PatchScheduleResponse } from '../models/PatchScheduleResponse';
import type { QueryWorkflowRequest } from '../models/QueryWorkflowRequest';
import type { QueryWorkflowResponse } from '../models/QueryWorkflowResponse';
import type { RecordActivityTaskHeartbeatByIdRequest } from '../models/RecordActivityTaskHeartbeatByIdRequest';
import type { RecordActivityTaskHeartbeatByIdResponse } from '../models/RecordActivityTaskHeartbeatByIdResponse';
import type { RecordActivityTaskHeartbeatRequest } from '../models/RecordActivityTaskHeartbeatRequest';
import type { RecordActivityTaskHeartbeatResponse } from '../models/RecordActivityTaskHeartbeatResponse';
import type { RegisterNamespaceRequest } from '../models/RegisterNamespaceRequest';
import type { RegisterNamespaceResponse } from '../models/RegisterNamespaceResponse';
import type { RequestCancelWorkflowExecutionRequest } from '../models/RequestCancelWorkflowExecutionRequest';
import type { RequestCancelWorkflowExecutionResponse } from '../models/RequestCancelWorkflowExecutionResponse';
import type { ResetWorkflowExecutionRequest } from '../models/ResetWorkflowExecutionRequest';
import type { ResetWorkflowExecutionResponse } from '../models/ResetWorkflowExecutionResponse';
import type { RespondActivityTaskCanceledByIdRequest } from '../models/RespondActivityTaskCanceledByIdRequest';
import type { RespondActivityTaskCanceledByIdResponse } from '../models/RespondActivityTaskCanceledByIdResponse';
import type { RespondActivityTaskCanceledRequest } from '../models/RespondActivityTaskCanceledRequest';
import type { RespondActivityTaskCanceledResponse } from '../models/RespondActivityTaskCanceledResponse';
import type { RespondActivityTaskCompletedByIdRequest } from '../models/RespondActivityTaskCompletedByIdRequest';
import type { RespondActivityTaskCompletedByIdResponse } from '../models/RespondActivityTaskCompletedByIdResponse';
import type { RespondActivityTaskCompletedRequest } from '../models/RespondActivityTaskCompletedRequest';
import type { RespondActivityTaskCompletedResponse } from '../models/RespondActivityTaskCompletedResponse';
import type { RespondActivityTaskFailedByIdRequest } from '../models/RespondActivityTaskFailedByIdRequest';
import type { RespondActivityTaskFailedByIdResponse } from '../models/RespondActivityTaskFailedByIdResponse';
import type { RespondActivityTaskFailedRequest } from '../models/RespondActivityTaskFailedRequest';
import type { RespondActivityTaskFailedResponse } from '../models/RespondActivityTaskFailedResponse';
import type { SignalWithStartWorkflowExecutionRequest } from '../models/SignalWithStartWorkflowExecutionRequest';
import type { SignalWithStartWorkflowExecutionResponse } from '../models/SignalWithStartWorkflowExecutionResponse';
import type { SignalWorkflowExecutionRequest } from '../models/SignalWorkflowExecutionRequest';
import type { SignalWorkflowExecutionResponse } from '../models/SignalWorkflowExecutionResponse';
import type { StartBatchOperationRequest } from '../models/StartBatchOperationRequest';
import type { StartBatchOperationResponse } from '../models/StartBatchOperationResponse';
import type { StartWorkflowExecutionRequest } from '../models/StartWorkflowExecutionRequest';
import type { StartWorkflowExecutionResponse } from '../models/StartWorkflowExecutionResponse';
import type { Status } from '../models/Status';
import type { StopBatchOperationRequest } from '../models/StopBatchOperationRequest';
import type { StopBatchOperationResponse } from '../models/StopBatchOperationResponse';
import type { TerminateWorkflowExecutionRequest } from '../models/TerminateWorkflowExecutionRequest';
import type { TerminateWorkflowExecutionResponse } from '../models/TerminateWorkflowExecutionResponse';
import type { UpdateNamespaceRequest } from '../models/UpdateNamespaceRequest';
import type { UpdateNamespaceResponse } from '../models/UpdateNamespaceResponse';
import type { UpdateScheduleRequest } from '../models/UpdateScheduleRequest';
import type { UpdateScheduleResponse } from '../models/UpdateScheduleResponse';
import type { UpdateWorkflowExecutionRequest } from '../models/UpdateWorkflowExecutionRequest';
import type { UpdateWorkflowExecutionResponse } from '../models/UpdateWorkflowExecutionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkflowServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * GetClusterInfo returns information about temporal cluster
     * @returns GetClusterInfoResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getClusterInfo(): CancelablePromise<GetClusterInfoResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/cluster-info',
        });
    }
    /**
     * ListNamespaces returns the information and configuration for all namespaces.
     * @param pageSize
     * @param nextPageToken
     * @param namespaceFilterIncludeDeleted By default namespaces in NAMESPACE_STATE_DELETED state are not included.
     * Setting include_deleted to true will include deleted namespaces.
     * Note: Namespace is in NAMESPACE_STATE_DELETED state when it was deleted from the system but associated data is not deleted yet.
     * @returns ListNamespacesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listNamespaces(
        pageSize?: number,
        nextPageToken?: string,
        namespaceFilterIncludeDeleted?: boolean,
    ): CancelablePromise<ListNamespacesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces',
            query: {
                'pageSize': pageSize,
                'nextPageToken': nextPageToken,
                'namespaceFilter.includeDeleted': namespaceFilterIncludeDeleted,
            },
        });
    }
    /**
     * RegisterNamespace creates a new namespace which can be used as a container for all resources.
     *
     * A Namespace is a top level entity within Temporal, and is used as a container for resources
     * like workflow executions, task queues, etc. A Namespace acts as a sandbox and provides
     * isolation for all resources within the namespace. All resources belongs to exactly one
     * namespace.
     * @param requestBody
     * @returns RegisterNamespaceResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public registerNamespace(
        requestBody: RegisterNamespaceRequest,
    ): CancelablePromise<RegisterNamespaceResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DescribeNamespace returns the information and configuration for a registered namespace.
     * @param namespace
     * @param id
     * @returns DescribeNamespaceResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public describeNamespace(
        namespace: string,
        id?: string,
    ): CancelablePromise<DescribeNamespaceResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}',
            path: {
                'namespace': namespace,
            },
            query: {
                'id': id,
            },
        });
    }
    /**
     * RespondActivityTaskFailed is called by workers when processing an activity task fails.
     *
     * This results in a new `ACTIVITY_TASK_CANCELED` event being written to the workflow history
     * and a new workflow task created for the workflow. Fails with `NotFound` if the task token is
     * no longer valid due to activity timeout, already being completed, or never having existed.
     * @param namespace
     * @param requestBody
     * @returns RespondActivityTaskCanceledResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskCanceled(
        namespace: string,
        requestBody: RespondActivityTaskCanceledRequest,
    ): CancelablePromise<RespondActivityTaskCanceledResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/activities/cancel',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * See `RecordActivityTaskCanceled`. This version allows clients to record failures by
     * namespace/workflow id/activity id instead of task token.
     *
     * (-- api-linter: core::0136::prepositions=disabled
     * aip.dev/not-precedent: "By" is used to indicate request type. --)
     * @param namespace Namespace of the workflow which scheduled this activity
     * @param requestBody
     * @returns RespondActivityTaskCanceledByIdResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskCanceledById(
        namespace: string,
        requestBody: RespondActivityTaskCanceledByIdRequest,
    ): CancelablePromise<RespondActivityTaskCanceledByIdResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/activities/cancel-by-id',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RespondActivityTaskCompleted is called by workers when they successfully complete an activity
     * task.
     *
     * This results in a new `ACTIVITY_TASK_COMPLETED` event being written to the workflow history
     * and a new workflow task created for the workflow. Fails with `NotFound` if the task token is
     * no longer valid due to activity timeout, already being completed, or never having existed.
     * @param namespace
     * @param requestBody
     * @returns RespondActivityTaskCompletedResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskCompleted(
        namespace: string,
        requestBody: RespondActivityTaskCompletedRequest,
    ): CancelablePromise<RespondActivityTaskCompletedResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/activities/complete',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * See `RecordActivityTaskCompleted`. This version allows clients to record completions by
     * namespace/workflow id/activity id instead of task token.
     *
     * (-- api-linter: core::0136::prepositions=disabled
     * aip.dev/not-precedent: "By" is used to indicate request type. --)
     * @param namespace Namespace of the workflow which scheduled this activity
     * @param requestBody
     * @returns RespondActivityTaskCompletedByIdResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskCompletedById(
        namespace: string,
        requestBody: RespondActivityTaskCompletedByIdRequest,
    ): CancelablePromise<RespondActivityTaskCompletedByIdResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/activities/complete-by-id',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RespondActivityTaskFailed is called by workers when processing an activity task fails.
     *
     * This results in a new `ACTIVITY_TASK_FAILED` event being written to the workflow history and
     * a new workflow task created for the workflow. Fails with `NotFound` if the task token is no
     * longer valid due to activity timeout, already being completed, or never having existed.
     * @param namespace
     * @param requestBody
     * @returns RespondActivityTaskFailedResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskFailed(
        namespace: string,
        requestBody: RespondActivityTaskFailedRequest,
    ): CancelablePromise<RespondActivityTaskFailedResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/activities/fail',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * See `RecordActivityTaskFailed`. This version allows clients to record failures by
     * namespace/workflow id/activity id instead of task token.
     *
     * (-- api-linter: core::0136::prepositions=disabled
     * aip.dev/not-precedent: "By" is used to indicate request type. --)
     * @param namespace Namespace of the workflow which scheduled this activity
     * @param requestBody
     * @returns RespondActivityTaskFailedByIdResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskFailedById(
        namespace: string,
        requestBody: RespondActivityTaskFailedByIdRequest,
    ): CancelablePromise<RespondActivityTaskFailedByIdResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/activities/fail-by-id',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RecordActivityTaskHeartbeat is optionally called by workers while they execute activities.
     *
     * If worker fails to heartbeat within the `heartbeat_timeout` interval for the activity task,
     * then it will be marked as timed out and an `ACTIVITY_TASK_TIMED_OUT` event will be written to
     * the workflow history. Calling `RecordActivityTaskHeartbeat` will fail with `NotFound` in
     * such situations, in that event, the SDK should request cancellation of the activity.
     * @param namespace
     * @param requestBody
     * @returns RecordActivityTaskHeartbeatResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public recordActivityTaskHeartbeat(
        namespace: string,
        requestBody: RecordActivityTaskHeartbeatRequest,
    ): CancelablePromise<RecordActivityTaskHeartbeatResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/activities/heartbeat',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * See `RecordActivityTaskHeartbeat`. This version allows clients to record heartbeats by
     * namespace/workflow id/activity id instead of task token.
     *
     * (-- api-linter: core::0136::prepositions=disabled
     * aip.dev/not-precedent: "By" is used to indicate request type. --)
     * @param namespace Namespace of the workflow which scheduled this activity
     * @param requestBody
     * @returns RecordActivityTaskHeartbeatByIdResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public recordActivityTaskHeartbeatById(
        namespace: string,
        requestBody: RecordActivityTaskHeartbeatByIdRequest,
    ): CancelablePromise<RecordActivityTaskHeartbeatByIdResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/activities/heartbeat-by-id',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ListArchivedWorkflowExecutions is a visibility API to list archived workflow executions in a specific namespace.
     * @param namespace
     * @param pageSize
     * @param nextPageToken
     * @param query
     * @returns ListArchivedWorkflowExecutionsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listArchivedWorkflowExecutions(
        namespace: string,
        pageSize?: number,
        nextPageToken?: string,
        query?: string,
    ): CancelablePromise<ListArchivedWorkflowExecutionsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/archived-workflows',
            path: {
                'namespace': namespace,
            },
            query: {
                'pageSize': pageSize,
                'nextPageToken': nextPageToken,
                'query': query,
            },
        });
    }
    /**
     * ListBatchOperations returns a list of batch operations
     * @param namespace Namespace that contains the batch operation
     * @param pageSize List page size
     * @param nextPageToken Next page token
     * @returns ListBatchOperationsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listBatchOperations(
        namespace: string,
        pageSize?: number,
        nextPageToken?: string,
    ): CancelablePromise<ListBatchOperationsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/batch-operations',
            path: {
                'namespace': namespace,
            },
            query: {
                'pageSize': pageSize,
                'nextPageToken': nextPageToken,
            },
        });
    }
    /**
     * DescribeBatchOperation returns the information about a batch operation
     * @param namespace Namespace that contains the batch operation
     * @param jobId Batch job id
     * @returns DescribeBatchOperationResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public describeBatchOperation(
        namespace: string,
        jobId: string,
    ): CancelablePromise<DescribeBatchOperationResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/batch-operations/{jobId}',
            path: {
                'namespace': namespace,
                'jobId': jobId,
            },
        });
    }
    /**
     * StartBatchOperation starts a new batch operation
     * @param namespace Namespace that contains the batch operation
     * @param jobId Job ID defines the unique ID for the batch job
     * @param requestBody
     * @returns StartBatchOperationResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public startBatchOperation(
        namespace: string,
        jobId: string,
        requestBody: StartBatchOperationRequest,
    ): CancelablePromise<StartBatchOperationResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/batch-operations/{jobId}',
            path: {
                'namespace': namespace,
                'jobId': jobId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * StopBatchOperation stops a batch operation
     * @param namespace Namespace that contains the batch operation
     * @param jobId Batch job id
     * @param requestBody
     * @returns StopBatchOperationResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public stopBatchOperation(
        namespace: string,
        jobId: string,
        requestBody: StopBatchOperationRequest,
    ): CancelablePromise<StopBatchOperationResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/batch-operations/{jobId}/stop',
            path: {
                'namespace': namespace,
                'jobId': jobId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all schedules in a namespace.
     * @param namespace The namespace to list schedules in.
     * @param maximumPageSize How many to return at once.
     * @param nextPageToken Token to get the next page of results.
     * @param query Query to filter schedules.
     * @returns ListSchedulesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listSchedules(
        namespace: string,
        maximumPageSize?: number,
        nextPageToken?: string,
        query?: string,
    ): CancelablePromise<ListSchedulesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/schedules',
            path: {
                'namespace': namespace,
            },
            query: {
                'maximumPageSize': maximumPageSize,
                'nextPageToken': nextPageToken,
                'query': query,
            },
        });
    }
    /**
     * Returns the schedule description and current state of an existing schedule.
     * @param namespace The namespace of the schedule to describe.
     * @param scheduleId The id of the schedule to describe.
     * @returns DescribeScheduleResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public describeSchedule(
        namespace: string,
        scheduleId: string,
    ): CancelablePromise<DescribeScheduleResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
        });
    }
    /**
     * Creates a new schedule.
     * @param namespace The namespace the schedule should be created in.
     * @param scheduleId The id of the new schedule.
     * @param requestBody
     * @returns CreateScheduleResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public createSchedule(
        namespace: string,
        scheduleId: string,
        requestBody: CreateScheduleRequest,
    ): CancelablePromise<CreateScheduleResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a schedule, removing it from the system.
     * @param namespace The namespace of the schedule to delete.
     * @param scheduleId The id of the schedule to delete.
     * @param identity The identity of the client who initiated this request.
     * @returns DeleteScheduleResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public deleteSchedule(
        namespace: string,
        scheduleId: string,
        identity?: string,
    ): CancelablePromise<DeleteScheduleResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
            query: {
                'identity': identity,
            },
        });
    }
    /**
     * Lists matching times within a range.
     * @param namespace The namespace of the schedule to query.
     * @param scheduleId The id of the schedule to query.
     * @param startTime Time range to query.
     * @param endTime
     * @returns ListScheduleMatchingTimesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listScheduleMatchingTimes(
        namespace: string,
        scheduleId: string,
        startTime?: string,
        endTime?: string,
    ): CancelablePromise<ListScheduleMatchingTimesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}/matching-times',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
        });
    }
    /**
     * Makes a specific change to a schedule or triggers an immediate action.
     * @param namespace The namespace of the schedule to patch.
     * @param scheduleId The id of the schedule to patch.
     * @param requestBody
     * @returns PatchScheduleResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public patchSchedule(
        namespace: string,
        scheduleId: string,
        requestBody: PatchScheduleRequest,
    ): CancelablePromise<PatchScheduleResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}/patch',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Changes the configuration or state of an existing schedule.
     * @param namespace The namespace of the schedule to update.
     * @param scheduleId The id of the schedule to update.
     * @param requestBody
     * @returns UpdateScheduleResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public updateSchedule(
        namespace: string,
        scheduleId: string,
        requestBody: UpdateScheduleRequest,
    ): CancelablePromise<UpdateScheduleResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}/update',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deprecated. Use `GetWorkerVersioningRules`.
     * Fetches the worker build id versioning sets for a task queue.
     * @param namespace
     * @param taskQueue Must be set, the task queue to interrogate about worker id compatibility.
     * @param maxSets Limits how many compatible sets will be returned. Specify 1 to only return the current
     * default major version set. 0 returns all sets.
     * @returns GetWorkerBuildIdCompatibilityResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getWorkerBuildIdCompatibility(
        namespace: string,
        taskQueue: string,
        maxSets?: number,
    ): CancelablePromise<GetWorkerBuildIdCompatibilityResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/task-queues/{taskQueue}/worker-build-id-compatibility',
            path: {
                'namespace': namespace,
                'taskQueue': taskQueue,
            },
            query: {
                'maxSets': maxSets,
            },
        });
    }
    /**
     * Fetches the Build ID assignment and redirect rules for a Task Queue.
     * WARNING: Worker Versioning is not yet stable and the API and behavior may change incompatibly.
     * @param namespace
     * @param taskQueue
     * @returns GetWorkerVersioningRulesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getWorkerVersioningRules(
        namespace: string,
        taskQueue: string,
    ): CancelablePromise<GetWorkerVersioningRulesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/task-queues/{taskQueue}/worker-versioning-rules',
            path: {
                'namespace': namespace,
                'taskQueue': taskQueue,
            },
        });
    }
    /**
     * DescribeTaskQueue returns the following information about the target task queue, broken down by Build ID:
     * - List of pollers
     * - Workflow Reachability status
     * - Backlog info for Workflow and/or Activity tasks
     * @param namespace
     * @param taskQueueName
     * @param taskQueueName
     * @param taskQueueKind Default: TASK_QUEUE_KIND_NORMAL.
     * @param taskQueueNormalName Iff kind == TASK_QUEUE_KIND_STICKY, then this field contains the name of
     * the normal task queue that the sticky worker is running on.
     * @param taskQueueType Deprecated. Use `ENHANCED` mode with `task_queue_types`. Ignored in `ENHANCED` mode.
     * If unspecified (TASK_QUEUE_TYPE_UNSPECIFIED), then default value (TASK_QUEUE_TYPE_WORKFLOW) will be used.
     * @param includeTaskQueueStatus Deprecated. Ignored in `ENHANCED` mode.
     * @param apiMode All options except `task_queue_type` and `include_task_queue_status` are only available in the `ENHANCED` mode.
     * @param versionsBuildIds Include specific Build IDs.
     * @param versionsUnversioned Include the unversioned queue.
     * @param versionsAllActive Include all active versions. A version is considered active if, in the last few minutes,
     * it has had new tasks or polls, or it has been the subject of certain task queue API calls.
     * @param taskQueueTypes Task queue types to report info about. If not specified, all types are considered.
     * @param reportStats Report stats for the requested task queue types and versions
     * @param reportPollers Report list of pollers for requested task queue types and versions
     * @param reportTaskReachability Report task reachability for the requested versions and all task types (task reachability is not reported
     * per task type).
     * @returns DescribeTaskQueueResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public describeTaskQueue(
        namespace: string,
        taskQueueName?: string,
        taskQueueKind?: 'TASK_QUEUE_KIND_UNSPECIFIED' | 'TASK_QUEUE_KIND_NORMAL' | 'TASK_QUEUE_KIND_STICKY',
        taskQueueNormalName?: string,
        taskQueueType?: 'TASK_QUEUE_TYPE_UNSPECIFIED' | 'TASK_QUEUE_TYPE_WORKFLOW' | 'TASK_QUEUE_TYPE_ACTIVITY' | 'TASK_QUEUE_TYPE_NEXUS',
        includeTaskQueueStatus?: boolean,
        apiMode?: 'DESCRIBE_TASK_QUEUE_MODE_UNSPECIFIED' | 'DESCRIBE_TASK_QUEUE_MODE_ENHANCED',
        versionsBuildIds?: Array<string>,
        versionsUnversioned?: boolean,
        versionsAllActive?: boolean,
        taskQueueTypes?: Array<'TASK_QUEUE_TYPE_UNSPECIFIED' | 'TASK_QUEUE_TYPE_WORKFLOW' | 'TASK_QUEUE_TYPE_ACTIVITY' | 'TASK_QUEUE_TYPE_NEXUS'>,
        reportStats?: boolean,
        reportPollers?: boolean,
        reportTaskReachability?: boolean,
    ): CancelablePromise<DescribeTaskQueueResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/task-queues/{task_queue.name}',
            path: {
                'namespace': namespace,
                'task_queue.name': taskQueueName,
            },
            query: {
                'taskQueue.name': taskQueueName,
                'taskQueue.kind': taskQueueKind,
                'taskQueue.normalName': taskQueueNormalName,
                'taskQueueType': taskQueueType,
                'includeTaskQueueStatus': includeTaskQueueStatus,
                'apiMode': apiMode,
                'versions.buildIds': versionsBuildIds,
                'versions.unversioned': versionsUnversioned,
                'versions.allActive': versionsAllActive,
                'taskQueueTypes': taskQueueTypes,
                'reportStats': reportStats,
                'reportPollers': reportPollers,
                'reportTaskReachability': reportTaskReachability,
            },
        });
    }
    /**
     * UpdateNamespace is used to update the information and configuration of a registered
     * namespace.
     * @param namespace
     * @param requestBody
     * @returns UpdateNamespaceResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public updateNamespace(
        namespace: string,
        requestBody: UpdateNamespaceRequest,
    ): CancelablePromise<UpdateNamespaceResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/update',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deprecated. Use `DescribeTaskQueue`.
     *
     * Fetches task reachability to determine whether a worker may be retired.
     * The request may specify task queues to query for or let the server fetch all task queues mapped to the given
     * build IDs.
     *
     * When requesting a large number of task queues or all task queues associated with the given build ids in a
     * namespace, all task queues will be listed in the response but some of them may not contain reachability
     * information due to a server enforced limit. When reaching the limit, task queues that reachability information
     * could not be retrieved for will be marked with a single TASK_REACHABILITY_UNSPECIFIED entry. The caller may issue
     * another call to get the reachability for those task queues.
     *
     * Open source users can adjust this limit by setting the server's dynamic config value for
     * `limit.reachabilityTaskQueueScan` with the caveat that this call can strain the visibility store.
     * @param namespace
     * @param buildIds Build ids to retrieve reachability for. An empty string will be interpreted as an unversioned worker.
     * The number of build ids that can be queried in a single API call is limited.
     * Open source users can adjust this limit by setting the server's dynamic config value for
     * `limit.reachabilityQueryBuildIds` with the caveat that this call can strain the visibility store.
     * @param taskQueues Task queues to retrieve reachability for. Leave this empty to query for all task queues associated with given
     * build ids in the namespace.
     * Must specify at least one task queue if querying for an unversioned worker.
     * The number of task queues that the server will fetch reachability information for is limited.
     * See the `GetWorkerTaskReachabilityResponse` documentation for more information.
     * @param reachability Type of reachability to query for.
     * `TASK_REACHABILITY_NEW_WORKFLOWS` is always returned in the response.
     * Use `TASK_REACHABILITY_EXISTING_WORKFLOWS` if your application needs to respond to queries on closed workflows.
     * Otherwise, use `TASK_REACHABILITY_OPEN_WORKFLOWS`. Default is `TASK_REACHABILITY_EXISTING_WORKFLOWS` if left
     * unspecified.
     * See the TaskReachability docstring for information about each enum variant.
     * @returns GetWorkerTaskReachabilityResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getWorkerTaskReachability(
        namespace: string,
        buildIds?: Array<string>,
        taskQueues?: Array<string>,
        reachability?: 'TASK_REACHABILITY_UNSPECIFIED' | 'TASK_REACHABILITY_NEW_WORKFLOWS' | 'TASK_REACHABILITY_EXISTING_WORKFLOWS' | 'TASK_REACHABILITY_OPEN_WORKFLOWS' | 'TASK_REACHABILITY_CLOSED_WORKFLOWS',
    ): CancelablePromise<GetWorkerTaskReachabilityResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/worker-task-reachability',
            path: {
                'namespace': namespace,
            },
            query: {
                'buildIds': buildIds,
                'taskQueues': taskQueues,
                'reachability': reachability,
            },
        });
    }
    /**
     * CountWorkflowExecutions is a visibility API to count of workflow executions in a specific namespace.
     * @param namespace
     * @param query
     * @returns CountWorkflowExecutionsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public countWorkflowExecutions(
        namespace: string,
        query?: string,
    ): CancelablePromise<CountWorkflowExecutionsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/workflow-count',
            path: {
                'namespace': namespace,
            },
            query: {
                'query': query,
            },
        });
    }
    /**
     * ListWorkflowExecutions is a visibility API to list workflow executions in a specific namespace.
     * @param namespace
     * @param pageSize
     * @param nextPageToken
     * @param query
     * @returns ListWorkflowExecutionsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listWorkflowExecutions(
        namespace: string,
        pageSize?: number,
        nextPageToken?: string,
        query?: string,
    ): CancelablePromise<ListWorkflowExecutionsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/workflows',
            path: {
                'namespace': namespace,
            },
            query: {
                'pageSize': pageSize,
                'nextPageToken': nextPageToken,
                'query': query,
            },
        });
    }
    /**
     * ExecuteMultiOperation executes multiple operations within a single workflow.
     *
     * Operations are started atomically, meaning if *any* operation fails to be started, none are,
     * and the request fails. Upon start, the API returns only when *all* operations have a response.
     *
     * Upon failure, it returns `MultiOperationExecutionFailure` where the status code
     * equals the status code of the *first* operation that failed to be started.
     *
     * NOTE: Experimental API.
     * @param namespace
     * @param requestBody
     * @returns ExecuteMultiOperationResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public executeMultiOperation(
        namespace: string,
        requestBody: ExecuteMultiOperationRequest,
    ): CancelablePromise<ExecuteMultiOperationResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/workflows/execute-multi-operation',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DescribeWorkflowExecution returns information about the specified workflow execution.
     * @param namespace
     * @param executionWorkflowId
     * @param executionWorkflowId
     * @param executionRunId
     * @returns DescribeWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public describeWorkflowExecution(
        namespace: string,
        executionWorkflowId?: string,
        executionRunId?: string,
    ): CancelablePromise<DescribeWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/workflows/{execution.workflow_id}',
            path: {
                'namespace': namespace,
                'execution.workflow_id': executionWorkflowId,
            },
            query: {
                'execution.workflowId': executionWorkflowId,
                'execution.runId': executionRunId,
            },
        });
    }
    /**
     * GetWorkflowExecutionHistory returns the history of specified workflow execution. Fails with
     * `NotFound` if the specified workflow execution is unknown to the service.
     * @param namespace
     * @param executionWorkflowId
     * @param executionWorkflowId
     * @param executionRunId
     * @param maximumPageSize
     * @param nextPageToken If a `GetWorkflowExecutionHistoryResponse` or a `PollWorkflowTaskQueueResponse` had one of
     * these, it should be passed here to fetch the next page.
     * @param waitNewEvent If set to true, the RPC call will not resolve until there is a new event which matches
     * the `history_event_filter_type`, or a timeout is hit.
     * @param historyEventFilterType Filter returned events such that they match the specified filter type.
     * Default: HISTORY_EVENT_FILTER_TYPE_ALL_EVENT.
     * @param skipArchival
     * @returns GetWorkflowExecutionHistoryResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getWorkflowExecutionHistory(
        namespace: string,
        executionWorkflowId?: string,
        executionRunId?: string,
        maximumPageSize?: number,
        nextPageToken?: string,
        waitNewEvent?: boolean,
        historyEventFilterType?: 'HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED' | 'HISTORY_EVENT_FILTER_TYPE_ALL_EVENT' | 'HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT',
        skipArchival?: boolean,
    ): CancelablePromise<GetWorkflowExecutionHistoryResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/workflows/{execution.workflow_id}/history',
            path: {
                'namespace': namespace,
                'execution.workflow_id': executionWorkflowId,
            },
            query: {
                'execution.workflowId': executionWorkflowId,
                'execution.runId': executionRunId,
                'maximumPageSize': maximumPageSize,
                'nextPageToken': nextPageToken,
                'waitNewEvent': waitNewEvent,
                'historyEventFilterType': historyEventFilterType,
                'skipArchival': skipArchival,
            },
        });
    }
    /**
     * GetWorkflowExecutionHistoryReverse returns the history of specified workflow execution in reverse
     * order (starting from last event). Fails with`NotFound` if the specified workflow execution is
     * unknown to the service.
     * @param namespace
     * @param executionWorkflowId
     * @param executionWorkflowId
     * @param executionRunId
     * @param maximumPageSize
     * @param nextPageToken
     * @returns GetWorkflowExecutionHistoryReverseResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getWorkflowExecutionHistoryReverse(
        namespace: string,
        executionWorkflowId?: string,
        executionRunId?: string,
        maximumPageSize?: number,
        nextPageToken?: string,
    ): CancelablePromise<GetWorkflowExecutionHistoryReverseResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/workflows/{execution.workflow_id}/history-reverse',
            path: {
                'namespace': namespace,
                'execution.workflow_id': executionWorkflowId,
            },
            query: {
                'execution.workflowId': executionWorkflowId,
                'execution.runId': executionRunId,
                'maximumPageSize': maximumPageSize,
                'nextPageToken': nextPageToken,
            },
        });
    }
    /**
     * QueryWorkflow requests a query be executed for a specified workflow execution.
     * @param namespace
     * @param executionWorkflowId
     * @param queryQueryType
     * @param requestBody
     * @returns QueryWorkflowResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public queryWorkflow(
        namespace: string,
        executionWorkflowId: string,
        queryQueryType: string,
        requestBody: QueryWorkflowRequest,
    ): CancelablePromise<QueryWorkflowResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/workflows/{execution.workflow_id}/query/{query.query_type}',
            path: {
                'namespace': namespace,
                'execution.workflow_id': executionWorkflowId,
                'query.query_type': queryQueryType,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * StartWorkflowExecution starts a new workflow execution.
     *
     * It will create the execution with a `WORKFLOW_EXECUTION_STARTED` event in its history and
     * also schedule the first workflow task. Returns `WorkflowExecutionAlreadyStarted`, if an
     * instance already exists with same workflow id.
     * @param namespace
     * @param workflowId
     * @param requestBody
     * @returns StartWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public startWorkflowExecution(
        namespace: string,
        workflowId: string,
        requestBody: StartWorkflowExecutionRequest,
    ): CancelablePromise<StartWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/workflows/{workflowId}',
            path: {
                'namespace': namespace,
                'workflowId': workflowId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SignalWithStartWorkflowExecution is used to ensure a signal is sent to a workflow, even if
     * it isn't yet started.
     *
     * If the workflow is running, a `WORKFLOW_EXECUTION_SIGNALED` event is recorded in the history
     * and a workflow task is generated.
     *
     * If the workflow is not running or not found, then the workflow is created with
     * `WORKFLOW_EXECUTION_STARTED` and `WORKFLOW_EXECUTION_SIGNALED` events in its history, and a
     * workflow task is generated.
     *
     * (-- api-linter: core::0136::prepositions=disabled
     * aip.dev/not-precedent: "With" is used to indicate combined operation. --)
     * @param namespace
     * @param workflowId
     * @param signalName The workflow author-defined name of the signal to send to the workflow
     * @param requestBody
     * @returns SignalWithStartWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public signalWithStartWorkflowExecution(
        namespace: string,
        workflowId: string,
        signalName: string,
        requestBody: SignalWithStartWorkflowExecutionRequest,
    ): CancelablePromise<SignalWithStartWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/signal-with-start/{signalName}',
            path: {
                'namespace': namespace,
                'workflowId': workflowId,
                'signalName': signalName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RequestCancelWorkflowExecution is called by workers when they want to request cancellation of
     * a workflow execution.
     *
     * This results in a new `WORKFLOW_EXECUTION_CANCEL_REQUESTED` event being written to the
     * workflow history and a new workflow task created for the workflow. It returns success if the requested
     * workflow is already closed. It fails with 'NotFound' if the requested workflow doesn't exist.
     * @param namespace
     * @param workflowExecutionWorkflowId
     * @param requestBody
     * @returns RequestCancelWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public requestCancelWorkflowExecution(
        namespace: string,
        workflowExecutionWorkflowId: string,
        requestBody: RequestCancelWorkflowExecutionRequest,
    ): CancelablePromise<RequestCancelWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/cancel',
            path: {
                'namespace': namespace,
                'workflow_execution.workflow_id': workflowExecutionWorkflowId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ResetWorkflowExecution will reset an existing workflow execution to a specified
     * `WORKFLOW_TASK_COMPLETED` event (exclusive). It will immediately terminate the current
     * execution instance.
     * TODO: Does exclusive here mean *just* the completed event, or also WFT started? Otherwise the task is doomed to time out?
     * @param namespace
     * @param workflowExecutionWorkflowId
     * @param requestBody
     * @returns ResetWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public resetWorkflowExecution(
        namespace: string,
        workflowExecutionWorkflowId: string,
        requestBody: ResetWorkflowExecutionRequest,
    ): CancelablePromise<ResetWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/reset',
            path: {
                'namespace': namespace,
                'workflow_execution.workflow_id': workflowExecutionWorkflowId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SignalWorkflowExecution is used to send a signal to a running workflow execution.
     *
     * This results in a `WORKFLOW_EXECUTION_SIGNALED` event recorded in the history and a workflow
     * task being created for the execution.
     * @param namespace
     * @param workflowExecutionWorkflowId
     * @param signalName The workflow author-defined name of the signal to send to the workflow
     * @param requestBody
     * @returns SignalWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public signalWorkflowExecution(
        namespace: string,
        workflowExecutionWorkflowId: string,
        signalName: string,
        requestBody: SignalWorkflowExecutionRequest,
    ): CancelablePromise<SignalWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/signal/{signalName}',
            path: {
                'namespace': namespace,
                'workflow_execution.workflow_id': workflowExecutionWorkflowId,
                'signalName': signalName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * TerminateWorkflowExecution terminates an existing workflow execution by recording a
     * `WORKFLOW_EXECUTION_TERMINATED` event in the history and immediately terminating the
     * execution instance.
     * @param namespace
     * @param workflowExecutionWorkflowId
     * @param requestBody
     * @returns TerminateWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public terminateWorkflowExecution(
        namespace: string,
        workflowExecutionWorkflowId: string,
        requestBody: TerminateWorkflowExecutionRequest,
    ): CancelablePromise<TerminateWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/terminate',
            path: {
                'namespace': namespace,
                'workflow_execution.workflow_id': workflowExecutionWorkflowId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Invokes the specified Update function on user Workflow code.
     * @param namespace The namespace name of the target Workflow.
     * @param workflowExecutionWorkflowId
     * @param requestInputName
     * @param requestBody
     * @returns UpdateWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public updateWorkflowExecution(
        namespace: string,
        workflowExecutionWorkflowId: string,
        requestInputName: string,
        requestBody: UpdateWorkflowExecutionRequest,
    ): CancelablePromise<UpdateWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/update/{request.input.name}',
            path: {
                'namespace': namespace,
                'workflow_execution.workflow_id': workflowExecutionWorkflowId,
                'request.input.name': requestInputName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GetSystemInfo returns information about the system.
     * @returns GetSystemInfoResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getSystemInfo(): CancelablePromise<GetSystemInfoResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/system-info',
        });
    }
    /**
     * GetClusterInfo returns information about temporal cluster
     * @returns GetClusterInfoResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getClusterInfo1(): CancelablePromise<GetClusterInfoResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cluster',
        });
    }
    /**
     * ListNamespaces returns the information and configuration for all namespaces.
     * @param pageSize
     * @param nextPageToken
     * @param namespaceFilterIncludeDeleted By default namespaces in NAMESPACE_STATE_DELETED state are not included.
     * Setting include_deleted to true will include deleted namespaces.
     * Note: Namespace is in NAMESPACE_STATE_DELETED state when it was deleted from the system but associated data is not deleted yet.
     * @returns ListNamespacesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listNamespaces1(
        pageSize?: number,
        nextPageToken?: string,
        namespaceFilterIncludeDeleted?: boolean,
    ): CancelablePromise<ListNamespacesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cluster/namespaces',
            query: {
                'pageSize': pageSize,
                'nextPageToken': nextPageToken,
                'namespaceFilter.includeDeleted': namespaceFilterIncludeDeleted,
            },
        });
    }
    /**
     * RegisterNamespace creates a new namespace which can be used as a container for all resources.
     *
     * A Namespace is a top level entity within Temporal, and is used as a container for resources
     * like workflow executions, task queues, etc. A Namespace acts as a sandbox and provides
     * isolation for all resources within the namespace. All resources belongs to exactly one
     * namespace.
     * @param requestBody
     * @returns RegisterNamespaceResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public registerNamespace1(
        requestBody: RegisterNamespaceRequest,
    ): CancelablePromise<RegisterNamespaceResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cluster/namespaces',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DescribeNamespace returns the information and configuration for a registered namespace.
     * @param namespace
     * @param id
     * @returns DescribeNamespaceResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public describeNamespace1(
        namespace: string,
        id?: string,
    ): CancelablePromise<DescribeNamespaceResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cluster/namespaces/{namespace}',
            path: {
                'namespace': namespace,
            },
            query: {
                'id': id,
            },
        });
    }
    /**
     * UpdateNamespace is used to update the information and configuration of a registered
     * namespace.
     * @param namespace
     * @param requestBody
     * @returns UpdateNamespaceResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public updateNamespace1(
        namespace: string,
        requestBody: UpdateNamespaceRequest,
    ): CancelablePromise<UpdateNamespaceResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cluster/namespaces/{namespace}/update',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RespondActivityTaskFailed is called by workers when processing an activity task fails.
     *
     * This results in a new `ACTIVITY_TASK_CANCELED` event being written to the workflow history
     * and a new workflow task created for the workflow. Fails with `NotFound` if the task token is
     * no longer valid due to activity timeout, already being completed, or never having existed.
     * @param namespace
     * @param requestBody
     * @returns RespondActivityTaskCanceledResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskCanceled1(
        namespace: string,
        requestBody: RespondActivityTaskCanceledRequest,
    ): CancelablePromise<RespondActivityTaskCanceledResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/activities/cancel',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * See `RecordActivityTaskCanceled`. This version allows clients to record failures by
     * namespace/workflow id/activity id instead of task token.
     *
     * (-- api-linter: core::0136::prepositions=disabled
     * aip.dev/not-precedent: "By" is used to indicate request type. --)
     * @param namespace Namespace of the workflow which scheduled this activity
     * @param requestBody
     * @returns RespondActivityTaskCanceledByIdResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskCanceledById1(
        namespace: string,
        requestBody: RespondActivityTaskCanceledByIdRequest,
    ): CancelablePromise<RespondActivityTaskCanceledByIdResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/activities/cancel-by-id',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RespondActivityTaskCompleted is called by workers when they successfully complete an activity
     * task.
     *
     * This results in a new `ACTIVITY_TASK_COMPLETED` event being written to the workflow history
     * and a new workflow task created for the workflow. Fails with `NotFound` if the task token is
     * no longer valid due to activity timeout, already being completed, or never having existed.
     * @param namespace
     * @param requestBody
     * @returns RespondActivityTaskCompletedResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskCompleted1(
        namespace: string,
        requestBody: RespondActivityTaskCompletedRequest,
    ): CancelablePromise<RespondActivityTaskCompletedResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/activities/complete',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * See `RecordActivityTaskCompleted`. This version allows clients to record completions by
     * namespace/workflow id/activity id instead of task token.
     *
     * (-- api-linter: core::0136::prepositions=disabled
     * aip.dev/not-precedent: "By" is used to indicate request type. --)
     * @param namespace Namespace of the workflow which scheduled this activity
     * @param requestBody
     * @returns RespondActivityTaskCompletedByIdResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskCompletedById1(
        namespace: string,
        requestBody: RespondActivityTaskCompletedByIdRequest,
    ): CancelablePromise<RespondActivityTaskCompletedByIdResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/activities/complete-by-id',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RespondActivityTaskFailed is called by workers when processing an activity task fails.
     *
     * This results in a new `ACTIVITY_TASK_FAILED` event being written to the workflow history and
     * a new workflow task created for the workflow. Fails with `NotFound` if the task token is no
     * longer valid due to activity timeout, already being completed, or never having existed.
     * @param namespace
     * @param requestBody
     * @returns RespondActivityTaskFailedResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskFailed1(
        namespace: string,
        requestBody: RespondActivityTaskFailedRequest,
    ): CancelablePromise<RespondActivityTaskFailedResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/activities/fail',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * See `RecordActivityTaskFailed`. This version allows clients to record failures by
     * namespace/workflow id/activity id instead of task token.
     *
     * (-- api-linter: core::0136::prepositions=disabled
     * aip.dev/not-precedent: "By" is used to indicate request type. --)
     * @param namespace Namespace of the workflow which scheduled this activity
     * @param requestBody
     * @returns RespondActivityTaskFailedByIdResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public respondActivityTaskFailedById1(
        namespace: string,
        requestBody: RespondActivityTaskFailedByIdRequest,
    ): CancelablePromise<RespondActivityTaskFailedByIdResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/activities/fail-by-id',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RecordActivityTaskHeartbeat is optionally called by workers while they execute activities.
     *
     * If worker fails to heartbeat within the `heartbeat_timeout` interval for the activity task,
     * then it will be marked as timed out and an `ACTIVITY_TASK_TIMED_OUT` event will be written to
     * the workflow history. Calling `RecordActivityTaskHeartbeat` will fail with `NotFound` in
     * such situations, in that event, the SDK should request cancellation of the activity.
     * @param namespace
     * @param requestBody
     * @returns RecordActivityTaskHeartbeatResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public recordActivityTaskHeartbeat1(
        namespace: string,
        requestBody: RecordActivityTaskHeartbeatRequest,
    ): CancelablePromise<RecordActivityTaskHeartbeatResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/activities/heartbeat',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * See `RecordActivityTaskHeartbeat`. This version allows clients to record heartbeats by
     * namespace/workflow id/activity id instead of task token.
     *
     * (-- api-linter: core::0136::prepositions=disabled
     * aip.dev/not-precedent: "By" is used to indicate request type. --)
     * @param namespace Namespace of the workflow which scheduled this activity
     * @param requestBody
     * @returns RecordActivityTaskHeartbeatByIdResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public recordActivityTaskHeartbeatById1(
        namespace: string,
        requestBody: RecordActivityTaskHeartbeatByIdRequest,
    ): CancelablePromise<RecordActivityTaskHeartbeatByIdResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/activities/heartbeat-by-id',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ListArchivedWorkflowExecutions is a visibility API to list archived workflow executions in a specific namespace.
     * @param namespace
     * @param pageSize
     * @param nextPageToken
     * @param query
     * @returns ListArchivedWorkflowExecutionsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listArchivedWorkflowExecutions1(
        namespace: string,
        pageSize?: number,
        nextPageToken?: string,
        query?: string,
    ): CancelablePromise<ListArchivedWorkflowExecutionsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/archived-workflows',
            path: {
                'namespace': namespace,
            },
            query: {
                'pageSize': pageSize,
                'nextPageToken': nextPageToken,
                'query': query,
            },
        });
    }
    /**
     * ListBatchOperations returns a list of batch operations
     * @param namespace Namespace that contains the batch operation
     * @param pageSize List page size
     * @param nextPageToken Next page token
     * @returns ListBatchOperationsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listBatchOperations1(
        namespace: string,
        pageSize?: number,
        nextPageToken?: string,
    ): CancelablePromise<ListBatchOperationsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/batch-operations',
            path: {
                'namespace': namespace,
            },
            query: {
                'pageSize': pageSize,
                'nextPageToken': nextPageToken,
            },
        });
    }
    /**
     * DescribeBatchOperation returns the information about a batch operation
     * @param namespace Namespace that contains the batch operation
     * @param jobId Batch job id
     * @returns DescribeBatchOperationResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public describeBatchOperation1(
        namespace: string,
        jobId: string,
    ): CancelablePromise<DescribeBatchOperationResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/batch-operations/{jobId}',
            path: {
                'namespace': namespace,
                'jobId': jobId,
            },
        });
    }
    /**
     * StartBatchOperation starts a new batch operation
     * @param namespace Namespace that contains the batch operation
     * @param jobId Job ID defines the unique ID for the batch job
     * @param requestBody
     * @returns StartBatchOperationResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public startBatchOperation1(
        namespace: string,
        jobId: string,
        requestBody: StartBatchOperationRequest,
    ): CancelablePromise<StartBatchOperationResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/batch-operations/{jobId}',
            path: {
                'namespace': namespace,
                'jobId': jobId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * StopBatchOperation stops a batch operation
     * @param namespace Namespace that contains the batch operation
     * @param jobId Batch job id
     * @param requestBody
     * @returns StopBatchOperationResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public stopBatchOperation1(
        namespace: string,
        jobId: string,
        requestBody: StopBatchOperationRequest,
    ): CancelablePromise<StopBatchOperationResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/batch-operations/{jobId}/stop',
            path: {
                'namespace': namespace,
                'jobId': jobId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all schedules in a namespace.
     * @param namespace The namespace to list schedules in.
     * @param maximumPageSize How many to return at once.
     * @param nextPageToken Token to get the next page of results.
     * @param query Query to filter schedules.
     * @returns ListSchedulesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listSchedules1(
        namespace: string,
        maximumPageSize?: number,
        nextPageToken?: string,
        query?: string,
    ): CancelablePromise<ListSchedulesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/schedules',
            path: {
                'namespace': namespace,
            },
            query: {
                'maximumPageSize': maximumPageSize,
                'nextPageToken': nextPageToken,
                'query': query,
            },
        });
    }
    /**
     * Returns the schedule description and current state of an existing schedule.
     * @param namespace The namespace of the schedule to describe.
     * @param scheduleId The id of the schedule to describe.
     * @returns DescribeScheduleResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public describeSchedule1(
        namespace: string,
        scheduleId: string,
    ): CancelablePromise<DescribeScheduleResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/schedules/{scheduleId}',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
        });
    }
    /**
     * Creates a new schedule.
     * @param namespace The namespace the schedule should be created in.
     * @param scheduleId The id of the new schedule.
     * @param requestBody
     * @returns CreateScheduleResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public createSchedule1(
        namespace: string,
        scheduleId: string,
        requestBody: CreateScheduleRequest,
    ): CancelablePromise<CreateScheduleResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/schedules/{scheduleId}',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a schedule, removing it from the system.
     * @param namespace The namespace of the schedule to delete.
     * @param scheduleId The id of the schedule to delete.
     * @param identity The identity of the client who initiated this request.
     * @returns DeleteScheduleResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public deleteSchedule1(
        namespace: string,
        scheduleId: string,
        identity?: string,
    ): CancelablePromise<DeleteScheduleResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/namespaces/{namespace}/schedules/{scheduleId}',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
            query: {
                'identity': identity,
            },
        });
    }
    /**
     * Lists matching times within a range.
     * @param namespace The namespace of the schedule to query.
     * @param scheduleId The id of the schedule to query.
     * @param startTime Time range to query.
     * @param endTime
     * @returns ListScheduleMatchingTimesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listScheduleMatchingTimes1(
        namespace: string,
        scheduleId: string,
        startTime?: string,
        endTime?: string,
    ): CancelablePromise<ListScheduleMatchingTimesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/schedules/{scheduleId}/matching-times',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
        });
    }
    /**
     * Makes a specific change to a schedule or triggers an immediate action.
     * @param namespace The namespace of the schedule to patch.
     * @param scheduleId The id of the schedule to patch.
     * @param requestBody
     * @returns PatchScheduleResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public patchSchedule1(
        namespace: string,
        scheduleId: string,
        requestBody: PatchScheduleRequest,
    ): CancelablePromise<PatchScheduleResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/schedules/{scheduleId}/patch',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Changes the configuration or state of an existing schedule.
     * @param namespace The namespace of the schedule to update.
     * @param scheduleId The id of the schedule to update.
     * @param requestBody
     * @returns UpdateScheduleResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public updateSchedule1(
        namespace: string,
        scheduleId: string,
        requestBody: UpdateScheduleRequest,
    ): CancelablePromise<UpdateScheduleResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/schedules/{scheduleId}/update',
            path: {
                'namespace': namespace,
                'scheduleId': scheduleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deprecated. Use `GetWorkerVersioningRules`.
     * Fetches the worker build id versioning sets for a task queue.
     * @param namespace
     * @param taskQueue Must be set, the task queue to interrogate about worker id compatibility.
     * @param maxSets Limits how many compatible sets will be returned. Specify 1 to only return the current
     * default major version set. 0 returns all sets.
     * @returns GetWorkerBuildIdCompatibilityResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getWorkerBuildIdCompatibility1(
        namespace: string,
        taskQueue: string,
        maxSets?: number,
    ): CancelablePromise<GetWorkerBuildIdCompatibilityResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/task-queues/{taskQueue}/worker-build-id-compatibility',
            path: {
                'namespace': namespace,
                'taskQueue': taskQueue,
            },
            query: {
                'maxSets': maxSets,
            },
        });
    }
    /**
     * Fetches the Build ID assignment and redirect rules for a Task Queue.
     * WARNING: Worker Versioning is not yet stable and the API and behavior may change incompatibly.
     * @param namespace
     * @param taskQueue
     * @returns GetWorkerVersioningRulesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getWorkerVersioningRules1(
        namespace: string,
        taskQueue: string,
    ): CancelablePromise<GetWorkerVersioningRulesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/task-queues/{taskQueue}/worker-versioning-rules',
            path: {
                'namespace': namespace,
                'taskQueue': taskQueue,
            },
        });
    }
    /**
     * DescribeTaskQueue returns the following information about the target task queue, broken down by Build ID:
     * - List of pollers
     * - Workflow Reachability status
     * - Backlog info for Workflow and/or Activity tasks
     * @param namespace
     * @param taskQueueName
     * @param taskQueueName
     * @param taskQueueKind Default: TASK_QUEUE_KIND_NORMAL.
     * @param taskQueueNormalName Iff kind == TASK_QUEUE_KIND_STICKY, then this field contains the name of
     * the normal task queue that the sticky worker is running on.
     * @param taskQueueType Deprecated. Use `ENHANCED` mode with `task_queue_types`. Ignored in `ENHANCED` mode.
     * If unspecified (TASK_QUEUE_TYPE_UNSPECIFIED), then default value (TASK_QUEUE_TYPE_WORKFLOW) will be used.
     * @param includeTaskQueueStatus Deprecated. Ignored in `ENHANCED` mode.
     * @param apiMode All options except `task_queue_type` and `include_task_queue_status` are only available in the `ENHANCED` mode.
     * @param versionsBuildIds Include specific Build IDs.
     * @param versionsUnversioned Include the unversioned queue.
     * @param versionsAllActive Include all active versions. A version is considered active if, in the last few minutes,
     * it has had new tasks or polls, or it has been the subject of certain task queue API calls.
     * @param taskQueueTypes Task queue types to report info about. If not specified, all types are considered.
     * @param reportStats Report stats for the requested task queue types and versions
     * @param reportPollers Report list of pollers for requested task queue types and versions
     * @param reportTaskReachability Report task reachability for the requested versions and all task types (task reachability is not reported
     * per task type).
     * @returns DescribeTaskQueueResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public describeTaskQueue1(
        namespace: string,
        taskQueueName?: string,
        taskQueueKind?: 'TASK_QUEUE_KIND_UNSPECIFIED' | 'TASK_QUEUE_KIND_NORMAL' | 'TASK_QUEUE_KIND_STICKY',
        taskQueueNormalName?: string,
        taskQueueType?: 'TASK_QUEUE_TYPE_UNSPECIFIED' | 'TASK_QUEUE_TYPE_WORKFLOW' | 'TASK_QUEUE_TYPE_ACTIVITY' | 'TASK_QUEUE_TYPE_NEXUS',
        includeTaskQueueStatus?: boolean,
        apiMode?: 'DESCRIBE_TASK_QUEUE_MODE_UNSPECIFIED' | 'DESCRIBE_TASK_QUEUE_MODE_ENHANCED',
        versionsBuildIds?: Array<string>,
        versionsUnversioned?: boolean,
        versionsAllActive?: boolean,
        taskQueueTypes?: Array<'TASK_QUEUE_TYPE_UNSPECIFIED' | 'TASK_QUEUE_TYPE_WORKFLOW' | 'TASK_QUEUE_TYPE_ACTIVITY' | 'TASK_QUEUE_TYPE_NEXUS'>,
        reportStats?: boolean,
        reportPollers?: boolean,
        reportTaskReachability?: boolean,
    ): CancelablePromise<DescribeTaskQueueResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/task-queues/{task_queue.name}',
            path: {
                'namespace': namespace,
                'task_queue.name': taskQueueName,
            },
            query: {
                'taskQueue.name': taskQueueName,
                'taskQueue.kind': taskQueueKind,
                'taskQueue.normalName': taskQueueNormalName,
                'taskQueueType': taskQueueType,
                'includeTaskQueueStatus': includeTaskQueueStatus,
                'apiMode': apiMode,
                'versions.buildIds': versionsBuildIds,
                'versions.unversioned': versionsUnversioned,
                'versions.allActive': versionsAllActive,
                'taskQueueTypes': taskQueueTypes,
                'reportStats': reportStats,
                'reportPollers': reportPollers,
                'reportTaskReachability': reportTaskReachability,
            },
        });
    }
    /**
     * Deprecated. Use `DescribeTaskQueue`.
     *
     * Fetches task reachability to determine whether a worker may be retired.
     * The request may specify task queues to query for or let the server fetch all task queues mapped to the given
     * build IDs.
     *
     * When requesting a large number of task queues or all task queues associated with the given build ids in a
     * namespace, all task queues will be listed in the response but some of them may not contain reachability
     * information due to a server enforced limit. When reaching the limit, task queues that reachability information
     * could not be retrieved for will be marked with a single TASK_REACHABILITY_UNSPECIFIED entry. The caller may issue
     * another call to get the reachability for those task queues.
     *
     * Open source users can adjust this limit by setting the server's dynamic config value for
     * `limit.reachabilityTaskQueueScan` with the caveat that this call can strain the visibility store.
     * @param namespace
     * @param buildIds Build ids to retrieve reachability for. An empty string will be interpreted as an unversioned worker.
     * The number of build ids that can be queried in a single API call is limited.
     * Open source users can adjust this limit by setting the server's dynamic config value for
     * `limit.reachabilityQueryBuildIds` with the caveat that this call can strain the visibility store.
     * @param taskQueues Task queues to retrieve reachability for. Leave this empty to query for all task queues associated with given
     * build ids in the namespace.
     * Must specify at least one task queue if querying for an unversioned worker.
     * The number of task queues that the server will fetch reachability information for is limited.
     * See the `GetWorkerTaskReachabilityResponse` documentation for more information.
     * @param reachability Type of reachability to query for.
     * `TASK_REACHABILITY_NEW_WORKFLOWS` is always returned in the response.
     * Use `TASK_REACHABILITY_EXISTING_WORKFLOWS` if your application needs to respond to queries on closed workflows.
     * Otherwise, use `TASK_REACHABILITY_OPEN_WORKFLOWS`. Default is `TASK_REACHABILITY_EXISTING_WORKFLOWS` if left
     * unspecified.
     * See the TaskReachability docstring for information about each enum variant.
     * @returns GetWorkerTaskReachabilityResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getWorkerTaskReachability1(
        namespace: string,
        buildIds?: Array<string>,
        taskQueues?: Array<string>,
        reachability?: 'TASK_REACHABILITY_UNSPECIFIED' | 'TASK_REACHABILITY_NEW_WORKFLOWS' | 'TASK_REACHABILITY_EXISTING_WORKFLOWS' | 'TASK_REACHABILITY_OPEN_WORKFLOWS' | 'TASK_REACHABILITY_CLOSED_WORKFLOWS',
    ): CancelablePromise<GetWorkerTaskReachabilityResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/worker-task-reachability',
            path: {
                'namespace': namespace,
            },
            query: {
                'buildIds': buildIds,
                'taskQueues': taskQueues,
                'reachability': reachability,
            },
        });
    }
    /**
     * CountWorkflowExecutions is a visibility API to count of workflow executions in a specific namespace.
     * @param namespace
     * @param query
     * @returns CountWorkflowExecutionsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public countWorkflowExecutions1(
        namespace: string,
        query?: string,
    ): CancelablePromise<CountWorkflowExecutionsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/workflow-count',
            path: {
                'namespace': namespace,
            },
            query: {
                'query': query,
            },
        });
    }
    /**
     * ListWorkflowExecutions is a visibility API to list workflow executions in a specific namespace.
     * @param namespace
     * @param pageSize
     * @param nextPageToken
     * @param query
     * @returns ListWorkflowExecutionsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listWorkflowExecutions1(
        namespace: string,
        pageSize?: number,
        nextPageToken?: string,
        query?: string,
    ): CancelablePromise<ListWorkflowExecutionsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/workflows',
            path: {
                'namespace': namespace,
            },
            query: {
                'pageSize': pageSize,
                'nextPageToken': nextPageToken,
                'query': query,
            },
        });
    }
    /**
     * ExecuteMultiOperation executes multiple operations within a single workflow.
     *
     * Operations are started atomically, meaning if *any* operation fails to be started, none are,
     * and the request fails. Upon start, the API returns only when *all* operations have a response.
     *
     * Upon failure, it returns `MultiOperationExecutionFailure` where the status code
     * equals the status code of the *first* operation that failed to be started.
     *
     * NOTE: Experimental API.
     * @param namespace
     * @param requestBody
     * @returns ExecuteMultiOperationResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public executeMultiOperation1(
        namespace: string,
        requestBody: ExecuteMultiOperationRequest,
    ): CancelablePromise<ExecuteMultiOperationResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/workflows/execute-multi-operation',
            path: {
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DescribeWorkflowExecution returns information about the specified workflow execution.
     * @param namespace
     * @param executionWorkflowId
     * @param executionWorkflowId
     * @param executionRunId
     * @returns DescribeWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public describeWorkflowExecution1(
        namespace: string,
        executionWorkflowId?: string,
        executionRunId?: string,
    ): CancelablePromise<DescribeWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/workflows/{execution.workflow_id}',
            path: {
                'namespace': namespace,
                'execution.workflow_id': executionWorkflowId,
            },
            query: {
                'execution.workflowId': executionWorkflowId,
                'execution.runId': executionRunId,
            },
        });
    }
    /**
     * GetWorkflowExecutionHistory returns the history of specified workflow execution. Fails with
     * `NotFound` if the specified workflow execution is unknown to the service.
     * @param namespace
     * @param executionWorkflowId
     * @param executionWorkflowId
     * @param executionRunId
     * @param maximumPageSize
     * @param nextPageToken If a `GetWorkflowExecutionHistoryResponse` or a `PollWorkflowTaskQueueResponse` had one of
     * these, it should be passed here to fetch the next page.
     * @param waitNewEvent If set to true, the RPC call will not resolve until there is a new event which matches
     * the `history_event_filter_type`, or a timeout is hit.
     * @param historyEventFilterType Filter returned events such that they match the specified filter type.
     * Default: HISTORY_EVENT_FILTER_TYPE_ALL_EVENT.
     * @param skipArchival
     * @returns GetWorkflowExecutionHistoryResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getWorkflowExecutionHistory1(
        namespace: string,
        executionWorkflowId?: string,
        executionRunId?: string,
        maximumPageSize?: number,
        nextPageToken?: string,
        waitNewEvent?: boolean,
        historyEventFilterType?: 'HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED' | 'HISTORY_EVENT_FILTER_TYPE_ALL_EVENT' | 'HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT',
        skipArchival?: boolean,
    ): CancelablePromise<GetWorkflowExecutionHistoryResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/workflows/{execution.workflow_id}/history',
            path: {
                'namespace': namespace,
                'execution.workflow_id': executionWorkflowId,
            },
            query: {
                'execution.workflowId': executionWorkflowId,
                'execution.runId': executionRunId,
                'maximumPageSize': maximumPageSize,
                'nextPageToken': nextPageToken,
                'waitNewEvent': waitNewEvent,
                'historyEventFilterType': historyEventFilterType,
                'skipArchival': skipArchival,
            },
        });
    }
    /**
     * GetWorkflowExecutionHistoryReverse returns the history of specified workflow execution in reverse
     * order (starting from last event). Fails with`NotFound` if the specified workflow execution is
     * unknown to the service.
     * @param namespace
     * @param executionWorkflowId
     * @param executionWorkflowId
     * @param executionRunId
     * @param maximumPageSize
     * @param nextPageToken
     * @returns GetWorkflowExecutionHistoryReverseResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getWorkflowExecutionHistoryReverse1(
        namespace: string,
        executionWorkflowId?: string,
        executionRunId?: string,
        maximumPageSize?: number,
        nextPageToken?: string,
    ): CancelablePromise<GetWorkflowExecutionHistoryReverseResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/namespaces/{namespace}/workflows/{execution.workflow_id}/history-reverse',
            path: {
                'namespace': namespace,
                'execution.workflow_id': executionWorkflowId,
            },
            query: {
                'execution.workflowId': executionWorkflowId,
                'execution.runId': executionRunId,
                'maximumPageSize': maximumPageSize,
                'nextPageToken': nextPageToken,
            },
        });
    }
    /**
     * QueryWorkflow requests a query be executed for a specified workflow execution.
     * @param namespace
     * @param executionWorkflowId
     * @param queryQueryType
     * @param requestBody
     * @returns QueryWorkflowResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public queryWorkflow1(
        namespace: string,
        executionWorkflowId: string,
        queryQueryType: string,
        requestBody: QueryWorkflowRequest,
    ): CancelablePromise<QueryWorkflowResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/workflows/{execution.workflow_id}/query/{query.query_type}',
            path: {
                'namespace': namespace,
                'execution.workflow_id': executionWorkflowId,
                'query.query_type': queryQueryType,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * StartWorkflowExecution starts a new workflow execution.
     *
     * It will create the execution with a `WORKFLOW_EXECUTION_STARTED` event in its history and
     * also schedule the first workflow task. Returns `WorkflowExecutionAlreadyStarted`, if an
     * instance already exists with same workflow id.
     * @param namespace
     * @param workflowId
     * @param requestBody
     * @returns StartWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public startWorkflowExecution1(
        namespace: string,
        workflowId: string,
        requestBody: StartWorkflowExecutionRequest,
    ): CancelablePromise<StartWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/workflows/{workflowId}',
            path: {
                'namespace': namespace,
                'workflowId': workflowId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SignalWithStartWorkflowExecution is used to ensure a signal is sent to a workflow, even if
     * it isn't yet started.
     *
     * If the workflow is running, a `WORKFLOW_EXECUTION_SIGNALED` event is recorded in the history
     * and a workflow task is generated.
     *
     * If the workflow is not running or not found, then the workflow is created with
     * `WORKFLOW_EXECUTION_STARTED` and `WORKFLOW_EXECUTION_SIGNALED` events in its history, and a
     * workflow task is generated.
     *
     * (-- api-linter: core::0136::prepositions=disabled
     * aip.dev/not-precedent: "With" is used to indicate combined operation. --)
     * @param namespace
     * @param workflowId
     * @param signalName The workflow author-defined name of the signal to send to the workflow
     * @param requestBody
     * @returns SignalWithStartWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public signalWithStartWorkflowExecution1(
        namespace: string,
        workflowId: string,
        signalName: string,
        requestBody: SignalWithStartWorkflowExecutionRequest,
    ): CancelablePromise<SignalWithStartWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/workflows/{workflowId}/signal-with-start/{signalName}',
            path: {
                'namespace': namespace,
                'workflowId': workflowId,
                'signalName': signalName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RequestCancelWorkflowExecution is called by workers when they want to request cancellation of
     * a workflow execution.
     *
     * This results in a new `WORKFLOW_EXECUTION_CANCEL_REQUESTED` event being written to the
     * workflow history and a new workflow task created for the workflow. It returns success if the requested
     * workflow is already closed. It fails with 'NotFound' if the requested workflow doesn't exist.
     * @param namespace
     * @param workflowExecutionWorkflowId
     * @param requestBody
     * @returns RequestCancelWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public requestCancelWorkflowExecution1(
        namespace: string,
        workflowExecutionWorkflowId: string,
        requestBody: RequestCancelWorkflowExecutionRequest,
    ): CancelablePromise<RequestCancelWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/cancel',
            path: {
                'namespace': namespace,
                'workflow_execution.workflow_id': workflowExecutionWorkflowId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ResetWorkflowExecution will reset an existing workflow execution to a specified
     * `WORKFLOW_TASK_COMPLETED` event (exclusive). It will immediately terminate the current
     * execution instance.
     * TODO: Does exclusive here mean *just* the completed event, or also WFT started? Otherwise the task is doomed to time out?
     * @param namespace
     * @param workflowExecutionWorkflowId
     * @param requestBody
     * @returns ResetWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public resetWorkflowExecution1(
        namespace: string,
        workflowExecutionWorkflowId: string,
        requestBody: ResetWorkflowExecutionRequest,
    ): CancelablePromise<ResetWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/reset',
            path: {
                'namespace': namespace,
                'workflow_execution.workflow_id': workflowExecutionWorkflowId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SignalWorkflowExecution is used to send a signal to a running workflow execution.
     *
     * This results in a `WORKFLOW_EXECUTION_SIGNALED` event recorded in the history and a workflow
     * task being created for the execution.
     * @param namespace
     * @param workflowExecutionWorkflowId
     * @param signalName The workflow author-defined name of the signal to send to the workflow
     * @param requestBody
     * @returns SignalWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public signalWorkflowExecution1(
        namespace: string,
        workflowExecutionWorkflowId: string,
        signalName: string,
        requestBody: SignalWorkflowExecutionRequest,
    ): CancelablePromise<SignalWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/signal/{signalName}',
            path: {
                'namespace': namespace,
                'workflow_execution.workflow_id': workflowExecutionWorkflowId,
                'signalName': signalName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * TerminateWorkflowExecution terminates an existing workflow execution by recording a
     * `WORKFLOW_EXECUTION_TERMINATED` event in the history and immediately terminating the
     * execution instance.
     * @param namespace
     * @param workflowExecutionWorkflowId
     * @param requestBody
     * @returns TerminateWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public terminateWorkflowExecution1(
        namespace: string,
        workflowExecutionWorkflowId: string,
        requestBody: TerminateWorkflowExecutionRequest,
    ): CancelablePromise<TerminateWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/terminate',
            path: {
                'namespace': namespace,
                'workflow_execution.workflow_id': workflowExecutionWorkflowId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Invokes the specified Update function on user Workflow code.
     * @param namespace The namespace name of the target Workflow.
     * @param workflowExecutionWorkflowId
     * @param requestInputName
     * @param requestBody
     * @returns UpdateWorkflowExecutionResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public updateWorkflowExecution1(
        namespace: string,
        workflowExecutionWorkflowId: string,
        requestInputName: string,
        requestBody: UpdateWorkflowExecutionRequest,
    ): CancelablePromise<UpdateWorkflowExecutionResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/update/{request.input.name}',
            path: {
                'namespace': namespace,
                'workflow_execution.workflow_id': workflowExecutionWorkflowId,
                'request.input.name': requestInputName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GetSystemInfo returns information about the system.
     * @returns GetSystemInfoResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getSystemInfo1(): CancelablePromise<GetSystemInfoResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/system-info',
        });
    }
}
