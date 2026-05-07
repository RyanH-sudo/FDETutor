---
id: 10-1-the-fde-interview-track
volume: volume-10-interviews
chapter: 1
number: 1
title: "The FDE Interview Track"
subtitle: "What to expect across phone screen, technical, system design, behavioral, customer scenario."
estimatedMinutes: 10
prerequisites: []
keyTerms: []
exerciseCount: 0
checkpoint: false
tags: [theory, interview]
---

<Section label="The Opening">

FDE interviews differ from standard SWE interviews in important ways. The technical bar is real but the customer-facing bar is at least as significant. This volume covers the full FDE interview track.

This first lesson is the structural overview. Subsequent lessons go deep on each interview type.

</Section>

<Section label="The typical interview track">

Most AI lab and AI startup FDE interviews follow this rough sequence:

**1. Recruiter screen.** 30-45 minutes. Company overview, your background, comp expectations, logistics. Not technical. The recruiter is filtering for fit and basic match.

**2. Hiring-manager screen.** 30-60 minutes. The hiring manager (often the FDE team lead) gets to know you. They'll ask about your background, what draws you to FDE work, your engagement experience.

**3. Technical interview.** 60-90 minutes. Could be coding (algorithm + AI engineering) or could be a take-home project. The bar is solid SWE skills plus AI engineering fluency.

**4. System design.** 60-90 minutes. Design a system end-to-end given customer constraints. You'll work through architecture, tradeoffs, integration. This is heavy for FDE roles because system design under constraints is the daily work.

**5. Customer scenario / behavioral.** 60-90 minutes. Past STAR stories plus mock customer scenarios. They want to see how you handle ambiguity, communicate, and make tradeoffs.

**6. Cross-functional / leadership.** 30-45 minutes. Sometimes a session with a product manager or sales partner to assess collaboration. Often more conversational.

**7. Bar raiser / cultural fit.** Some companies have this; some don't. A senior person not in your immediate hiring chain who acts as a quality bar.

Total: 5-8 hours of interviews, usually spread across 1-3 sessions over 2-3 weeks.

</Section>

<Section label="What's tested at each stage">

**Recruiter screen:** Are you legitimate? Are comp expectations aligned? Can you communicate clearly?

**Hiring-manager screen:** Do you understand the FDE role? Do your interests match the team's needs? Are you a credible candidate to advance?

**Technical:** Can you code? Do you understand AI engineering at a working level? Can you debug and reason under pressure?

**System design:** Can you design under real constraints? Can you make tradeoffs? Do you communicate design clearly?

**Customer scenario / behavioral:** Have you done customer-facing technical work? Can you handle ambiguity? Do you communicate cleanly?

**Cross-functional:** Will you collaborate well with non-engineering teams?

**Bar raiser:** Are you above the company's hiring bar overall, considering everything?

</Section>

<Section label="Where candidates typically struggle">

After watching many candidates go through FDE interview tracks, the failure modes are predictable:

**1. Strong on coding, weak on customer scenario.** Common for candidates from pure-engineering backgrounds. They ace the technical and stumble on "tell me about a customer who pushed back on your design." Fix: practice STAR stories specifically. Volume 10 will help.

**2. Strong on system design, weak on AI engineering specifics.** Common for senior backend engineers transitioning. They can architect a distributed system but freeze on "how would you design the eval suite?" Fix: study the AI engineering stack (Volume 4-7).

**3. Strong on AI knowledge, weak on customer-facing.** Common for ML researchers transitioning. They know the models cold but stumble on customer ambiguity. Fix: practice listening and scoping (Volume 2).

**4. Adequate everywhere but no spike.** Candidates who are okay across the board often lose to candidates who are exceptional on at least one axis. Fix: pick one strength and develop it deeply.

</Section>

<Section label="Preparation strategy">

For a 4-week prep cycle:

**Week 1.** Coding practice. LeetCode medium-level for patterns. Plus: write a small RAG pipeline end-to-end. Plus: brush up on Python.

**Week 2.** System design. Study a few canonical FDE system design problems (build a customer-facing RAG system, design an eval pipeline, design an MCP server, design a multi-tenant inference service). Practice whiteboarding under time.

**Week 3.** Customer scenarios. Volume 10 of FDETutor has many. Practice STAR stories. Record yourself. Review.

**Week 4.** Mock interviews. With friends, paid services, or AI. Get reps under realistic conditions.

This is condensed. With 8 weeks you can be quite ready. With 4 weeks you can be ready enough.

</Section>

<FDEConnection>

The single biggest preparation lever: do the work this curriculum prepares you for *before* the interview. Build a small RAG pipeline. Deploy it. Run evals on it. Have an actual artifact to discuss when an interviewer asks "tell me about an AI system you've built."

A candidate with a real (even small) deployed system will out-interview a candidate with comparable theoretical knowledge but no artifact. Build the artifact. The portfolio is the curriculum's payoff.

</FDEConnection>

<Connection
  forward={[]}
>

Volume 10 continues with each interview type in detail — how to prepare, what to say, what to avoid.

</Connection>
