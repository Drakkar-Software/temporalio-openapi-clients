/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { OperatorServiceService } from './services/OperatorServiceService';
import { WorkflowServiceService } from './services/WorkflowServiceService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class TemporalIOAPIClient {
    public readonly operatorService: OperatorServiceService;
    public readonly workflowService: WorkflowServiceService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '0.0.1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.operatorService = new OperatorServiceService(this.request);
        this.workflowService = new WorkflowServiceService(this.request);
    }
}

