---
id: 00-2-how-to-use
volume: volume-00-welcome
chapter: 1
number: 2
title: "How to Use This App"
subtitle: "Every feature, labeled. No surprises."
estimatedMinutes: 8
prerequisites: [00-1-the-letter]
keyTerms: []
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

You're inside FDETutor. Before we start the curriculum, let's walk through the interface.

</Section>

<Section label="The sidebar">

On the left is the sidebar with four navigation links — Home, Glossary, Progress, Settings — and below them, the curriculum organized by volume. Click a volume to expand. Click a lesson to read.

A small dot means *in progress*. A green check means *completed*. An empty circle means *not started*. There are no streaks, no badges. Come back when you can.

</Section>

<Section label="The lesson pane">

The center column is where you read. Body text is in serif (Source Serif 4). Headings are in sans-serif (Inter). Code is in monospace (JetBrains Mono). The labeled sections you saw in the last lesson — *The Opening, The Word, The Why* — are the spine of every lesson.

</Section>

<Section label="The customer scenario cards">

Many lessons in Volumes 2 and 3 have *scenario cards* — small briefs modeled on real customer engagements. They look like this:

<ScenarioCard
  title="A customer with a vague request"
  context="An insurance company, ~2,000 employees, mostly using Microsoft 365. Has a small data team. Uses a legacy claims-processing system."
  ask="We want to use AI to make our claims-processing faster. Can you help us?"
>

This is the kind of message an FDE gets all the time. The ask is vague. The context is sparse. Your work, before any technical design, is to turn this into a concrete project — what would success look like, what data is available, what compliance constraints apply, who the stakeholders are, what timeline.

The scenario cards in this curriculum are practice for that kind of scoping work. We'll work through dozens of them.

</ScenarioCard>

</Section>

<Section label="The dialogue exchanges">

Some lessons show annotated customer-engineer dialogues — what good conversations look like, with notes on what each line is *doing*:

<DialogueExchange
  title="Sample dialogue: discovery call"
  lines={[
    {
      speaker: 'customer',
      label: 'VP Engineering',
      text: 'We want to use AI to make our claims-processing faster.',
      note: 'Stated ask. Vague.',
    },
    {
      speaker: 'engineer',
      label: 'You',
      text: "Tell me more about that. What does the current process look like?",
      note: 'Open-ended. Invites context.',
    },
    {
      speaker: 'customer',
      label: 'VP Engineering',
      text: "Our adjusters get assigned a claim. They read it, look at attachments, decide on coverage. Some claims take hours.",
      note: 'Now we have something to work with.',
    },
    {
      speaker: 'engineer',
      label: 'You',
      text: "And when you say 'faster' — is that adjuster time per claim, or total cycle time, or something else? What does success look like?",
      note: 'Drilling on the metric. The right metric will shape the entire project.',
    },
  ]}
  caption="Notice the FDE asks for context before proposing solutions. Most of the work is listening, not talking."
/>

</Section>

<Section label="The architecture sketches">

For system-design lessons, we use *architecture sketches* — small SVG diagrams showing the shape of a deployment:

<ArchitectureSketch title="Generic RAG deployment" width={580} height={200}>
  <Box x={20} y={20} w={120} h={50} label="User" sub="laptop / app" />
  <Box x={200} y={20} w={150} h={50} label="API service" sub="orchestration" color="primary" />
  <Box x={410} y={20} w={150} h={50} label="LLM" sub="Claude / GPT" color="customer" />
  <Box x={200} y={120} w={150} h={50} label="Vector DB" sub="ChromaDB / Pinecone" color="history" />
  <Box x={410} y={120} w={150} h={50} label="Document store" sub="S3 / customer SharePoint" color="etymology" />
  <Arrow x1={140} y1={45} x2={200} y2={45} />
  <Arrow x1={350} y1={45} x2={410} y2={45} />
  <Arrow x1={275} y1={70} x2={275} y2={120} label="search" />
  <Arrow x1={350} y1={145} x2={410} y2={145} />
</ArchitectureSketch>

</Section>

<Section label="The mock interview prompts">

Volume 10 (and scattered earlier) has *mock interview* components. They show a question, let you think, then reveal a checklist of points and a sample answer:

<MockInterview
  setup="An Anthropic FDE interviewer asks early in the conversation:"
  question="Why FDE specifically? You could be a regular SWE somewhere. What draws you to this role?"
  checklist={[
    'Reference the role-shape: customer-embedded engineering, not just product engineering.',
    'Acknowledge the "one customer, many capabilities" framing.',
    'Cite a specific personal experience that shows you do this naturally.',
    'Connect to the company specifically — why this lab, not just "an FDE role".',
  ]}
  sample={
    <>
      I thrive when there's a real problem in front of me with a real person who needs it solved. Pure product engineering builds for a generalized user — which is good and important work, but it's not the work I get the most energy from. The FDE shape — embedded with one customer, learning their world, building specifically for them, then bringing that intelligence back — uses my engineering depth and my tendency to listen carefully, and it does both at once. For Anthropic specifically: the safety mission is real to me, and the customer-deployment work in highly regulated environments is exactly where I want to put my compliance experience.
    </>
  }
/>

</Section>

<Section label="The glossary and progress pages">

The Glossary lets you search every term we've covered. The Progress page shows which lessons you've completed. Both are reachable from the sidebar.

</Section>

<Connection
  back={[{ id: '00-1-the-letter', title: 'A Letter to a Future FDE' }]}
  forward={[{ id: '00-3-how-learning-works', title: 'How Learning Actually Works' }]}
>

Next: how memory and learning actually work, so the slow-paced design of this curriculum makes sense.

</Connection>
