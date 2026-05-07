---
id: 00-5-history-in-brief
volume: volume-00-welcome
chapter: 1
number: 5
title: "A Brief History of the FDE Role"
subtitle: "From Palantir's bet to every AI lab in 2026."
estimatedMinutes: 11
prerequisites: [00-4-the-language-of-fdes]
keyTerms: [fde]
exerciseCount: 0
checkpoint: false
tags: [theory, history]
---

<Section label="The Opening">

To understand the FDE role today, it helps to know where it came from and how it evolved. The role is younger than it looks — only about fifteen years old as a formal title — but the underlying idea has older roots in technical-sales hybrids and field-applications-engineering work. The shape of the modern role was set at Palantir, refined by other enterprise software companies, then adopted by AI labs in 2023-2024.

</Section>

<HistoryNote year="~2010" who="Palantir Technologies">

Palantir's early customers were intelligence agencies, defense contractors, and big banks. Each one had unique data, unique workflows, and a strong preference for not letting outside vendors touch their systems. Palantir's bet was to send actual engineers — not sales engineers, not consultants — to those customer sites for weeks or months at a time. They'd become technical members of the customer's team while remaining technical members of Palantir's team. They wrote code that ran in the customer's production environment. They surfaced what they learned back to Palantir's product team.

The role was called *Forward Deployed Software Engineer* (FDSE). Palantir is widely credited as the inventor of the modern formal role.

</HistoryNote>

<Section label="The Palantir bet — why send engineers, not salespeople?">

Palantir's reasoning ran like this:

1. *Enterprise software value comes from how it integrates with the customer's reality.* The platform alone is not the product; the platform-plus-deployment is.
2. *Each customer's reality is unique.* No two intelligence-agency data fabrics are the same. No two banks' compliance regimes are the same.
3. *The integration work is too technical for sales engineers and too customer-facing for product engineers.* It needs both at once.
4. *The engineer who does this work also generates the most insight* about what to build into the platform next. Field intelligence beats office product brainstorms.

So: send the most senior engineers you have, give them deep customer relationships, and let them write code in the field.

This was contrarian at the time. Most enterprise software companies treated customer-facing technical work as a lower-status track for engineers who weren't quite product-engineering material. Palantir flipped that, treating FDSE as a senior technical role with serious career trajectory and serious comp.

</Section>

<Section label="The 2010s: Palantir's growth, the role spreads">

Through the 2010s, Palantir scaled the FDSE program. At its peak the company employed *more FDSEs than office-based engineers*. The role was essential to Palantir's product-market fit at every customer.

Other enterprise companies started borrowing the model:

- **Databricks** built an FDE / solutions-architecture function for its largest customers.
- **Snowflake** developed a similar field-engineering model.
- **Stripe** had "Forward Deployed Engineers" as a small team for very large enterprise customers.
- **Ramp** built an FDE practice for its product launches.

Each company adapted the model. Some emphasized customer-embedding more (Palantir-style). Others emphasized platform-extension for enterprise customers (Snowflake-style). The shared DNA: senior engineers in customer-facing technical roles, with significant product influence.

</Section>

<Section label="2023-2024: The AI labs catch up">

In 2023, OpenAI started building an FDE function. Colin Jarvis was hired to lead it. Within months he was talking publicly about the role, often in terms borrowed directly from Palantir.

In 2024, Anthropic started building its own version. Anthropic preferred the title "Solutions Architect" for some roles and "Forward Deployed Engineer" for others, with significant overlap. By 2025 the postings were everywhere.

Why now, for AI labs specifically? Because:

1. *Frontier AI customer deployments are deeply technical.* Each customer has unique data, unique compliance, unique stack. Same problem as Palantir's customers, just centered on AI rather than analytics.
2. *Generic "implementation services" weren't enough.* Customers needed engineers, not consultants.
3. *The labs needed field intelligence to shape products.* What's actually getting deployed? What's failing in production? What features would unlock real adoption? The FDE feedback loop answers these.
4. *The talent supply existed.* Senior engineers with both depth and customer skills were available — partly from Palantir alumni, partly from solutions-engineering tracks at other companies, partly from independent builders who'd grown into the role on their own.

By 2026 (when you're reading this), almost every AI lab and many AI startups have FDE programs. Anthropic, OpenAI, Glean, Vanta, Cresta, Decagon, Reflection AI, Harvey, Hebbia, Sierra, Drata — all hiring for variants of the role.

</Section>

<Section label="What's distinctive about the AI-lab version">

A few things distinguish 2026 AI-lab FDE work from the original Palantir model:

- **Faster iterations.** AI deployments often go from POC to production in weeks, not months. The pace is higher.
- **More greenfield work.** Most customers don't have a prior AI deployment. You're not retrofitting; you're building from scratch.
- **Higher product-influence per FDE.** AI products are still maturing rapidly. What you learn from customers in week one shapes the platform in month two.
- **Compliance-heavy.** Many customers are in healthcare, finance, government, education — sectors with strict compliance regimes. HIPAA, FERPA, NIST, SOC2 are constant companions.
- **Cross-disciplinary.** AI FDE work mixes traditional engineering with prompt/context engineering, evals, agentic patterns, harness design.

</Section>

<Section label="Where this is going">

Predictions for 2027-2030:

- **The role becomes more specialized.** Healthcare-FDE, government-FDE, finance-FDE separating into distinct tracks because the compliance and integration patterns differ enough.
- **More remote and globally distributed.** The original Palantir model required physical embedding. AI work is more amenable to remote, partly because customers are more comfortable with remote, partly because the medium is digital.
- **Tighter integration with platform engineering.** The FDE-to-platform-engineer feedback loop becomes formal — RFCs, internal proposals, dedicated platform teams that handle FDE-surfaced patterns.
- **More junior tracks.** As the role normalizes, junior FDE positions emerge — with mentorship paths from senior practitioners.

You're entering the role at a good time. It's mature enough to be well-paid and respected, young enough to still be growing fast, and important enough that every AI company is competing for talent.

</Section>

<HistoryNote year="2026" who="The state of the field">

In 2026, FDE roles command base salaries from $160K (junior at startups) to $400K+ (senior at frontier labs). Total compensation including equity often runs 30-50% higher. The role has crossed from niche to standard, and the demand outpaces supply by a wide margin.

</HistoryNote>

<Connection
  back={[{ id: '00-4-the-language-of-fdes', title: 'The Language of FDEs' }]}
  forward={[{ id: '00-6-fde-mindset', title: 'The FDE Mindset' }]}
>

Next: the mental habits that distinguish good FDEs from struggling ones — calm under ambiguity, layered thinking, evidence-first reasoning, and the discipline of running toward problems.

</Connection>
