import { TemporalIOAPIClient } from "../../client/typescript/index";

async function fetchWorkflows() {
  const client = new TemporalIOAPIClient({
    BASE: process.env.TEMPORAL_API_URL,
    HEADERS: { "Authorization": `Bearer ${process.env.TEMPORAL_API_KEY}` } // https://pennylane.readme.io/reference/company-api-key
  });

  const workflows = await client.workflowService.listWorkflowExecutions(process.env.TEMPORAL_NAMESPACE || '');
  console.log(workflows);
}

fetchWorkflows();