import type { Volume } from './types';

export const volumes: Volume[] = [
  {
    id: 'volume-00-welcome',
    number: 0,
    title: 'Welcome',
    subtitle: 'How to use this. How learning works. Why this role exists.',
    description:
      'A short orientation. We talk about how this app is structured, what etymology has to do with the FDE role, why the role exists right now in 2026, and the mindset of an engineer who works at the boundary between platform capability and customer reality.',
    estimatedHours: 2,
    lessonCount: 8,
  },
  {
    id: 'volume-01-the-role',
    number: 1,
    title: 'What Is the FDE Role?',
    subtitle: 'Origins, daily reality, taxonomy, comp, career.',
    description:
      'Where the role came from (Palantir, then OpenAI/Anthropic). What an FDE actually does day to day. The taxonomy: FDE vs Solutions Architect vs Solutions Engineer vs Customer Engineer. Compensation bands and career trajectories. Why the role pays what it does and where it is going next.',
    estimatedHours: 10,
    lessonCount: 40,
  },
  {
    id: 'volume-02-customer-first',
    number: 2,
    title: 'Customer-First Thinking',
    subtitle: 'Discovery, scoping, listening, asking the right questions.',
    description:
      "How to walk into a customer's environment and figure out what is actually needed. Discovery techniques. The discipline of listening. Identifying the real problem behind the stated problem. Stakeholder mapping. The art of asking questions that reveal more than they ask.",
    estimatedHours: 9,
    lessonCount: 35,
  },
  {
    id: 'volume-03-system-design',
    number: 3,
    title: 'System Design Under Constraints',
    subtitle: 'Cloud, on-prem, compliance, latency, cost.',
    description:
      "Most system design questions are toy problems. FDE system design is real — with HIPAA, FERPA, on-prem requirements, latency budgets, cost constraints, and integration with the customer's existing systems. We work through the major patterns: cloud-native, hybrid, airgapped, and the tradeoffs each carries.",
    estimatedHours: 12,
    lessonCount: 45,
  },
  {
    id: 'volume-04-ai-stack',
    number: 4,
    title: 'The AI Engineering Stack',
    subtitle: 'LLMs, foundation models, embeddings, vector DBs, evaluations.',
    description:
      'What an LLM actually is and is not. The major foundation models in 2026 and their tradeoffs. Embeddings: how text becomes vectors. Vector databases: ChromaDB, Pinecone, Weaviate, FAISS, pgvector. Evaluations: the discipline of measuring AI system quality. The full applied-AI stack.',
    estimatedHours: 13,
    lessonCount: 50,
  },
  {
    id: 'volume-05-rag',
    number: 5,
    title: 'RAG Systems Deep Dive',
    subtitle: 'Chunking, retrieval, generation, hybrid, evaluation.',
    description:
      'Retrieval-Augmented Generation in detail. Chunking strategies — character, sentence, semantic, hierarchical. Retrieval: dense, sparse, hybrid, reranking. Generation prompt patterns. RAG evaluations: faithfulness, relevance, completeness. Common failure modes. The full RAG toolkit.',
    estimatedHours: 11,
    lessonCount: 40,
  },
  {
    id: 'volume-06-agentic',
    number: 6,
    title: 'Agentic Systems',
    subtitle: 'Tools, workflows, MCP, harnesses, multi-pass generation.',
    description:
      'Building agents that take actions. Tool use deeply. Workflow design. Multi-pass generation patterns (the kind used in production audit systems). Model Context Protocol. Harness engineering — the wrapper code that makes an agent reliable. When to use agents and when to use simpler workflows.',
    estimatedHours: 11,
    lessonCount: 40,
  },
  {
    id: 'volume-07-production',
    number: 7,
    title: 'Production AI Operations',
    subtitle: 'Monitoring, cost, scaling, incident response.',
    description:
      'What it takes to run an AI system in production. Monitoring (latency, cost-per-request, quality drift). Cost optimization. Scaling patterns. Observability. Incident response when an AI system misbehaves. A/B testing AI features. The unglamorous work that separates a demo from a real service.',
    estimatedHours: 9,
    lessonCount: 35,
  },
  {
    id: 'volume-08-compliance',
    number: 8,
    title: 'Compliance and Security in AI',
    subtitle: 'HIPAA, SOC2, FERPA, NIST, prompt injection, audit-ready evidence.',
    description:
      'The compliance frameworks that govern enterprise AI deployments. HIPAA for healthcare, SOC2 for SaaS, FERPA for education, NIST 800-171/800-53 for government, PCI DSS for finance. Prompt injection and the lethal trifecta. OWASP LLM Top 10. Building audit-ready evidence pipelines. Every customer engagement involves at least one of these frameworks.',
    estimatedHours: 11,
    lessonCount: 40,
  },
  {
    id: 'volume-09-communication',
    number: 9,
    title: 'Communicating Across Roles',
    subtitle: 'Executives, engineers, end users, sales, legal.',
    description:
      "The FDE talks to many roles. Executives need ROI and risk framing. Engineers need technical depth. End users need plain language. Sales needs commercial framing. Legal needs precise scope. Each has a different vocabulary and a different attention span. We work through how to communicate effectively with each.",
    estimatedHours: 7,
    lessonCount: 25,
  },
  {
    id: 'volume-10-interviews',
    number: 10,
    title: 'The Interview Track',
    subtitle: 'STAR, system design, customer scenarios, technical depth.',
    description:
      'How FDE interviews actually work. STAR stories that are specific without being formulaic. System design under pressure. Customer scenario practice. Technical-depth questions. Common interview tracks at Anthropic, OpenAI, Glean, Vanta, Cresta, Decagon, Reflection AI, and others. Mock interview prompts you can run with the in-app AI tutor.',
    estimatedHours: 11,
    lessonCount: 40,
  },
  {
    id: 'volume-11-career',
    number: 11,
    title: 'Career Strategy',
    subtitle: 'Target companies, comp negotiation, growth, transitions.',
    description:
      "Which companies hire FDEs and what each one specifically wants. Compensation negotiation in 2026 — base, equity, signing bonus, total comp. Internal growth: principal track, leadership track, or founding-engineer-elsewhere. The transitions that work and the ones that don't.",
    estimatedHours: 5,
    lessonCount: 15,
  },
  {
    id: 'volume-12-capstone',
    number: 12,
    title: 'Capstone Engagements',
    subtitle: 'Real customer-style projects, end to end.',
    description:
      'Twelve customer-style engagements. Each one has a brief, a discovery doc, a system design, a build, an eval suite, and a handoff document. Shipped to GitHub as portfolio artifacts. Each one is a small interview-ready story.',
    estimatedHours: 12,
    lessonCount: 12,
  },
];

export function getVolume(id: string): Volume | undefined {
  return volumes.find((v) => v.id === id);
}

export function totalLessons(): number {
  return volumes.reduce((sum, v) => sum + v.lessonCount, 0);
}

export function totalEstimatedHours(): number {
  return volumes.reduce((sum, v) => sum + v.estimatedHours, 0);
}
