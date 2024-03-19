/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RampByPercentage } from './RampByPercentage';
/**
 * Assignment rules are applied to *new* Workflow and Activity executions at
 * schedule time to assign them to a Build ID.
 *
 * Assignment rules will not be used in the following cases:
 * - Child Workflows or Continue-As-New Executions who inherit their
 * parent/previous Workflow's assigned Build ID (by setting the
 * `inherit_build_id` flag - default behavior in SDKs when the same Task Queue
 * is used.)
 * - An Activity that inherits the assigned Build ID of its Workflow (by
 * setting the `use_workflow_build_id` flag - default behavior in SDKs
 * when the same Task Queue is used.)
 *
 * In absence of (applicable) redirect rules (`CompatibleBuildIdRedirectRule`s)
 * the task will be dispatched to Workers of the Build ID determined by the
 * assignment rules (or inherited). Otherwise, the final Build ID will be
 * determined by the redirect rules.
 *
 * Once a Workflow completes its first Workflow Task in a particular Build ID it
 * stays in that Build ID regardless of changes to assignment rules. Redirect
 * rules can be used to move the workflow to another compatible Build ID.
 *
 * When using Worker Versioning on a Task Queue, in the steady state,
 * there should typically be a single assignment rule to send all new executions
 * to the latest Build ID. Existence of at least one such "unconditional"
 * rule at all times is enforces by the system, unless the `force` flag is used
 * by the user when replacing/deleting these rules (for exceptional cases).
 *
 * During a deployment, one or more additional rules can be added to assign a
 * subset of the tasks to a new Build ID based on a "ramp percentage".
 *
 * When there are multiple assignment rules for a Task Queue, the rules are
 * evaluated in order, starting from index 0. The first applicable rule will be
 * applied and the rest will be ignored.
 *
 * In the event that no assignment rule is applicable on a task (or the Task
 * Queue is simply not versioned), the tasks will be dispatched to an
 * unversioned Worker.
 */
export type BuildIdAssignmentRule = {
    targetBuildId?: string;
    /**
     * This ramp is useful for gradual Blue/Green deployments (and similar)
     * where you want to send a certain portion of the traffic to the target
     * Build ID.
     */
    percentageRamp?: RampByPercentage;
};
