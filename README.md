# FDETutor

A slow-paced, deeply etymological Forward Deployed Engineer learning suite.

FDETutor is a self-contained web application that teaches the FDE / Applied AI / Solutions Architect craft from first principles. It is built around a single conviction: understanding takes time, and the best way to learn is patiently, with full explanations.

## What Makes This Different

Most FDE-prep guides race you to memorizing STAR stories and target-company lists. FDETutor goes the other way:

- **Etymology built in.** Every key term — FDE, RAG, harness, scoping, eval — comes with the story of where the word came from. Knowing why the words mean what they mean makes them stick.
- **Customer-style scenarios.** Throughout the curriculum, scenario cards model real customer engagements. You practice scoping, system design, and communication.
- **Live code in the browser.** Every code block runs Python via Pyodide. No setup. Edit, run, see what happens.
- **Slow pacing.** Lessons are 10-15 minutes each. The full curriculum is roughly 460 lessons across 13 volumes. About a year at one lesson per day. That pace is the point.
- **Built for interviews.** Volume 10 is a full mock-interview track. Each lesson includes "Talk About It" framing — how to articulate concepts the way an FDE interviewer expects.
- **No streaks, no anxiety.** The progress tracker shows what you have completed. It does not punish absence.

## Curriculum

Thirteen volumes:

- **Volume 0 — Welcome.** Orientation, learning theory, FDE-specific vocabulary, history of the role, the FDE mindset.
- **Volume 1 — What Is the FDE Role?** Origins, daily reality, role variants, comp bands, career trajectories.
- **Volume 2 — Customer-First Thinking.** Discovery, scoping, listening, asking the right questions, stakeholder mapping.
- **Volume 3 — System Design Under Constraints.** Cloud, on-prem, compliance, latency, cost, integration patterns.
- **Volume 4 — The AI Engineering Stack.** LLMs, embeddings, vector databases, evaluations.
- **Volume 5 — RAG Systems Deep Dive.** Chunking, retrieval, generation, evaluations, failure modes.
- **Volume 6 — Agentic Systems.** Tools, workflows, MCP, harnesses, multi-pass generation.
- **Volume 7 — Production AI Operations.** Monitoring, cost, scaling, incident response, observability.
- **Volume 8 — Compliance and Security.** HIPAA, SOC2, FERPA, NIST, prompt injection, lethal trifecta.
- **Volume 9 — Communicating Across Roles.** Executives, engineers, end users, sales, legal.
- **Volume 10 — The Interview Track.** STAR, system design, customer scenarios, technical depth.
- **Volume 11 — Career Strategy.** Target companies, comp negotiation, growth.
- **Volume 12 — Capstone Engagements.** Twelve customer-style projects, shipped to GitHub.

## Lesson Structure

Every lesson follows a deliberate rhythm:

- **The Opening.** A short narrative paragraph or two, setting the scene.
- **The Word.** Etymology of a key term — its roots, the story of how it entered FDE work.
- **The Why.** What problem this concept exists to solve.
- **The What.** The concept explained in plain language, then with the precise definition.
- **The How.** Real customer scenarios, real architecture sketches, real system design choices.
- **You Try.** Exercises with progressive hints.
- **Talk About It.** How to articulate the concept aloud — interview-ready phrasing.
- **Connections.** Links back to prior lessons and forward to upcoming ones.

## Running Locally

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Open `http://localhost:3002` in a browser.

## Building for Static Hosting

```bash
npm run build
```

The output is a static export in `out/`. The site can be hosted on GitHub Pages, Vercel, Netlify, or any static-file host.

## Adding a Lesson

Lessons are markdown files under `src/content/<volume>/`. Each one has YAML frontmatter and a body that uses a small set of MDX-style components.

1. Author the file at `src/content/<volume>/<lesson-id>.md`.
2. Import it in `src/content/registry.ts` and add an entry to the `rawSources` array.
3. The lesson appears in the sidebar automatically.

## Technology Stack

- Next.js 15 with the app router, configured for static export.
- TypeScript throughout.
- Tailwind CSS with custom design tokens for typography and theming.
- Framer Motion for animation.
- Pyodide for in-browser Python execution.
- Monaco Editor for code samples.
- Zustand for progress tracking, persisted to `localStorage`.

## Status

The framework is complete. Volume 0 (8 lessons) and Volume 1 (10 lessons) are fully authored. Volumes 2-12 have seeded lessons. Additional lessons are authored over time.

## Author

Built by Ryan Haig.

## License

MIT. See `LICENSE`.
