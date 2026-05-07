---
id: 02-1-discovery-as-listening
volume: volume-02-customer-first
chapter: 1
number: 1
title: "Discovery as Listening"
subtitle: "The first hour with a customer is mostly your ears."
estimatedMinutes: 10
prerequisites: [01-10-volume-1-recap]
keyTerms: [discovery]
exerciseCount: 0
checkpoint: false
tags: [theory, customer]
---

<Section label="The Opening">

Volume 2 is about customer-first thinking — the art of turning ambiguous customer requests into concrete engagements. The first lesson is the simplest and the hardest: *listen first*.

</Section>

<Section label="The senior move">

A new FDE on a discovery call talks 60% of the time. They explain their company's product, demo capabilities, propose solutions. The customer listens politely.

A senior FDE on a discovery call talks 20% of the time. They ask questions. The customer talks. The customer reveals the actual problem, the actual data, the actual stakeholders, the actual constraints. By the end of the call the senior FDE knows things the new FDE wouldn't have learned in three calls.

The skill is *active listening*. Not just being quiet — being quiet *while paying attention to what's not being said*.

</Section>

<Section label="What good discovery questions sound like">

Open-ended. Specific. Inviting elaboration.

Bad: "Do you want to use AI for customer support?"
Good: "Tell me about how customer support works at your company today."

Bad: "Is data quality a concern?"
Good: "Walk me through what your support data actually looks like — how it's stored, who maintains it, how it gets created."

Bad: "What's the budget?"
Good: "What does success look like, and what does the path to that success need to include?"

Notice the pattern: open-ended questions get rich answers. Yes/no questions close conversations. Senior FDEs ask few yes/no questions in discovery.

</Section>

<DialogueExchange
  title="Two versions of the same call"
  lines={[
    { speaker: 'note', text: 'Version A — Junior FDE. Talks too much.' },
    { speaker: 'engineer', label: 'Junior', text: "Hi! I'm excited about this. Our platform is great for customer support — we have RAG, we have multi-pass generation, we've helped other customers reduce their TTR by 40%. Let me show you a demo." },
    { speaker: 'customer', label: 'Customer', text: "OK. (politely watches demo)" },
    { speaker: 'engineer', label: 'Junior', text: "Great, right? Should we go ahead with a 6-month pilot?" },
    { speaker: 'customer', label: 'Customer', text: "We'll, um, get back to you on that.", note: "Lost. The customer never got to talk about their actual situation." },
    { speaker: 'note', text: '---' },
    { speaker: 'note', text: 'Version B — Senior FDE. Listens.' },
    { speaker: 'engineer', label: 'Senior', text: "Thanks for making time. Before I tell you anything about our platform — can I just understand your world a bit? Tell me about how customer support works at your company today." },
    { speaker: 'customer', label: 'Customer', text: "Sure. We have about 200 reps across 4 regions. They handle around 50,000 tickets a month. Average ticket takes 25 minutes. Top complaints from customers are…" },
    { speaker: 'engineer', label: 'Senior', text: "And when you say 'we want to use AI to make this better' — what does 'better' mean specifically? Faster handle time? Higher CSAT? Fewer escalations to engineering?" },
    { speaker: 'customer', label: 'Customer', text: "Honestly, the biggest pain is escalations — about 8% go to engineering and those are the ones that really hurt productivity." },
    { speaker: 'engineer', label: 'Senior', text: "Got it. So if we drove the 8% down to 4%, that would be the metric that matters most?" },
    { speaker: 'customer', label: 'Customer', text: "Yes — that would be huge." },
    { speaker: 'note', text: 'The senior FDE has the actual problem in five questions. The metric is set. The shape of the project is clear. They never demoed the platform — and that was the right call.' },
  ]}
  caption="The same conversation. Two engineers. Different outcomes."
/>

<Section label="Listening for what's not said">

Beyond hearing what the customer says, senior FDEs notice what they don't say.

- *Silence on a topic* often signals discomfort or politics. If the customer happily discusses everything except a particular team or system, that team or system has issues you'll need to surface carefully.
- *Repeated emphasis* signals the customer's actual priority. If they mention a particular metric three times, even casually, that metric matters more than they're saying.
- *Tone shifts* signal stakes. When their voice changes around a particular topic, take note. Either it's deeply important or politically charged.

These signals are subtle. They require focused attention rather than internal rehearsal of your next question.

</Section>

<Connection
  forward={[]}
>

Volume 2 continues with stakeholder mapping, scoping techniques, and the discipline of writing the discovery document.

</Connection>
