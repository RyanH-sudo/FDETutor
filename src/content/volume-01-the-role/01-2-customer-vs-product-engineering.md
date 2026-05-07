---
id: 01-2-customer-vs-product-engineering
volume: volume-01-the-role
chapter: 1
number: 2
title: "FDE vs Product Engineering"
subtitle: "One customer many capabilities, vs many customers one capability."
estimatedMinutes: 11
prerequisites: [01-1-what-an-fde-does]
keyTerms: []
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

Product engineering and FDE work are both engineering, but they have inverted shapes. Knowing the inversion helps you understand which one you actually want, and lets you answer interview questions about why you prefer one over the other.

</Section>

<Section label="The inversion: customer multiplicity">

A *product engineer* builds for many customers. They write code that goes out to thousands or millions of users. The user-base for any feature is large; the feature itself is fixed.

An *FDE* builds for one customer at a time. The customer-base is one (or two, or a small handful in a portfolio). The set of capabilities the FDE brings is large — they design, code, configure, integrate, document, train, troubleshoot — anything the customer needs.

The phrase that captures this: *one customer, many capabilities* (FDE) versus *many customers, one capability* (product engineer).

This inversion explains a lot about why the roles feel different.

</Section>

<Section label="What changes because of the inversion">

**The product engineer optimizes for generality.** Their code has to work for many users with different needs. Edge cases matter. Performance matters at scale. Consistency across users matters.

**The FDE optimizes for specificity.** Their code has to work for *this* customer's data, *this* customer's compliance, *this* customer's stack. Edge cases that don't apply to this customer can be ignored. Performance only matters for this customer's workload.

**The product engineer's relationship is with the codebase.** They live in it. They know its history. They can find any piece in seconds.

**The FDE's relationship is with the customer.** They live in the customer's environment. They know the customer's people. They can navigate the customer's organization.

**The product engineer's success metric is feature shipped.** Did the feature ship? Is it stable in production? Are users adopting it?

**The FDE's success metric is customer outcome.** Did the customer get the business value they were paying for? Did they sign the next phase? Will they recommend us?

</Section>

<Section label="The 'right altitude' problem">

Product engineers usually operate at one altitude — deep technical detail. They live in code.

FDEs operate at *many altitudes* in a single day. In an executive presentation, you're at 30,000 feet — strategy, ROI, risk. In a session with the customer's data team, you're at 5,000 feet — architecture, system design. In a debugging session, you're at ground level — code, traces, logs.

The skill of moving between altitudes — knowing which one the current conversation calls for, switching cleanly — is something FDEs develop. It's also the source of the "I can't do this all day" feeling that some product engineers have when they try the FDE role.

</Section>

<DecisionTree
  title="When to use which altitude"
  root={{
    question: 'Who am I talking to right now?',
    branches: [
      { label: 'Customer executive sponsor', outcome: <>30,000 feet. ROI, risk, business outcome. Strategic. Avoid technical detail unless asked.</> },
      { label: 'Customer engineering team', outcome: <>5,000 feet. Architecture, integration patterns, key trade-offs. Technical but not in code.</> },
      { label: 'Customer data team / debugging', outcome: <>Ground level. Specific code, specific data, specific traces. Pair-programming altitude.</> },
      { label: 'Internal product team', outcome: <>Mixed. Customer outcomes (high) + technical patterns (low). What pattern should the platform support next?</> },
    ],
  }}
/>

<Section label="What's lost in the inversion">

Product engineering has things FDE work doesn't:

- **Long-term codebase ownership.** The product engineer's code is a permanent thing they build over years. The FDE's code typically lives for one engagement and then gets handed off.
- **Deep specialization.** The product engineer can become deeply expert in one area (frontend performance, distributed systems, ML infra). The FDE is broader by necessity.
- **Predictable rhythm.** Product engineers have sprints, releases, on-call rotations. FDEs have customer schedules, which are erratic.
- **Less customer politics.** The FDE works inside the customer's organizational dynamics — which can be messy.

</Section>

<Section label="What's gained in the inversion">

FDE work has things product engineering doesn't:

- **Direct impact visibility.** You see customers using your code. You hear their stories. The feedback loop is short.
- **Higher product influence per person.** Your customer learnings change the product roadmap.
- **Variety.** Different customers, different industries, different problem shapes. The work doesn't get repetitive.
- **Customer relationships.** The skill of building deep technical-customer relationships is rare and valuable. It's also fun for people who like that kind of thing.
- **Career optionality.** Senior FDEs can branch into product, into customer-success leadership, into founding their own companies. The role's broad surface gives many directions to grow.

</Section>

<MockInterview
  setup="A common opening interview question:"
  question="Why do you want to be an FDE specifically? You could be a product engineer at a high-paying company. What draws you to this role?"
  checklist={[
    "Reference the inversion: customer-embedded engineering vs product engineering. Use the 'one customer, many capabilities' framing if it feels natural.",
    "Acknowledge the trade-offs honestly — what you give up (deep specialization, predictable rhythm) and what you gain (direct customer impact, variety, product influence).",
    "Cite a specific personal experience that shows you do this naturally — a moment you found yourself enjoying customer-embedded work over heads-down product work.",
    "Tie it to the company and role specifically — why this lab's customers, this lab's mission.",
  ]}
  sample={
    <>
      The inversion is part of what draws me. Product engineering is great work, but the customer-base is abstract — you build for users you'll never meet. FDE work flips that. You build for one customer you actually know, in their actual environment, with their actual constraints. The feedback loop is short. The relationships are deep. The variety is real.
      <br /><br />
      I've already been doing some of this informally — embedded with one team's needs, building specifically for them, then bringing what I learned back to the larger product. The FDE role at a frontier AI lab is the formal version of that, with the multiplier of working at the technology frontier instead of the application frontier. The "one customer, many capabilities" shape uses my engineering depth and my tendency to listen carefully, and it does both at once.
    </>
  }
/>

<Connection
  back={[{ id: '01-1-what-an-fde-does', title: 'What an FDE Actually Does' }]}
  forward={[{ id: '01-3-fde-vs-solutions-architect', title: 'FDE vs Solutions Architect vs Sales Engineer' }]}
>

Next: a careful look at the role variants — FDE, Solutions Architect, Sales Engineer, Customer Engineer — and what each one specifically does.

</Connection>
