---
id: 00-1-the-letter
volume: volume-00-welcome
chapter: 1
number: 1
title: "A Letter to a Future FDE"
subtitle: "Why this exists, and what we're going to do together."
estimatedMinutes: 11
prerequisites: []
keyTerms: [fde, applied ai engineer]
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening" icon="✦">

Hello.

If you're reading this, you've decided to learn — or formalize — what it takes to become a Forward Deployed Engineer. Maybe you've been doing the work informally for years and realized recently it has a name. Maybe you're a strong builder who wants to point that energy at customer engagements at the frontier. Maybe you're already in adjacent roles (solutions architect, sales engineer, customer engineering) and want to deepen toward AI specifically. Maybe you're new to the role entirely and curious whether it fits.

All of these are good reasons. The reason matters less than the choosing.

This little application is going to walk you through the FDE craft from first principles. Not the way most career-prep guides do — there are plenty of those, and most of them are some flavor of "memorize STAR stories and target Anthropic." That's not what we're going to do. We're going to go slowly. We're going to talk about what the role really is, day to day. We're going to ask, again and again, *why is it shaped like this?*

The answer to that question is almost always more interesting than the question.

</Section>

<Section label="What this app is, exactly">

FDETutor is a *slow* curriculum on the FDE / Applied AI / Solutions Architect track. There are roughly four hundred and sixty lessons planned across thirteen volumes. If you completed one lesson per day, you'd finish in a little over a year. That number isn't supposed to scare you. It's supposed to release you.

Most career-prep courses promise you'll be ready for FDE interviews in a weekend. They are lying or they are using a much weaker definition of "ready" than I am. To actually understand the work — to walk into a customer conversation with calm confidence, scope an ambiguous request, design a system under real constraints, talk fluently about evals and harness engineering — takes time. Not because it's hard, but because *understanding anything* takes time. We're going to take that time.

Each lesson follows a rhythm:

- **The Opening.** A short narrative paragraph or two, conversational, setting the scene.
- **The Word.** Where a key term came from — its Latin or Greek roots, when it entered English, when it entered FDE work.
- **The Why.** What problem this concept exists to solve.
- **The What.** The concept itself — first in plain language, then with the precise definition.
- **The How.** Real customer scenarios, real architecture sketches, real system design choices.
- **You Try.** Self-paced exercises with progressive hints.
- **Talk About It.** How you'd explain the concept aloud, in an interview or to an executive.
- **Connections.** What this builds on, what it sets up.

You'll see these as labeled sections in every lesson.

</Section>

<Section label="Why etymology">

There's a word you'll see in every lesson — sometimes as the *Etymology* card you can click, sometimes inline as a small underlined word with a popover. That word is **etymology** — Greek *etymon* ("true sense") plus *logia* ("study of"). The study of where words come from.

FDE work is full of jargon. Some of it is fresh (RAG, MCP, agentic). Some of it is old terminology in new contexts (harness, scaffold, scope). Knowing where the words came from helps you use them confidently rather than parroting them. When you say "harness engineering" in an interview and you can also tell the interviewer that "harness" used to mean horse equipment and the metaphor is a deterministic structure that turns a probabilistic creature into useful work — that's the level of fluency that distinguishes seniors from juniors.

We will use this trick relentlessly.

<EtymologyCard
  term="forward deployed engineer"
  origin="Coined at Palantir, ~2010"
  rootForm="forward + deployed + engineer"
  rootMeaning="an engineer deployed forward (toward the customer)"
  story="The phrase 'forward deployed' has military roots — referring to forces stationed close to where action will happen, away from headquarters. Palantir applied the phrase in the 2010s to describe engineers stationed with the customer rather than at the home office. Until then, customer-facing technical work had been done by sales engineers, solutions architects, or implementation consultants — people who weren't really engineers, or who were but kept their distance from production code. Palantir's bet was that the engineer closest to the customer's problem would build the best solution, and that bet paid off so well the role spread to OpenAI, Anthropic, and beyond."
  entryToComputing="The first 'Forward Deployed Engineer' job postings appeared at Palantir around 2010-2011. By 2020 the term was Palantir-specific. By 2023 OpenAI was using the same title. By 2026 every major AI lab plus dozens of startups have FDE roles. The word has crossed from one company's internal jargon into industry standard."
  insight="The military metaphor matters. A forward-deployed unit isn't there to win the war alone — it's there to be the link between headquarters (the platform team) and the front (the customer). It carries information back as well as bringing capability forward. That bidirectional flow is the soul of the FDE role: customer problems flow back to influence the product, platform capabilities flow forward to solve customer problems. Without the bidirectional flow, you're just an implementation consultant."
/>

</Section>

<Section label="A promise about pace">

I promise you something specific, and I want you to hold me to it.

I will not skip steps. When we encounter a word, I will tell you what it means. When we encounter a system-design choice, I will tell you why it's sometimes right and sometimes wrong. When we look at a customer scenario, I will tell you what an experienced FDE would notice that a novice would miss. I'd rather repeat myself than leave a mystery.

If a section feels too slow for you, skim. Nothing is locked. You can run ahead. But know that if you run ahead, you may have to come back later when something doesn't feel right, and the slow walk you skipped is what would have made it feel right the first time.

The patient way is the fast way, eventually.

</Section>

<Section label="What we're going to build, together">

By the end of Volume 1, you'll know what the FDE role really is — its origins, its daily reality, how it differs from adjacent roles, the comp bands, and the career trajectory. You'll be able to talk about the role with confidence in any conversation.

By the end of Volume 4, you'll have a working command of the AI engineering stack — what LLMs are, what they're good and bad at, embeddings and vector databases, the production AI ecosystem in 2026.

By the end of Volume 8, you'll understand compliance and security in AI deployments — HIPAA, SOC2, FERPA, NIST, prompt injection, the lethal trifecta. The frameworks every customer will need you to understand.

By the end of Volume 10, you'll have practiced dozens of mock interview questions across STAR, system design, and customer scenarios. You'll have answers ready for the major AI lab and AI startup interview tracks.

By the end of Volume 12, you'll have shipped twelve customer-style capstone engagements to GitHub. Each one is a small interview-ready story with real artifacts.

</Section>

<Section label="Now">

There's nothing to do in this lesson but read. No exercises. No design questions. The next lesson explains how to use this app — the navigation, the scenario cards, the architecture sketches, the mock-interview prompts — so you're ready to dive into Volume 1 when you turn that page.

When you're ready, click *next*.

I'm glad you're here.

</Section>

<Connection
  forward={[{ id: '00-2-how-to-use', title: 'How to use this app' }]}
>

The next lesson is a quick tour of the interface — every feature labeled. After that, we begin Volume 1.

</Connection>
