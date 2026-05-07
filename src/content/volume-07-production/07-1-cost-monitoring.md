---
id: 07-1-cost-monitoring
volume: volume-07-production
chapter: 1
number: 1
title: "Cost Monitoring in Production AI"
subtitle: "What an FDE needs to know about LLM cost at scale."
estimatedMinutes: 10
prerequisites: []
keyTerms: []
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

LLM costs are different from traditional infrastructure costs. They're *per-request* and they scale linearly with usage. An AI feature that costs $0.10 per query at 1,000 queries/day costs $36,500/year. At 100,000 queries/day, $3.65M/year. The math is simple but the implications are significant.

FDEs think about cost differently from traditional product engineers. Cost is a first-class design constraint, not an afterthought.

</Section>

<Section label="The cost model">

LLM API costs have several components:

**Input tokens.** Charged per million tokens of input. Anthropic Claude Opus is roughly $15-30/M input tokens; Sonnet is $3-6/M; Haiku is $0.25-0.80/M. Numbers vary by year and tier.

**Output tokens.** Charged separately, usually 4-5x more than input. Long outputs are expensive.

**Cached tokens.** If you reuse a long prefix (system prompt + RAG context), prompt caching can reduce input cost 5-10x for the cached portion.

**Vector DB costs.** Per-stored-vector and per-query. Typically modest compared to LLM costs.

**Embedding costs.** Cheap relative to generation. OpenAI's text-embedding-3-small is $0.02/M tokens.

**Compute costs.** If you self-host, you pay GPU rental directly — typically $1-5/hour per GPU hour, depending on the GPU.

For a typical RAG application:
- ~1,500 input tokens per query (system prompt + retrieved chunks + user message)
- ~500 output tokens per query (the answer)
- Using Claude Sonnet: ~$0.005-0.008 per query
- 100K queries/day: ~$500-800/day, $15K-25K/month

Compare to fixed infrastructure costs: that $25K/month is roughly 10x what the underlying servers cost. The LLM is the dominant cost.

</Section>

<Section label="The levers for reducing cost">

Senior FDEs know several ways to reduce LLM costs:

**1. Smaller models.** Use Haiku for simple tasks; reserve Opus for hard ones. A 4-tier strategy (Opus → Sonnet → Haiku → cached/cached) is common.

**2. Prompt caching.** If your system prompt is long and repeated, caching can save 80-90% of input cost on the cached portion. Anthropic's API supports this directly.

**3. Shorter outputs.** Cap `max_tokens`. Use structured outputs to enforce conciseness.

**4. Batching.** For non-realtime workloads, Anthropic's batch API offers ~50% discount.

**5. Better retrieval (for RAG).** If you can reduce the number of chunks retrieved without quality loss, you cut input cost proportionally.

**6. Eval-driven model selection.** For each request type, eval Haiku vs Sonnet vs Opus. Use the smallest model that meets the quality bar. Often Haiku is enough for 80% of requests.

**7. Tiered routing.** Send easy requests to Haiku; route hard ones to Opus. A small classifier (or rules) makes the routing decision.

</Section>

<Section label="Cost observability">

You can't optimize what you don't measure. A production AI system needs cost observability:

- **Per-request cost tracking.** Log token usage and cost for every request.
- **Per-customer cost (in multi-tenant systems).** Know which customer drives which costs.
- **Per-feature cost.** Which feature in the product drives the most cost?
- **Anomaly alerts.** If today's cost is 3x yesterday's, something's wrong (a customer in a loop, a regression).

Tools: Anthropic and OpenAI both expose token counts in API responses. Internal logging captures these. Visualization in Grafana, Datadog, or whatever observability stack the customer uses.

</Section>

<Section label="The 'cost-per-task' framing">

Different from cost-per-token. Cost-per-task is what customers actually care about.

Examples:
- Cost-per-resolved-ticket: total LLM cost / number of tickets handled by AI
- Cost-per-document-reviewed: total LLM cost / docs reviewed
- Cost-per-customer-onboarded: total LLM cost / customers onboarded

These metrics anchor the LLM cost to *business value*. If cost-per-resolved-ticket is $0.50 and the customer's average labor cost per ticket is $5, the AI is delivering 90% cost reduction. If cost-per-resolved-ticket is $5, the AI is at parity. If it's $50, the AI is making things worse.

In customer conversations, frame in cost-per-task. Customers respond to that, not to "cost per million tokens." Translating between the two is part of the FDE's job.

</Section>

<FDEConnection>

When proposing AI features to customers, build the cost model into the proposal. Show: per-request cost, scaling assumptions, projected monthly cost at expected volume. Show three scenarios — conservative, base, aggressive growth.

This conversion of LLM economics into customer-friendly cost projections is one of the senior FDE's high-value contributions. Customers can't easily do it themselves; they need the FDE to translate.

</FDEConnection>

<Connection
  forward={[]}
>

Volume 7 continues with monitoring AI quality, scaling patterns, incident response, and observability for AI systems.

</Connection>
