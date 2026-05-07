---
id: 03-1-design-under-constraints
volume: volume-03-system-design
chapter: 1
number: 1
title: "System Design Under Constraints"
subtitle: "Why FDE system design is different from textbook system design."
estimatedMinutes: 11
prerequisites: []
keyTerms: []
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

System design questions in textbooks tend to be toy: "design a URL shortener." FDE system design is real. The customer has constraints — compliance, budget, latency, integration with their existing stack — and the design has to accommodate those, not just be elegant in a vacuum.

This volume is about designing under real constraints. Volume 4 covers the AI engineering stack itself; this volume covers the design surrounding it.

</Section>

<Section label="The constraint stack">

Real customer engagements have a stack of constraints, each of which can override an "elegant" design choice:

**1. Compliance.** HIPAA, SOC2, FERPA, NIST, PCI DSS. Each comes with specific requirements about where data can live, who can access it, what audit trails must exist.

**2. Cloud/on-prem.** Some customers can use any cloud. Some are AWS-only. Some are Azure GCC High (US government). Some are fully on-prem (defense contractors). Some are hybrid.

**3. Identity.** The customer has an existing identity system (Okta, Azure AD, Active Directory). Your system must integrate with it, not replace it.

**4. Latency.** Some applications can tolerate seconds. Some need sub-100ms. The latency budget shapes architecture significantly.

**5. Cost.** Both predictable monthly cost and per-request cost. Customer finance teams care about both.

**6. Existing systems.** The customer has data warehouses, CRMs, document stores, monitoring stacks. Your system has to interact with these without rewriting them.

**7. Operational maturity.** Some customers can run a Kubernetes cluster competently. Some can barely manage a managed service. The customer's ops capacity shapes what's deployable.

A good FDE design accounts for all seven from the start. A bad design picks the architecture first and then tries to bolt on constraint compliance.

</Section>

<DecisionTree
  title="Cloud vs on-prem decision"
  root={{
    question: 'Where can the customer run AI workloads?',
    branches: [
      { label: 'Public cloud, no restrictions', outcome: <>AWS / Azure / GCP. Use managed services aggressively. Standard architecture patterns apply.</> },
      { label: 'Public cloud with data residency', outcome: <>Use the cloud's regional/sovereign offerings. Constrain data flow. Document the residency boundary explicitly.</> },
      { label: 'Hybrid: some on-prem, some cloud', outcome: <>Most common. Carefully separate which data goes where. Often: data on-prem, inference cloud (with data anonymization at the boundary).</> },
      { label: 'Fully on-prem / airgapped', outcome: <>Open-source models (Llama 3.x, Qwen) on customer GPUs. Heavier engineering lift; significant cost; but compliance is easier because data never leaves.</> },
    ],
  }}
  caption="The first branch shapes everything else."
/>

<Section label="The pattern: design backwards from constraints">

Senior FDEs don't start with a blank slate and design the ideal system. They start with the constraints and let the design emerge from them.

Step-by-step:
1. List the constraints (the seven above plus any specifics).
2. For each constraint, identify the *forbidden* design choices and the *required* ones.
3. The space that remains is your design space.
4. Within that space, optimize for whatever matters most (cost, latency, simplicity).

Example. Customer is a healthcare provider. Constraints:
- HIPAA compliance: data must stay in a HIPAA-eligible region.
- AWS-only (their cloud commitment).
- Existing identity is Okta.
- Latency: 2 seconds is acceptable.
- Cost: <$10K/mo at projected usage.
- Existing systems: PHI in S3 with KMS encryption.
- Ops: small data team, cannot run K8s.

Forbidden: GCP, Azure (cloud-only). Self-managed Kubernetes (ops capacity). Sub-second latency (over-engineering).

Required: HIPAA-eligible AWS region (us-east-1 with HIPAA BAA, or us-east-2). Okta integration. PHI handling matching their existing controls.

Design space: AWS managed services (ECS or App Runner for compute, S3 for storage, Cognito or direct Okta SAML for auth, Bedrock or direct Anthropic API for LLM). Managed RAG with OpenSearch Serverless or Pinecone with HIPAA BAA. Architecture is now substantially constrained, in a good way — fewer choices to make wrong.

</Section>

<ArchitectureSketch title="A constrained healthcare RAG deployment" width={620} height={260}>
  <Box x={20} y={30} w={120} h={50} label="Doctor" sub="laptop / EHR" />
  <Box x={200} y={30} w={150} h={50} label="App service" sub="ECS Fargate" color="primary" />
  <Box x={400} y={30} w={150} h={50} label="LLM" sub="Anthropic API" color="customer" />
  <Box x={20} y={120} w={120} h={50} label="Okta" sub="identity" color="history" />
  <Box x={200} y={120} w={150} h={50} label="Vector DB" sub="OpenSearch Serverless" color="history" />
  <Box x={400} y={120} w={150} h={50} label="PHI store" sub="S3 + KMS" color="etymology" />
  <Box x={200} y={210} w={150} h={40} label="Eval pipeline" sub="nightly" color="primary" />

  <Arrow x1={140} y1={55} x2={200} y2={55} />
  <Arrow x1={350} y1={55} x2={400} y2={55} />
  <Arrow x1={140} y1={145} x2={200} y2={70} label="OIDC" />
  <Arrow x1={275} y1={80} x2={275} y2={120} />
  <Arrow x1={350} y1={145} x2={400} y2={145} />
  <Arrow x1={275} y1={170} x2={275} y2={210} />
</ArchitectureSketch>

The architecture writes itself once the constraints are clear. The interesting design decisions then become: which embedding model, what chunking strategy, how to handle PHI redaction at the LLM boundary. Those are AI-engineering decisions, which Volume 4 covers.

<Connection
  forward={[]}
>

Volume 3 continues with cloud-vs-on-prem patterns, compliance integration, latency budgeting, cost modeling, and integration with customer identity systems.

</Connection>
