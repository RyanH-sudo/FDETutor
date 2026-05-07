---
id: 05-1-rag-introduction
volume: volume-05-rag
chapter: 1
number: 1
title: "RAG — Why It Wins, and Where It Fails"
subtitle: "The most common production AI deployment pattern, and the failure modes you'll meet."
estimatedMinutes: 11
prerequisites: []
keyTerms: [rag, embedding]
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

Volume 5 is RAG — Retrieval-Augmented Generation. RAG is the most common production AI deployment pattern in 2026. Most customer engagements end up using some form of RAG. Understanding it deeply is essential.

This first lesson is the conceptual introduction. Subsequent lessons cover chunking, retrieval, generation, evaluation, and failure modes in detail.

</Section>

<Section label="What problem RAG solves">

LLMs have a knowledge cutoff and limited context. They can't know your customer's internal documents, recent news, or proprietary data unless you provide it.

RAG solves this by *retrieving relevant information at query time and including it in the LLM's context*. The model still does the answering — it just has the facts it needs sitting in front of it.

The two-step process:
1. **Retrieval.** Given a user query, find the most relevant chunks from a knowledge base.
2. **Generation.** Pass those chunks to the LLM along with the query, ask it to answer using those chunks.

That's it. The complexity is in how you do each step well.

</Section>

<Section label="Why RAG wins">

Compared to alternatives:

**Compared to fine-tuning a model on customer data:** RAG is cheaper, faster to update (just re-index), and handles new information without retraining. Fine-tuning is reserved for cases where you need the model to learn a *style* or *behavior*, not facts.

**Compared to dumping all data in the context window:** Even with 200K+ context windows, dumping everything is wasteful (high cost) and degrades quality (long-context performance is worse than focused-context performance). RAG selects only what's relevant.

**Compared to traditional keyword search:** RAG retrieves by semantic meaning, not keyword match. A query like "what's our PTO policy" finds relevant documents even if they say "vacation entitlement" or "time off."

**Compared to a flat database query:** RAG handles unstructured documents (PDFs, web pages, transcripts) without requiring you to structure them first.

</Section>

<Section label="The reference architecture">

<ArchitectureSketch title="Reference RAG architecture" width={600} height={260}>
  <Box x={20} y={30} w={120} h={50} label="User" sub="query" />
  <Box x={200} y={30} w={130} h={50} label="Retriever" sub="orchestrator" color="primary" />
  <Box x={380} y={30} w={130} h={50} label="LLM" sub="generation" color="customer" />

  <Box x={200} y={120} w={130} h={50} label="Vector DB" sub="embeddings" color="history" />
  <Box x={380} y={120} w={130} h={50} label="Doc store" sub="raw chunks" color="etymology" />

  <Box x={20} y={210} w={120} h={50} label="Indexer" sub="background" color="primary" />
  <Box x={200} y={210} w={310} h={50} label="Source documents" sub="customer's S3 / SharePoint / wiki / DB" color="etymology" />

  <Arrow x1={140} y1={55} x2={200} y2={55} />
  <Arrow x1={330} y1={55} x2={380} y2={55} />
  <Arrow x1={265} y1={80} x2={265} y2={120} label="search" />
  <Arrow x1={330} y1={145} x2={380} y2={145} />
  <Arrow x1={140} y1={235} x2={200} y2={235} />
  <Arrow x1={355} y1={210} x2={265} y2={170} />
</ArchitectureSketch>

Two paths:
- **Indexing path (background).** Source documents → indexer → embeddings stored in vector DB, raw chunks stored in doc store. Runs periodically.
- **Query path (synchronous).** User query → retriever embeds the query, searches vector DB, fetches relevant chunks from doc store, sends to LLM with the query, returns answer.

The architecture is simple. The art is in the details of each box.

</Section>

<Section label="Where RAG fails (the patterns)">

Failure mode 1: **The right chunk isn't retrieved.** The user asks about X, but the chunk about X uses different wording, so the embedding doesn't match. Symptom: LLM answers with "I don't know" or hallucinates. Fix: better chunking, better embeddings, hybrid search (semantic + keyword), reranking.

Failure mode 2: **The retrieved chunks are correct but ambiguous.** The chunks have the information but require synthesis or interpretation. The LLM gets confused. Symptom: incomplete or muddled answers. Fix: clearer chunking boundaries, more chunks (top-K higher), reranking.

Failure mode 3: **The user's question is bad.** Vague queries retrieve poor matches. Symptom: scattered, irrelevant chunks. Fix: query rewriting (have the LLM rewrite the user's query before search), conversational follow-up.

Failure mode 4: **The model ignores the context.** Despite having relevant chunks, the model answers from its training data instead. Often hallucinates. Symptom: answer doesn't cite the chunks; doesn't match what's there. Fix: more explicit prompting ("Answer only using the provided context. If not in the context, say 'I don't know'"), better context formatting.

Failure mode 5: **Stale data.** The index hasn't been updated; the chunks are old. Symptom: answers reference outdated info. Fix: indexing automation, freshness monitoring.

Failure mode 6: **The chunks are too small.** Relevant context is split across multiple chunks; only some retrieved. Symptom: incomplete answers. Fix: larger chunks with overlap, hierarchical chunking, parent-document retrieval.

Failure mode 7: **The chunks are too big.** Each chunk has multiple topics; only the matched topic is relevant. Symptom: noisy retrieval, wasted context budget. Fix: smaller chunks, semantic chunking, reranking.

Recognizing these failure modes by looking at production traces is one of the most valuable RAG-engineering skills. We'll cover each in detail in subsequent lessons.

</Section>

<FDEConnection>

When deploying RAG to a customer, the engagement *will* hit several of these failure modes during the pilot. The senior FDE doesn't try to anticipate all of them upfront — that's over-engineering. Instead, you build a working baseline RAG, run it against the customer's actual queries, observe the failure modes that appear in their data, and iterate.

The pattern: simple baseline → measure → identify dominant failure mode → fix → measure → identify next dominant failure mode → fix. The "right" RAG architecture for any customer is the one that's been iterated against their actual data, not the one designed in the abstract.

</FDEConnection>

<Connection
  forward={[]}
>

Volume 5 continues with chunking strategies, retrieval techniques, generation patterns, and RAG evaluations.

</Connection>
