---
id: 01-8-success-and-failure-modes
volume: volume-01-the-role
chapter: 2
number: 8
title: "Success and Failure Modes"
subtitle: "What makes engagements work. What makes them fail."
estimatedMinutes: 11
prerequisites: [01-7-typical-engagement-shape]
keyTerms: []
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

After enough engagements, patterns emerge. Some engagements succeed brilliantly. Some fail despite everyone's best intentions. The patterns are predictable. Knowing them lets you avoid the failure modes and lean into the success modes.

</Section>

<Section label="Success patterns">

The patterns that mark a successful engagement, in rough order of importance:

**1. Clear executive sponsor.** A senior person at the customer who genuinely wants the project to succeed and has authority to remove blockers. Without one, the project drifts as competing priorities pull at it.

**2. Concrete success metric.** Not "make customer support better" but "reduce average time-to-resolution by X%." A measurable metric makes success visible and aligns everyone.

**3. Realistic scope.** A scope that fits the timeline and the customer's capacity. Over-ambitious scope is the most common project killer.

**4. Customer engineering engagement.** The customer's own engineers are involved throughout, not just observing. They're learning the system as it's built, so they can own it after.

**5. Frequent demos.** Regular working-version demos to the customer's team. Builds momentum. Surfaces misalignments early.

**6. Eval-driven development.** Quality is measured, not assumed. The eval suite catches regressions. The customer can see quality improving.

**7. Honest communication.** Including bad news, communicated early. Customers can adjust to slipping timelines if they hear about it three weeks out. They cannot adjust if they hear about it on the deadline.

**8. Documentation that survives the FDE.** The artifacts left behind let the customer's team operate the system without the FDE. This is often the hardest part to get right.

</Section>

<Section label="Failure modes">

The patterns that lead to engagement failure:

**1. Scope creep.** Customer asks for more, FDE agrees, the project sprawls beyond what the timeline supports. Eventually quality degrades or the deadline slips. The fix: explicit scope changes via formal change-request, not casual additions.

**2. Disengaged executive sponsor.** The sponsor moved on to another priority. The project's defenders inside the customer disappear. Other priorities pull resources. The project withers. The fix: re-engage early, often with executive-level updates that show ROI.

**3. Misaligned metric.** What you optimized for isn't what the customer cares about. The system is technically excellent but doesn't move the metric the executive sponsor needs. The fix: confirm the metric in week 1, not week 16.

**4. Hidden data issues.** The customer said the data was clean. It wasn't. Or the data isn't where they said it was. Or there are compliance restrictions that block your access. The fix: data audit in discovery phase, not after building.

**5. Customer engineering disengagement.** The customer's engineers don't want to learn the system. They expect the FDE to operate it indefinitely. The fix: pair-programming from day one; explicit handoff plan in scoping doc.

**6. Compliance surprises.** Mid-build, security or legal raises objections. Sometimes those are valid; sometimes the engineers should have raised them earlier. Either way, mid-build is expensive. The fix: security/legal review in scoping phase.

**7. Tech debt at handoff.** The system works but is brittle. The customer's team can't maintain it. They blame the FDE for the rocky post-handoff months. The fix: reserve the last 2-3 weeks of the engagement for "tech debt cleanup and documentation," not for last-minute features.

**8. Over-promising.** The FDE committed to capabilities the technology can't deliver. Hallucination problems get worse, not better, with prompt iteration. The customer is disappointed. The fix: under-promise during scoping; surface AI limitations openly.

</Section>

<Section label="The 'engagement health check' framework">

Senior FDEs run an internal health check on every engagement weekly:

| Question | Healthy answer | Concerning answer |
|----------|----------------|--------------------|
| Is the executive sponsor engaged? | Showed up to last review | Hasn't responded in 3 weeks |
| Is scope stable? | Same as last week | Two new asks added |
| Is the customer's team building? | Actively contributing | Just observing |
| Are evals running? | Daily, with green status | Manual, ad-hoc |
| Is the timeline still credible? | On track | Privately, you know it's slipping |
| Is the customer satisfied? | Calls you with new ideas | Calls feel transactional |

If three or more of these go red, the engagement is in trouble. Time to flag, not in three weeks but now.

</Section>

<DialogueExchange
  title="Sample dialogue: flagging a slipping engagement"
  lines={[
    {
      speaker: 'engineer', label: 'You (FDE)',
      text: "I want to flag something before our review on Friday. We've added three new asks in the past two weeks that weren't in scope. The team's been good about absorbing them, but I think it's pushing our pilot launch from Mar 15 to Mar 29.",
      note: "Direct, early, specific. Doesn't blame anyone.",
    },
    {
      speaker: 'customer', label: 'Sponsor',
      text: "Hmm. Mar 15 was committed to my CEO. Can we pull anything out?",
      note: "The sponsor is engaged. Good sign.",
    },
    {
      speaker: 'engineer', label: 'You (FDE)',
      text: "Two options. We hold scope, ship Mar 15 with the original feature set, and add the new asks in phase 2. Or we ship the new asks too and slip to Mar 29. Your call. I'd recommend the first because Mar 15 is committed to your CEO.",
      note: "Two clear options with a recommendation. Customer can decide.",
    },
    {
      speaker: 'customer', label: 'Sponsor',
      text: "Let's go option one. I'll handle the new-asks team. Thanks for flagging.",
    },
  ]}
  caption="Early, specific, two-options with a recommendation. The dialogue takes 90 seconds in real time. The alternative — silence until the deadline — would have been catastrophic."
/>

<Connection
  back={[{ id: '01-7-typical-engagement-shape', title: 'A Typical Engagement, Step by Step' }]}
  forward={[{ id: '01-9-tools-an-fde-uses', title: 'Tools an FDE Uses' }]}
>

Next: the toolkit. The actual tools, services, and platforms FDEs use day to day in 2026.

</Connection>
