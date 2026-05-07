---
id: 09-1-talking-to-executives
volume: volume-09-communication
chapter: 1
number: 1
title: "Talking to Executives"
subtitle: "Bottom line up front. Specific numbers. No jargon."
estimatedMinutes: 9
prerequisites: []
keyTerms: []
exerciseCount: 0
checkpoint: false
tags: [theory, customer]
---

<Section label="The Opening">

Talking to a customer's CTO or VP of Engineering is a different mode from talking to their data team. Executives have less time, less technical context, and different priorities. The communication has to compress technical reality into business impact.

</Section>

<Section label="The structure">

A good executive update has three parts, in order:

**1. Bottom line up front.** What happened, what the impact is, what you're asking for. One sentence.

**2. Supporting context.** Two or three concrete points that justify the bottom line.

**3. Request or next step.** What you need from them, by when, why.

That's it. Not a tour through the technical details. Not a rundown of every challenge. The executive can ask follow-up questions if they want detail.

Example, bad:

> Hi Sarah, I wanted to update you on the project. We've been working through several technical challenges, including a chunking strategy that wasn't producing optimal results, some compliance considerations around data residency, and integration with your Okta setup. I think we're making good progress overall though there are still some open questions about the eval framework and we may need to extend the timeline. Let me know if you have questions.

Example, good:

> Sarah — pilot launch is on track for March 15. Two updates: (a) eval results show 87% accuracy on test set, hitting our target. (b) The Okta integration uncovered one access-control issue we resolved with your security team last week. No timeline impact. I'll have the pilot-readiness report by Friday.

The good version respects the executive's time. They get the headline immediately. They learn what's notable. They know what's coming next.

</Section>

<Section label="Numbers, not adjectives">

Executives respond to specific numbers. "We're making good progress" means nothing. "We're 70% through the build phase, on track for March 15 launch, eval accuracy is 87% (target 85%)" tells them everything.

Cultivate the habit of replacing adjectives with numbers wherever you can:

- *Not* "the system is fast" → *but* "P95 latency is 1.2 seconds"
- *Not* "the costs look reasonable" → *but* "projected $15K/month at expected volume"
- *Not* "we made significant progress" → *but* "completed 4 of 6 milestones"
- *Not* "the eval results are good" → *but* "87% accuracy, 92% recall"

</Section>

<Section label="Leading with risk">

When something's going wrong, lead with the risk, not buried under good news. Executives appreciate honesty more than reassurance.

> I want to flag a risk on our March 15 timeline. Our eval results plateaued at 78% (we need 85% to launch). I'm investigating root cause this week and will have a recommendation by Friday — either we adjust the model approach or we slip the launch by 2 weeks. Will let you know.

This reads as professional. The executive can plan around it. They can elevate the risk to their own stakeholders if needed. The alternative — burying the risk under positive framing — leaves them unable to plan and damages trust when the bad news inevitably surfaces.

</Section>

<DialogueExchange
  title="A short executive briefing — done well"
  lines={[
    {
      speaker: 'engineer', label: 'You',
      text: "I have a 5-minute update if you have time. Bottom line: we're tracking to March 15 with one risk to flag.",
      note: "Sets expectations on time; signals there's a risk worth attention.",
    },
    {
      speaker: 'customer', label: 'CTO',
      text: "Go ahead.",
    },
    {
      speaker: 'engineer', label: 'You',
      text: "Pilot is 70% built. Eval accuracy is at 82%, target is 85%. The 3-point gap is the risk. I'm running an experiment this week with a different chunking strategy that I think gets us there. I'll know by Thursday.",
      note: "Specific numbers. Specific risk. Specific timeline for resolution.",
    },
    {
      speaker: 'customer', label: 'CTO',
      text: "What if the experiment doesn't work?",
    },
    {
      speaker: 'engineer', label: 'You',
      text: "Two backup options. We can ship at 82% with explicit accuracy disclosures (we'd need legal sign-off), or we slip launch by two weeks. I'd recommend slipping if we get there, but happy to discuss tradeoffs Friday.",
      note: "Two options ready. Recommendation but not a demand. Invites discussion.",
    },
    {
      speaker: 'customer', label: 'CTO',
      text: "Understood. Send me the Thursday results and we'll regroup Friday.",
    },
  ]}
  caption="Five minutes. The CTO knows everything she needs. She has options. She has a date for the next decision."
/>

<MockInterview
  setup="A common interview question:"
  question="Tell me about a time you had to communicate bad news to a customer. How did you handle it?"
  checklist={[
    "Specific situation — concrete bad news with stakes.",
    "Show you led with the news, not buried it.",
    "Show you presented options or recommendations, not just problems.",
    "Reference the structure — bottom line, context, next step.",
    "End with the outcome — what happened, what you learned.",
  ]}
  sample={
    <>
      We were two weeks from a planned pilot launch with a healthcare customer when our eval results showed accuracy was 78% — below the 85% the customer had committed to their executives. I called the customer's data lead the morning we discovered it. Lead with the news: "I want to flag a risk on launch — eval accuracy is at 78%, below our target." Then context: "the gap is in multi-condition queries; I have a hypothesis for what's missing in our chunking." Then options: "I'd suggest a one-week extension while we test a new chunking strategy; alternatively we could ship with explicit accuracy caveats. I recommend the extension." She agreed to the extension, escalated to her CTO with my framing, and we shipped a week late at 89% accuracy. The trust-building from handling that openly was probably worth more than the project itself.
    </>
  }
/>

<Connection
  forward={[]}
>

Volume 9 continues with talking to engineering teams, end users, sales partners, and legal/compliance.

</Connection>
