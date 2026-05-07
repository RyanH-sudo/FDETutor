---
id: 06-1-when-agents
volume: volume-06-agentic
chapter: 1
number: 1
title: "When to Use Agents (and When Not To)"
subtitle: "Workflows are simpler. Agents are harder. Pick deliberately."
estimatedMinutes: 11
prerequisites: []
keyTerms: [agentic, harness]
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

"Agentic AI" is one of the buzziest phrases of 2025-2026. Customers want agents. Product teams want agents. Investors fund agent startups. As a senior FDE, your job is sometimes to *talk a customer out of using an agent* when a simpler workflow would do better.

This lesson covers when agents earn their keep and when they don't.

</Section>

<Section label="Workflow vs agent — the distinction">

A *workflow* is deterministic. The control flow is hardcoded. The LLM is called at specific points to perform specific transformations. Example: "extract entities from this document, then rank them by importance, then summarize the top 5."

An *agent* has the model in the driver's seat. Given tools and a goal, the model chooses which tools to call in which order, observes results, decides next steps. Example: "find me information about company X — you can search the web, query our internal docs, and call the financial API."

Workflows are simpler to build, easier to debug, more predictable in cost and latency. Agents are more flexible, can handle open-ended tasks, but are harder to debug and have less predictable cost/latency.

</Section>

<DecisionTree
  title="Agent or workflow?"
  root={{
    question: 'Can you write down the steps in advance?',
    branches: [
      { label: 'Yes — same steps every time', outcome: <><strong>Workflow.</strong> Hardcode the control flow. Use the LLM only where it adds value (extraction, summarization, classification).</> },
      { label: 'Sort of — some branching but bounded', outcome: <><strong>Workflow with branches.</strong> Hardcode the structure with explicit branches. The LLM picks branches; the structure is fixed.</> },
      { label: 'No — the steps depend on what we find', outcome: <><strong>Agent.</strong> Provide tools, let the model orchestrate. Accept the cost and complexity. Build an extensive harness around it.</> },
    ],
  }}
  caption="Default to workflows. Use agents only when the open-endedness genuinely requires them."
/>

<Section label="Why workflows are usually better">

A few reasons workflows beat agents in practice:

**1. Cost predictability.** A workflow has a known number of LLM calls. An agent might call the model 3 times or 30 times depending on the task. The cost variance for agents is high.

**2. Latency predictability.** Same reason. A user waiting for an agent answer might wait 5 seconds or 5 minutes.

**3. Debuggability.** When a workflow fails, you can isolate which step failed. When an agent fails, the failure could be at any of dozens of model invocations.

**4. Eval simplicity.** Workflows have well-defined inputs and outputs at each step. Each step can be evaluated independently. Agent evaluations are end-to-end and harder.

**5. Customer trust.** Customers can audit workflow steps explicitly. Agents are opaque.

The general rule: *if you can write down the steps, write them down*. Don't put the model in charge of deciding the orchestration unless the orchestration genuinely needs to be dynamic.

</Section>

<Section label="When agents earn their keep">

Some tasks genuinely require agentic behavior:

- **Open-ended research.** "Find me information about company X" can't be predicted in advance — depends on what's found at each step.
- **Customer support with diverse tickets.** Different tickets need different tool calls. A workflow with branches gets unwieldy beyond a certain complexity.
- **Code generation with iteration.** "Generate code, run tests, debug failures, repeat" needs the model to react to test outputs.
- **Data exploration.** "Look at this dataset and tell me what's interesting" — the model needs to inspect, hypothesize, query, refine.

In each case, the open-endedness is genuine. A workflow would either over-constrain (missing real cases) or sprawl uncontrollably with branches.

</Section>

<Section label="The harness">

Even when you go with an agent, you don't ship the bare model + tools. You ship a *harness* — the deterministic scaffolding around the agent that makes it reliable.

A harness includes:
- **Bounded retries** — if a tool call fails, retry up to N times, then escalate.
- **Step limits** — terminate the agent after K steps to bound cost and latency.
- **Validation** — verify tool outputs before passing them back to the model.
- **Logging and tracing** — record every step for debugging and auditing.
- **Human-in-the-loop checkpoints** — for high-stakes actions, pause for human approval.
- **Guardrails** — refuse certain tool combinations (the lethal trifecta!).
- **Eval infrastructure** — measure agent quality continuously.

A bare agent is a research demo. An agent + harness is a production system. The harness often takes 5-10x more engineering effort than the agent itself.

</Section>

<FDEConnection>

When a customer asks "can you build us an agent?", the senior FDE response is: "let's understand what you actually need. Sometimes a simpler workflow does the job better. If we genuinely need agentic behavior, we'll build it — but with a substantial harness because production agents are real engineering."

This response is honest, calibrated, and sets the customer's expectations correctly. Many engagements that start with "build an agent" end with "we built a workflow with one branch where the model picks tools" — and the customer gets a more reliable system at lower cost.

</FDEConnection>

<Connection
  forward={[]}
>

Volume 6 continues with tool design, multi-pass generation patterns, MCP servers, and harness engineering in detail.

</Connection>
