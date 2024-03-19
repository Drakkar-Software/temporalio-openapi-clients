/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNexusEndpointRequest } from '../models/CreateNexusEndpointRequest';
import type { CreateNexusEndpointResponse } from '../models/CreateNexusEndpointResponse';
import type { DeleteNexusEndpointResponse } from '../models/DeleteNexusEndpointResponse';
import type { GetNexusEndpointResponse } from '../models/GetNexusEndpointResponse';
import type { ListNexusEndpointsResponse } from '../models/ListNexusEndpointsResponse';
import type { ListSearchAttributesResponse } from '../models/ListSearchAttributesResponse';
import type { Status } from '../models/Status';
import type { UpdateNexusEndpointRequest } from '../models/UpdateNexusEndpointRequest';
import type { UpdateNexusEndpointResponse } from '../models/UpdateNexusEndpointResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OperatorServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * ListSearchAttributes returns comprehensive information about search attributes.
     * @param namespace
     * @returns ListSearchAttributesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listSearchAttributes(
        namespace: string,
    ): CancelablePromise<ListSearchAttributesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/search-attributes',
            path: {
                'namespace': namespace,
            },
        });
    }
    /**
     * List all Nexus endpoints for the cluster, sorted by ID in ascending order. Set page_token in the request to the
     * next_page_token field of the previous response to get the next page of results. An empty next_page_token
     * indicates that there are no more results. During pagination, a newly added service with an ID lexicographically
     * earlier than the previous page's last endpoint's ID may be missed.
     * @param pageSize
     * @param nextPageToken To get the next page, pass in `ListNexusEndpointsResponse.next_page_token` from the previous page's
     * response, the token will be empty if there's no other page.
     * Note: the last page may be empty if the total number of endpoints registered is a multiple of the page size.
     * @param name Name of the incoming endpoint to filter on - optional. Specifying this will result in zero or one results.
     * (-- api-linter: core::203::field-behavior-required=disabled
     * aip.dev/not-precedent: Not following linter rules. --)
     * @returns ListNexusEndpointsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listNexusEndpoints(
        pageSize?: number,
        nextPageToken?: string,
        name?: string,
    ): CancelablePromise<ListNexusEndpointsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/nexus/endpoints',
            query: {
                'pageSize': pageSize,
                'nextPageToken': nextPageToken,
                'name': name,
            },
        });
    }
    /**
     * Create a Nexus endpoint. This will fail if an endpoint with the same name is already registered with a status of
     * ALREADY_EXISTS.
     * Returns the created endpoint with its initial version. You may use this version for subsequent updates.
     * @param requestBody
     * @returns CreateNexusEndpointResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public createNexusEndpoint(
        requestBody: CreateNexusEndpointRequest,
    ): CancelablePromise<CreateNexusEndpointResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/nexus/endpoints',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a registered Nexus endpoint by ID. The returned version can be used for optimistic updates.
     * @param id Server-generated unique endpoint ID.
     * @returns GetNexusEndpointResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getNexusEndpoint(
        id: string,
    ): CancelablePromise<GetNexusEndpointResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/nexus/endpoints/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Delete an incoming Nexus service by ID.
     * @param id Server-generated unique endpoint ID.
     * @param version Data version for this endpoint. Must match current version.
     * @returns DeleteNexusEndpointResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public deleteNexusEndpoint(
        id: string,
        version?: string,
    ): CancelablePromise<DeleteNexusEndpointResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/nexus/endpoints/{id}',
            path: {
                'id': id,
            },
            query: {
                'version': version,
            },
        });
    }
    /**
     * Optimistically update a Nexus endpoint based on provided version as obtained via the `GetNexusEndpoint` or
     * `ListNexusEndpointResponse` APIs. This will fail with a status of FAILED_PRECONDITION if the version does not
     * match.
     * Returns the updated endpoint with its updated version. You may use this version for subsequent updates. You don't
     * need to increment the version yourself. The server will increment the version for you after each update.
     * @param id Server-generated unique endpoint ID.
     * @param requestBody
     * @returns UpdateNexusEndpointResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public updateNexusEndpoint(
        id: string,
        requestBody: UpdateNexusEndpointRequest,
    ): CancelablePromise<UpdateNexusEndpointResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/nexus/endpoints/{id}/update',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ListSearchAttributes returns comprehensive information about search attributes.
     * @param namespace
     * @returns ListSearchAttributesResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listSearchAttributes1(
        namespace: string,
    ): CancelablePromise<ListSearchAttributesResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cluster/namespaces/{namespace}/search-attributes',
            path: {
                'namespace': namespace,
            },
        });
    }
    /**
     * List all Nexus endpoints for the cluster, sorted by ID in ascending order. Set page_token in the request to the
     * next_page_token field of the previous response to get the next page of results. An empty next_page_token
     * indicates that there are no more results. During pagination, a newly added service with an ID lexicographically
     * earlier than the previous page's last endpoint's ID may be missed.
     * @param pageSize
     * @param nextPageToken To get the next page, pass in `ListNexusEndpointsResponse.next_page_token` from the previous page's
     * response, the token will be empty if there's no other page.
     * Note: the last page may be empty if the total number of endpoints registered is a multiple of the page size.
     * @param name Name of the incoming endpoint to filter on - optional. Specifying this will result in zero or one results.
     * (-- api-linter: core::203::field-behavior-required=disabled
     * aip.dev/not-precedent: Not following linter rules. --)
     * @returns ListNexusEndpointsResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public listNexusEndpoints1(
        pageSize?: number,
        nextPageToken?: string,
        name?: string,
    ): CancelablePromise<ListNexusEndpointsResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cluster/nexus/endpoints',
            query: {
                'pageSize': pageSize,
                'nextPageToken': nextPageToken,
                'name': name,
            },
        });
    }
    /**
     * Create a Nexus endpoint. This will fail if an endpoint with the same name is already registered with a status of
     * ALREADY_EXISTS.
     * Returns the created endpoint with its initial version. You may use this version for subsequent updates.
     * @param requestBody
     * @returns CreateNexusEndpointResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public createNexusEndpoint1(
        requestBody: CreateNexusEndpointRequest,
    ): CancelablePromise<CreateNexusEndpointResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cluster/nexus/endpoints',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a registered Nexus endpoint by ID. The returned version can be used for optimistic updates.
     * @param id Server-generated unique endpoint ID.
     * @returns GetNexusEndpointResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public getNexusEndpoint1(
        id: string,
    ): CancelablePromise<GetNexusEndpointResponse | Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cluster/nexus/endpoints/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Delete an incoming Nexus service by ID.
     * @param id Server-generated unique endpoint ID.
     * @param version Data version for this endpoint. Must match current version.
     * @returns DeleteNexusEndpointResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public deleteNexusEndpoint1(
        id: string,
        version?: string,
    ): CancelablePromise<DeleteNexusEndpointResponse | Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cluster/nexus/endpoints/{id}',
            path: {
                'id': id,
            },
            query: {
                'version': version,
            },
        });
    }
    /**
     * Optimistically update a Nexus endpoint based on provided version as obtained via the `GetNexusEndpoint` or
     * `ListNexusEndpointResponse` APIs. This will fail with a status of FAILED_PRECONDITION if the version does not
     * match.
     * Returns the updated endpoint with its updated version. You may use this version for subsequent updates. You don't
     * need to increment the version yourself. The server will increment the version for you after each update.
     * @param id Server-generated unique endpoint ID.
     * @param requestBody
     * @returns UpdateNexusEndpointResponse OK
     * @returns Status Default error response
     * @throws ApiError
     */
    public updateNexusEndpoint1(
        id: string,
        requestBody: UpdateNexusEndpointRequest,
    ): CancelablePromise<UpdateNexusEndpointResponse | Status> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cluster/nexus/endpoints/{id}/update',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
