---
id: 01-10-volume-1-recap
volume: volume-01-the-role
chapter: 2
number: 10
title: "Volume 1 Recap"
subtitle: "Consolidating the role's shape before we go deeper."
estimatedMinutes: 8
prerequisites: [01-9-tools-an-fde-uses]
keyTerms: []
exerciseCount: 0
checkpoint: true
tags: [theory]
---

<Section label="The Opening">

A checkpoint lesson. We've covered nine lessons across what an FDE is, how the role differs from adjacent ones, comp, career, the engagement arc, success/failure patterns, and the toolkit. Before Volume 2 dives into customer-first thinking, let's consolidate.

</Section>

<Section label="What you should be able to do after Volume 1">

After lessons 1-9, you should be able to:

- Describe a typical FDE week with concrete activities, not abstract job-description language.
- Explain the inversion between FDE work and product engineering ("one customer, many capabilities").
- Distinguish FDE from Solutions Architect, Sales Engineer, Customer Engineer, Implementation Engineer.
- Describe 2026 compensation bands across frontier labs, AI startups, and traditional enterprises.
- Name several FDE career trajectories (principal IC, leadership, founder, platform pivot, advisor).
- Walk through the six phases of a typical engagement: discovery, scoping, prototype, build, deploy, handoff.
- Identify success patterns and failure modes in customer engagements.
- List the typical 2026 FDE toolkit — Python, vector DBs, LLM APIs, IaC, observability, customer-side tools.

If any of these feel shaky, the corresponding lesson is the place to revisit.

</Section>

<Section label="The vocabulary you should be comfortable with">

Words and phrases that should feel native by now:

- Forward Deployed Engineer / FDE
- Solutions Architect / Sales Engineer / Customer Engineer / Implementation Engineer
- Discovery / Scoping / Prototype / Build / Deploy / Handoff
- Executive sponsor / Stakeholder map
- Time-to-value
- Eval-driven development
- Right altitude
- One customer, many capabilities
- Closing the delta

If any are still unfamiliar, the glossary has them.

</Section>

<Section label="What's coming">

Volume 2 (Customer-First Thinking) goes deep on the discovery and scoping phases — the parts of an engagement where the work is mostly listening. Specific topics:

- Discovery techniques in detail
- Stakeholder mapping
- Reading the customer's organizational dynamics
- Asking the right questions
- The discipline of scoping ambiguity
- Identifying the real problem behind the stated problem
- Writing the discovery and scoping documents

Volume 3 covers system design under constraints — the bridge between scoping and build.

Volume 4 covers the AI engineering stack itself — LLMs, embeddings, vector DBs, evals.

By the end of those three volumes you'll have everything you need to walk into a customer engagement and run it competently. Volumes 5-9 then go deep on specific patterns (RAG, agentic, production ops, compliance, communication). Volume 10 is interview prep. Volume 11 is career strategy. Volume 12 is capstone projects.

</Section>

<MockInterview
  setup="An end-of-Volume-1 self-check. Imagine an interviewer asks early in your conversation:"
  question="Walk me through what an FDE actually does day to day. I want to make sure you understand what you're signing up for."
  checklist={[
    "Concrete activities — code, customer calls, internal coordination, documentation. Not abstract job-description language.",
    "Reference the bidirectional flow — customer learnings flowing back to the platform team.",
    "Acknowledge the variety and the context-switching demands.",
    "Tie to the FDE specific work shape (one customer, many capabilities).",
    "Show you've thought about both the rewarding parts (variety, customer impact) and the demanding parts (context switching, customer politics).",
  ]}
  sample={
    <>
      A typical week is roughly 40% engineering, 30% customer-facing, 20% internal coordination, 10% writing. Concretely: I might be embedded with two or three customers at different stages — one in discovery, one in build, one approaching handoff. So Monday I'm doing architecture reviews with one customer's security team, Tuesday I'm pair-programming with another customer's engineers on the eval suite, Wednesday I'm writing an internal RFC because I've seen the same need at three customers, Thursday I'm in a discovery call with a brand-new customer, Friday I'm reviewing a slide deck for an executive readout.
      <br /><br />
      The bidirectional flow matters. I'm not just deploying the platform forward to the customer; I'm carrying field intelligence backward to the platform team. The "one customer, many capabilities" shape uses my engineering depth and my customer skills simultaneously, and the variety prevents the work from getting stale. The cost is constant context switching across customer environments — that's real and it's tiring, but for me it beats the alternative of building one feature for many faceless users.
    </>
  }
/>

<Connection
  back={[{ id: '01-9-tools-an-fde-uses', title: 'Tools an FDE Uses' }]}
  forward={[]}
>

Volume 1 ends here for now. Volume 2 (Customer-First Thinking) and beyond have seeded lessons; the full curriculum extends over time.

</Connection>
