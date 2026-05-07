import type { GlossaryEntry } from './types';

/**
 * Seed glossary for FDETutor — the foundational ~50 terms covered in
 * Volumes 0–4. Etymology where the word has a story.
 */
export const glossarySeed: GlossaryEntry[] = [
  {
    term: 'agentic',
    origin: 'English (newly coined sense)',
    brief: 'Of or relating to AI systems that take autonomous actions, not just generate text. The shift from "assistant" to "agent" — from tool that responds to one that acts.',
    category: 'concept',
  },
  {
    term: 'applied ai engineer',
    display: 'Applied AI Engineer',
    origin: 'Industry coinage, ~2023',
    brief: 'A role focused on applying frontier AI models to specific business problems — often via prompt engineering, fine-tuning, evaluation, and deployment. Sometimes overlaps with FDE; at other companies it is a distinct track focused more on platform engineering than customer engagement.',
    category: 'role',
  },
  {
    term: 'context engineering',
    origin: 'Industry coinage, ~2024-2025',
    brief: 'The discipline of curating what information enters an LLM\'s context window. Replaces older "prompt engineering" because most production AI systems manage many context sources, not just a single prompt.',
    category: 'concept',
  },
  {
    term: 'discovery',
    origin: 'Latin via Old French',
    rootForm: 'discoperire',
    rootMeaning: 'to uncover, to disclose',
    brief: 'In FDE work, the first phase of a customer engagement: figuring out what the customer actually needs, what their environment looks like, and what success would mean. Discovery is mostly listening and asking questions.',
    category: 'concept',
  },
  {
    term: 'embedding',
    origin: 'English',
    rootForm: 'to embed',
    rootMeaning: 'to fix into a surrounding mass',
    brief: 'A vector of numbers representing the semantic content of a piece of text (or image). Similar inputs produce numerically similar embeddings. The foundation of semantic search and RAG.',
    category: 'concept',
  },
  {
    term: 'eval',
    origin: 'Latin via French',
    rootForm: 'evaluare',
    rootMeaning: 'to determine the value of',
    brief: 'In production AI, an "eval" is a structured test measuring the quality of a system\'s output against expected behavior. The single most-asked-about discipline in 2026 AI hiring.',
    long: 'Hamel Husain\'s phrase "show me your evals" became a cultural shorthand in 2024-2025 for "do you actually know whether your AI system works." A team without evals doesn\'t know if its system is improving or regressing.',
    category: 'concept',
  },
  {
    term: 'fde',
    display: 'FDE',
    origin: 'Acronym, coined at Palantir, ~2010',
    rootForm: 'Forward Deployed Engineer',
    rootMeaning: 'an engineer deployed forward into customer environments',
    brief: 'An engineer embedded with a customer to write production code that bridges the platform\'s capabilities and the customer\'s specific needs. The fastest-growing role in AI hiring as of 2026.',
    category: 'role',
  },
  {
    term: 'foundation model',
    origin: 'Stanford HAI report, 2021',
    brief: 'A large pretrained model that serves as the basis for many downstream applications. Examples: Claude, GPT, Llama, Gemini. The term emphasizes that the model is the foundation — applications build on top.',
    category: 'concept',
  },
  {
    term: 'harness',
    origin: 'Old French',
    rootForm: 'harneis',
    rootMeaning: 'equipment for a horse, by extension equipment for any task',
    brief: 'In agentic AI, the deterministic scaffolding around a model — tools, retries, validation, evals, logging. The harness makes a probabilistic model predictable enough to deploy.',
    category: 'concept',
  },
  {
    term: 'hipaa',
    display: 'HIPAA',
    origin: 'Acronym',
    rootForm: 'Health Insurance Portability and Accountability Act',
    brief: 'A 1996 U.S. law governing the privacy and security of healthcare data (called PHI — Protected Health Information). Any AI system handling patient data must satisfy HIPAA controls.',
    category: 'compliance',
  },
  {
    term: 'lethal trifecta',
    origin: 'Coined by Simon Willison, 2024',
    brief: 'Three properties that, when combined in an AI system, enable data exfiltration: access to private data, exposure to untrusted content, and the ability to communicate externally. The single most-cited mental model in AI security.',
    category: 'concept',
  },
  {
    term: 'llm',
    display: 'LLM',
    origin: 'Acronym',
    rootForm: 'Large Language Model',
    brief: 'A neural network trained on text to predict the probability distribution of the next token. Modern LLMs (Claude, GPT, Llama) have billions to trillions of parameters and exhibit broad capabilities — text generation, reasoning, coding, instruction following.',
    category: 'concept',
  },
  {
    term: 'mcp',
    display: 'MCP',
    origin: 'Acronym',
    rootForm: 'Model Context Protocol',
    rootMeaning: 'an open protocol for connecting AI applications to context sources',
    brief: 'Anthropic\'s open protocol for connecting AI assistants to external tools and data sources. Standardizes how an LLM client talks to MCP servers (each exposing tools, resources, prompts).',
    category: 'tool',
  },
  {
    term: 'multi-pass generation',
    origin: 'Industry pattern',
    brief: 'A pattern where an LLM generates output across several deliberate passes — extraction, then verification, then composition, then comprehensiveness check. Each pass focuses on one aspect, improving quality over a single-pass call.',
    category: 'pattern',
  },
  {
    term: 'nist 800-171',
    display: 'NIST 800-171',
    origin: 'NIST publication',
    brief: 'A U.S. government publication with controls for protecting Controlled Unclassified Information (CUI) on non-federal systems. Required for many U.S. government contractors. Sets the floor for security in many commercial environments too.',
    category: 'compliance',
  },
  {
    term: 'prompt injection',
    origin: 'Coined by Simon Willison, 2022',
    brief: 'An attack where malicious instructions are embedded in content the LLM processes, causing it to deviate from its intended behavior. Different from jailbreaking. The defining security concern of agentic AI.',
    category: 'concept',
  },
  {
    term: 'rag',
    display: 'RAG',
    origin: 'Acronym, ~2020',
    rootForm: 'Retrieval-Augmented Generation',
    rootMeaning: 'fetch-relevant-text-then-generate',
    brief: 'A pattern where an LLM is given retrieved relevant text from a knowledge base before being asked to answer. The most common production AI deployment pattern in 2026.',
    category: 'pattern',
  },
  {
    term: 'scoping',
    origin: 'English (Greek root)',
    rootForm: 'skopos',
    rootMeaning: 'a target, a watcher',
    brief: 'In FDE work, the discipline of taking an ambiguous customer request and reducing it to a concrete project — what is in, what is out, what success looks like, what timeline. Scoping is mostly a writing exercise.',
    category: 'concept',
  },
  {
    term: 'soc2',
    display: 'SOC 2',
    origin: 'AICPA standard',
    brief: 'A compliance framework focused on data security, availability, processing integrity, confidentiality, and privacy. Required by most enterprise SaaS customers. Type 1 = point-in-time; Type 2 = audited over a 6-12 month period.',
    category: 'compliance',
  },
  {
    term: 'solutions architect',
    origin: 'Industry term, 1990s',
    brief: 'A role focused on designing technical solutions for customers, often in pre-sales or early-engagement contexts. Some companies use "Solutions Architect" as the title for what others call FDE; at Anthropic specifically, it overlaps significantly with the FDE role.',
    category: 'role',
  },
  {
    term: 'tool use',
    origin: 'AI engineering term',
    brief: 'The capability of an LLM to invoke external functions (tools) during a conversation. Tools have schemas; the model decides when to call them and with what arguments. The foundation of agentic systems.',
    category: 'concept',
  },
  {
    term: 'vector database',
    origin: 'Industry term, ~2022',
    brief: 'A database optimized for similarity search over high-dimensional embeddings. Examples: ChromaDB, Pinecone, Weaviate, FAISS, pgvector. The retrieval engine in most RAG systems.',
    category: 'tool',
  },
];

export function findEntry(term: string): GlossaryEntry | undefined {
  const t = term.toLowerCase().trim();
  return glossarySeed.find((e) => e.term === t || (e.aliases ?? []).includes(t));
}
