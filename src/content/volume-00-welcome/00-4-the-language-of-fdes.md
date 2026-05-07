---
id: 00-4-the-language-of-fdes
volume: volume-00-welcome
chapter: 1
number: 4
title: "The Language of FDEs"
subtitle: "Jargon, tribe, and the courage to ask."
estimatedMinutes: 9
prerequisites: [00-3-how-learning-works]
keyTerms: []
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

Every profession develops a private vocabulary. FDE work in 2026 has a particularly fresh vocabulary because much of it was coined in the past three years. Knowing the words is half of fitting into the tribe.

</Section>

<Section label="Some words to start with">

These will appear constantly across the curriculum. You don't need to memorize them now — recognize them when you see them.

- **Scoping.** Turning an ambiguous customer request into a concrete project.
- **Discovery.** The early phase of an engagement, mostly listening.
- **Eval.** A structured test of an AI system's quality.
- **Harness.** The deterministic scaffolding around a probabilistic model — tools, retries, validation, logging.
- **Context engineering.** Curating what enters an LLM's context window. Replaces the older "prompt engineering."
- **RAG.** Retrieval-Augmented Generation. The most common production AI pattern.
- **Embedding.** A vector representation of text used for semantic search.
- **Vector DB.** A database optimized for similarity search over embeddings.
- **MCP.** Model Context Protocol. Anthropic's open protocol for connecting AI to tools/data.
- **Agentic.** AI systems that take actions, not just generate text.
- **Multi-pass generation.** Generating output across several deliberate passes (extract, verify, compose, check).
- **POC, MVP, pilot.** Stages of a customer engagement, in order of formality.
- **Time-to-value.** How long from engagement start to the customer feeling business value.
- **Customer obsession.** A culture phrase at AI labs (especially Anthropic, OpenAI) signaling a customer-first orientation.
- **Trust, product, impact.** Colin Jarvis (OpenAI Head of FDE)'s framework for what an FDE is paid for.
- **Lethal trifecta.** Simon Willison's framework for AI security risks.

The glossary has each of these in detail.

</Section>

<Section label="The unspoken rules of asking">

A thing FDEs rarely say out loud but believe deeply: it is acceptable to ask "what does that word mean?" once. It is not acceptable to pretend you understand and have to ask again later.

In an FDE engagement, customer-side terminology can be obscure too — every industry has its jargon (HEDIS measures in healthcare, T+0 settlement in finance, EFRAG taxonomies in EU sustainability reporting). The strongest FDE move is to ask precisely what the customer means by a term they're using. It signals attention. It prevents miscommunication. It moves the engagement forward.

In an interview, the same rule applies. If a question uses a term you don't know, the strongest response is "*just to make sure we're using this term the same way — could you tell me what you mean by* [word]?" Confidence, not weakness.

</Section>

<Section label="Vocabulary that signals you are not new">

A few small phrasings distinguish someone who's done FDE work from someone who's read about it:

- *"Closing the delta"* — Palantir-origin phrase for the FDE's job: the gap between platform capability and customer need.
- *"Right altitude"* — knowing when to dive into technical detail vs stay at executive level.
- *"Harness engineering"* — the work that makes a probabilistic model production-reliable.
- *"Eval-first"* — the discipline of writing evals before building features.
- *"Time-to-value"* — the customer-relevant metric for engagement success.
- *"Single throat to choke"* — the customer-relations principle of having one accountable owner per problem.

You don't need to use all of these in your first interview. But knowing them when an interviewer says them prevents the awkward silence that signals "this person isn't part of the tribe yet."

</Section>

<FDEConnection>

The fastest way to acquire FDE vocabulary is to read the source material. Three things to read regularly while you go through this curriculum:

1. The Pragmatic Engineer's coverage of FDE / Applied AI roles.
2. Sundeep Teki's blog on FDE interview preparation.
3. The Anthropic, OpenAI, and Palantir engineering blogs.

The vocabulary is dense in those sources because the people writing them are deep in the work. Reading them three times a week for a month and you'll absorb most of the dialect by osmosis.

</FDEConnection>

<Connection
  back={[{ id: '00-3-how-learning-works', title: 'How Learning Actually Works' }]}
  forward={[{ id: '00-5-history-in-brief', title: 'A Brief History of the FDE Role' }]}
>

Next: how the role came to be — Palantir in the early 2010s through OpenAI and Anthropic in 2026. Knowing the history makes the role's shape make sense.

</Connection>
