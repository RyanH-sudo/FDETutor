---
id: 01-1-what-an-fde-does
volume: volume-01-the-role
chapter: 1
number: 1
title: "What an FDE Actually Does"
subtitle: "A week in the life. Not a job description."
estimatedMinutes: 13
prerequisites: [00-8-the-pact]
keyTerms: [fde]
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

Job descriptions are abstract. To understand what FDE work actually is, we need to look at a week of it. This lesson walks through a realistic week — Monday morning to Friday afternoon — for an FDE at a frontier AI lab in 2026.

The activities will look familiar in shape but specific in detail. Across the week, you'll see the rhythm: customer-facing work, technical work, internal coordination, documentation, and the constant interplay between them.

</Section>

<Section label="Monday">

**Morning.** Internal team standup. Four other FDEs, the FDE team lead, a product partner from the platform team. Each FDE gives a one-line update on their main account and any blockers. The lead flags a couple of cross-engagement patterns to discuss after.

**Mid-morning.** You read your three customer Slack channels. The healthcare customer's data team has a clarifying question on a chunking strategy you proposed last week. You write back with a short answer and link to a relevant section of the project's README.

**Late morning.** Architecture review with the financial-services customer. Their security team wants to understand the data flow. You walk through a sketch you prepared — where data lives, what the LLM sees, what the LLM doesn't see, where logs go, retention policy. The security architect asks two pointed questions about prompt injection. You answer one definitively, defer the other ("good question — let me come back tomorrow with a clear answer based on the Anthropic Trust & Safety guidelines").

**Lunch.**

**Afternoon.** Engineering work on the healthcare customer's eval suite. You're building a test set of 200 known-good doctor queries paired with expected retrieval results. This is unglamorous prep work. It's also the foundation of the engagement's success criteria. You ship a draft of the eval framework to the customer's data lead by 4pm.

**Evening.** Quick async update in the customer Slack. "Eval framework ready for review. We can discuss tomorrow at 11."

</Section>

<Section label="Tuesday">

**Morning.** Discovery call with a brand-new customer. A mid-sized e-commerce company. Their head of customer experience is on the call. You and a sales partner from your company.

The customer says: "we want to use AI to improve our customer support. We've heard about RAG — could that work for us?"

You don't propose a solution. You ask:
- "Tell me about your current support process."
- "What metric matters most? Faster responses? Higher satisfaction? Fewer escalations?"
- "How many tickets do you handle per month? What categories?"
- "Where's the data — Zendesk? Salesforce? Something else?"
- "Who would own this internally? Who's the technical contact?"

The call is 45 minutes. You take detailed notes. By the end, the customer's head of CX is leaning into the conversation rather than back from it. That's a sign you're scoping well. They thank you for the questions.

**Mid-afternoon.** Write a discovery doc. One page. The customer's stated problem, what you think the actual problem is, the metrics that would matter, the data landscape, the proposed approach. You send it to the customer for review.

**Late afternoon.** Spend an hour reading a paper a colleague linked — a new technique for chunking long documents semantically. Could be relevant for the healthcare customer. You make a note in the relevant project's research log.

</Section>

<Section label="Wednesday">

**Morning.** Healthcare customer eval-framework review. Their data lead has good feedback. They flag two cases your eval set missed (multi-condition queries, queries with ambiguous patient identifiers). You agree to expand the test set this week.

**Mid-morning.** Prompt-injection answer for the financial-services customer. You research, draft a response, run it past your team's security partner, then send a careful message to the customer's security architect. Specific, calibrated, with references.

**Lunch.**

**Afternoon.** Working session with the financial-services customer's engineering team. You're building a RAG pipeline together. You pair-program with one of their senior engineers for two hours. You're both learning — they're learning the patterns; you're learning their stack and their compliance constraints. The pair-programming is intentional. You want them to own this code after the engagement.

**Late afternoon.** Internal RFC. You've seen three customers ask for a similar feature — fine-grained control over which documents enter the context window per user. You write a one-page proposal for the platform team. Cite the customers. Sketch the proposed API. Send it to the platform team's eng manager.

</Section>

<Section label="Thursday">

**Morning.** Healthcare customer pilot launch. A small group of 5 doctors are trying the system for the first time today. You're on standby.

**Mid-morning.** First real production query. The system answers correctly but slowly — 8 seconds. You watch the trace. Most of the time is in retrieval, not generation. You file a follow-up to optimize retrieval; for now, latency is acceptable for the pilot.

**Late morning.** Second query is wrong. The model hallucinated a side effect that isn't in the doctor's library. You see the failure in real time. You message the doctor (via the customer's data lead): "we noticed an issue with that query — looking now." Within two minutes you have the eval entry written. Within 20 minutes you've identified that the relevant document wasn't being retrieved. Within an hour you've adjusted the embedding strategy and re-tested. By lunchtime the system handles the same query correctly.

**Lunch (very late).**

**Afternoon.** Brief postmortem with the customer's data lead. Three things: (a) what went wrong technically, (b) what process change prevents it next time, (c) what you'll add to the eval suite. The customer is impressed by the response speed. Trust deepens.

**Late afternoon.** Update internal team channel. Brief writeup of the incident and learnings. Tagged as "useful pattern: live-debugging during pilot launches deepens customer trust."

</Section>

<Section label="Friday">

**Morning.** Discovery doc review with the e-commerce customer. They've reviewed the doc you sent Tuesday. Mostly agree. Want to adjust the proposed metric (they'd rather measure agent productivity than customer satisfaction). You revise.

**Mid-morning.** Internal FDE team weekly review. Each FDE presents one thing they learned this week. You present the live-debugging pattern from Thursday. Two other FDEs say they've seen similar dynamics; the team lead files it as a "best practice" for the team's internal wiki.

**Lunch.**

**Afternoon.** Document the financial-services customer's progress for the steering committee that meets next week. A short slide deck — what was deployed, what's coming, what risks are open. You send it to the customer's executive sponsor for review.

**Late afternoon.** Three more Slack messages across customers. Closing out the week. You leave a clean inbox for Monday-you.

</Section>

<Section label="The shape of the week">

A few patterns to notice from this realistic week:

- **Roughly 40% engineering, 30% customer-facing, 20% internal coordination, 10% writing/documentation.** The exact mix varies week to week. Some weeks are deep building. Some are heavy customer time.
- **Many concurrent customers.** A typical FDE handles 2-4 customers at varying engagement stages.
- **Constant context switching.** Different customer, different stack, different language, different stage. Working memory has to handle this.
- **Bidirectional flow.** Customer learnings flow back to the platform team via RFCs. Platform features flow forward to customers via implementation.
- **Heavy writing.** Discovery docs, RFCs, postmortems, status updates, slide decks. The role has more writing than people expect.
- **Live customer trust-building.** The Thursday pilot incident turned into a trust-building moment because of how it was handled. These small moments are where FDE-customer relationships are made.

</Section>

<FDEConnection>

When you eventually sit in an FDE interview and an interviewer says "tell me about a typical week" or "what does the work actually look like," answers like this lesson — concrete, varied, honest about the unglamorous parts — land much harder than abstract job-description summaries.

Practice describing your own typical week (whatever the role) in this concrete style. Even if your current role isn't FDE-shaped, the practice of telling work-in-the-actual-day stories transfers.

</FDEConnection>

<Connection
  back={[{ id: '00-8-the-pact', title: 'The Pact' }]}
  forward={[{ id: '01-2-customer-vs-product-engineering', title: 'FDE vs Product Engineering' }]}
>

Next: how FDE work differs from regular product engineering, and why that difference is the source of most of the friction (and the value) in the role.

</Connection>
