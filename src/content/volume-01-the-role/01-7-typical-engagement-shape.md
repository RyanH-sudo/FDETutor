---
id: 01-7-typical-engagement-shape
volume: volume-01-the-role
chapter: 2
number: 7
title: "A Typical Engagement, Step by Step"
subtitle: "Discovery to handoff. The arc of an FDE customer engagement."
estimatedMinutes: 13
prerequisites: [01-6-the-three-companies]
keyTerms: [discovery, scoping]
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

A customer engagement has a shape. Not every engagement follows the shape exactly — some skip steps, some loop back — but the canonical arc has six phases: discovery, scoping, prototype, build, deploy, handoff. Knowing the arc lets you orient yourself in any engagement and articulate your work in interviews.

</Section>

<Section label="Phase 1: Discovery (week 0 to week 2)">

Before scope is set, before any technical design, the FDE listens.

What happens: customer-side meetings. The sales team has handed off the relationship; now you're inheriting it as the technical owner. You meet the executive sponsor, the engineering lead, the data team, the business stakeholders. You ask questions. You take notes.

What you produce: a *discovery document*. One page. The customer's stated problem. The actual problem (often different from the stated one). Success metrics. Available data. Stakeholders. Constraints (compliance, budget, timeline). What's intentionally not in scope.

You send the discovery doc to the customer for review. They push back, you revise. Once both sides agree on the doc, you have a foundation.

The discovery phase is *mostly listening*. New FDEs sometimes try to compress it because it doesn't feel like "real work." It is real work. The discovery doc shapes the rest of the engagement. A bad discovery doc means a bad engagement.

</Section>

<Section label="Phase 2: Scoping (week 2 to week 4)">

With discovery complete, you scope the project.

What happens: you write a *scoping document* (or a project proposal) with concrete deliverables, timeline, and resource needs. You propose a technical approach at a high level. You propose milestones. You estimate.

What you produce:
- The scoping doc itself.
- A technical architecture sketch.
- A project plan with milestones.
- A list of what you need from the customer (data access, accounts, time from their team).

The customer reviews. They might want to expand scope (more features) or compress timeline. You negotiate. Eventually both sides agree on a scope-and-plan.

A good scope doc is *bounded*. It says "in scope" and "out of scope" explicitly. If a customer asks for something not in scope mid-engagement, you can refer back to the doc and either decline (with reasons) or treat it as a change request requiring formal acceptance.

</Section>

<Section label="Phase 3: Prototype (week 4 to week 8)">

Build the smallest version that proves the concept. The prototype isn't production-quality. It's a proof.

What happens: you build a working demo of the core flow with real customer data. You iterate quickly. You demo it to the customer's technical team for feedback. You show it to the executive sponsor for buy-in.

What you produce: a working prototype + a demo + a brief write-up of what's working and what's not.

The prototype phase usually surfaces things you didn't know during discovery. Maybe the data is messier than the customer admitted. Maybe the latency requirements are tighter than they realized. Maybe a stakeholder you didn't meet has strong opinions. You incorporate.

This is also the phase where you decide if the project should continue. If the prototype reveals fundamental issues — the data isn't there, the customer's expectations are misaligned, the technical approach won't work — better to flag now than three months from now. Sometimes engagements end after the prototype phase. That's not failure; it's good judgment.

</Section>

<Section label="Phase 4: Build (week 8 to week 16)">

The big chunk. Production engineering.

What happens: you take the prototype and build a real system. You add error handling, logging, monitoring, security, compliance, eval frameworks, deployment automation. You write the code that will run in production.

You're typically working alongside the customer's engineers — pair-programming, reviewing PRs, embedding their team in the development. This is intentional. You want them to own this code after the engagement.

What you produce:
- A production-ready system.
- An eval suite measuring quality.
- Deployment automation (CI/CD, infrastructure-as-code).
- Documentation for the customer's team.

The build phase is the longest. It's also where the actual engineering quality is determined. Cutting corners here causes pain later — at handoff or after.

</Section>

<Section label="Phase 5: Deploy (week 16 to week 20)">

Ship to production.

What happens: a controlled rollout. Often starts as a closed pilot — a small group of internal users at the customer trying the system. You monitor closely. You fix issues fast. You train the customer's team on operating the system.

What you produce:
- A live system serving real users.
- A runbook for incident response.
- A monitoring setup with alerts.
- Pilot results — what's working, what's not.

The deploy phase is high-stakes. Things will break. The question is how fast you respond and how clearly you communicate. Customers remember the deploy phase vividly because it's when they first see the system actually do something.

</Section>

<Section label="Phase 6: Handoff (week 20 to week 24)">

The engagement winds down. The customer's team takes ownership.

What happens: knowledge transfer. You train the customer's engineers on the codebase. You walk them through architecture decisions. You document operating procedures. You leave behind a handoff document that future-customer-engineers can use to understand and extend the system.

What you produce:
- A complete handoff document.
- Training sessions (recorded if possible).
- A retrospective document — what worked, what didn't, what to do differently next time.

After handoff, the customer should be able to operate the system without you. You may stay involved as an advisor, but the day-to-day ownership has transferred.

</Section>

<Section label="Variations on the arc">

Most engagements follow this six-phase shape, but variations are common:

- **Multi-phase engagements.** Some are 6 months, some are 18. The phase pattern repeats — discovery, scope, build for each phase.
- **Pilot-only engagements.** Sometimes the engagement is just discovery + prototype + handoff, to help a customer evaluate whether to commit further.
- **Embedded engineer engagements.** At some companies (Palantir-style), the FDE stays embedded for years rather than handing off. The arc is more continuous.
- **Multi-FDE engagements.** Large customers might have 2-4 FDEs working in parallel, each owning a different sub-project.

</Section>

<FDEConnection>

When an interviewer asks "walk me through a typical engagement," the answer should follow this arc — discovery, scoping, prototype, build, deploy, handoff — with concrete examples from your experience at each phase. The structure shows you understand the work; the examples show you've done it.

If you don't yet have FDE engagement experience, draw the analogy to whatever closest experience you have — a project at your current job that had a discovery phase, a scoping document, a build cycle, a deployment. The shape transfers.

</FDEConnection>

<Connection
  back={[{ id: '01-6-the-three-companies', title: 'The Three Company Archetypes' }]}
  forward={[{ id: '01-8-success-and-failure-modes', title: 'Success and Failure Modes' }]}
>

Next: how engagements actually succeed or fail. The patterns across many engagements that distinguish good outcomes from bad ones.

</Connection>
