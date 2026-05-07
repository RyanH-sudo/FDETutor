---
id: 04-1-how-llms-actually-work
volume: volume-04-ai-stack
chapter: 1
number: 1
title: "How LLMs Actually Work"
subtitle: "Enough mental model to ship with — not the math."
estimatedMinutes: 12
prerequisites: []
keyTerms: [llm, foundation model]
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

You don't need to derive the transformer architecture from scratch. You need a working mental model — enough to design systems, debug failures, and explain to customers what's happening. This lesson gives you that.

</Section>

<Section label="The fundamental operation">

An LLM is, mechanically, a function: it takes a sequence of tokens and returns a probability distribution over the next token.

That's the whole job. Generate one token at a time, sampling from the distribution. Append the new token to the sequence. Generate the next. Repeat until the model emits an end-of-text token or hits a length limit.

Every interesting LLM behavior — instruction following, reasoning, code generation, refusal, hallucination — emerges from this single operation, repeated many times, with parameters trained on huge amounts of text and then fine-tuned with human feedback.

</Section>

<Section label="What's a token?">

A token is a chunk of text — usually a word or a piece of a word. The exact tokenization scheme varies by model. Common patterns:

- "the" is one token
- " hello" (with leading space) is one token
- "Antoine" might be one token or two
- "    " (long whitespace) might be one token
- Code like `def __init__` is multiple tokens

Models have a fixed vocabulary (typically 50,000-200,000 tokens). The tokenizer maps text to token IDs and back.

Token count matters because:
1. **Context windows** are measured in tokens. A 200K-token context window holds about 150,000 words.
2. **Cost** is per token (input and output billed separately).
3. **Latency** is roughly proportional to output tokens (each token requires a forward pass).

You can run a tokenizer in Python:

<CodeRunner
  initial={`# A simulated tokenization (no internet for tiktoken in Pyodide).
# Real tokenizers split text into model-specific token IDs.

text = "Hello, FDE world! Let's count tokens."
# Approximate: 1 token per ~4 characters of English.
estimated_tokens = len(text) // 4
print(f"Text: {text}")
print(f"Length in chars: {len(text)}")
print(f"Approx tokens: {estimated_tokens}")
print(f"Real count would be measured with model-specific tokenizer.")`}
  caption="In real code, you'd use anthropic.Anthropic().count_tokens() or tiktoken for OpenAI. The 4-chars-per-token rule of thumb works for rough English text."
/>

</Section>

<Section label="What 'training' means">

The model has billions of parameters (Claude Opus is rumored to have ~500B; Llama 3.1 405B has 405B). These parameters are learned during training.

Training has two main phases:

**Pretraining.** The model is shown trillions of tokens of text from the internet, books, code, and curated sources. For each chunk, it predicts the next token and the parameters adjust to make correct predictions more likely. After pretraining, the model can generate fluent text but doesn't follow instructions reliably.

**Post-training (RLHF + alignment).** Human feedback steers the model toward following instructions, refusing harmful requests, and matching desired behavior. This is what turns a "raw" pretrained model into Claude or ChatGPT.

Important: training is *one-time*. After training, the model parameters are frozen. The model doesn't learn from your conversations. Each conversation starts fresh; what looks like "memory" is actually just sending past messages back into the context window.

</Section>

<Section label="What LLMs are good at">

The capabilities that emerge from this training:

- **Pattern completion.** Given a pattern, continue it convincingly.
- **Following instructions.** When you ask for something, the model does it (within safety bounds).
- **Reasoning over given context.** Given facts in the prompt, the model can synthesize and conclude.
- **Format generation.** Code, JSON, markdown, structured outputs.
- **Translation and rewriting.** Between languages, between styles, between formats.
- **Summarization.** Long text → short text capturing key points.

</Section>

<Section label="What LLMs are bad at">

The places where LLMs fail and you have to engineer around them:

- **Math.** Especially multi-step arithmetic. Even "compute 23 * 47" can fail. Use tool-use or external math libraries.
- **Counting.** "How many times does the letter 'r' appear in 'strawberry'?" — surprisingly hard. Tokenization makes counting characters non-trivial.
- **Recent facts.** The model's training has a cutoff date. Anything after that is unknown unless you provide it in the context.
- **Stable hallucination.** When the model is uncertain, it often generates plausible-sounding but wrong information rather than admitting uncertainty.
- **Following counts of items.** "Generate exactly 7 examples" often returns 5 or 9.
- **Long-range coherence.** Over very long generations, the model may drift from the original task.
- **Reflection on its own errors.** The model often won't realize it's wrong unless you tell it explicitly.

The job of FDE engineering is largely *working around these failure modes* — using RAG for facts, tool-use for math, evals to detect hallucination, multi-pass generation to catch drift, structured outputs to enforce format.

</Section>

<Section label="The 'context is everything' principle">

Modern LLMs have huge context windows (Claude has 200K-1M tokens depending on tier). This changes the engineering shape significantly.

Rather than fine-tuning a model for a specific task (expensive, brittle, slow to iterate), modern engineering puts the relevant information in the *context* — the prompt sent with each query. The model uses that context to answer.

This is why "context engineering" replaced "prompt engineering" as the dominant term. Most production AI systems' value comes from *what you put in the context window* — retrieved documents, system prompts, tool schemas, user history. The choice of which context to include and how to format it is more impactful than tweaking the prompt phrasing.

</Section>

<FDEConnection>

When a customer says "the AI is wrong about X," the FDE's first question is almost always: *was X in the context?* If yes, it's a model-comprehension issue (rare with frontier models on clear text). If no, it's a context-engineering issue — the system didn't retrieve or include the relevant information. This is where the engineering happens.

The mantra: *don't tune prompts, fix context*. 90% of "bad LLM output" problems are actually missing-context problems in disguise.

</FDEConnection>

<Connection
  forward={[]}
>

Volume 4 continues with embeddings, vector databases, and the full AI engineering stack.

</Connection>
