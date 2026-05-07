---
id: 01-3-fde-vs-solutions-architect
volume: volume-01-the-role
chapter: 1
number: 3
title: "FDE vs Solutions Architect vs Sales Engineer"
subtitle: "The role variants. Which is which. What each one specifically does."
estimatedMinutes: 11
prerequisites: [01-2-customer-vs-product-engineering]
keyTerms: [solutions architect, applied ai engineer]
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

The titles in customer-facing technical work are a confusing mess. Forward Deployed Engineer. Solutions Architect. Sales Engineer. Customer Engineer. Implementation Specialist. Technical Account Manager. Applied AI Engineer. Each has overlap with the others, and different companies use them differently.

This lesson maps the territory. The titles aren't perfectly distinct — they shade into each other — but there are real differences in emphasis. Knowing them helps you target the right roles and answer interview questions about role distinctions cleanly.

</Section>

<Section label="The five archetypes">

There are roughly five distinct roles, even though companies name them differently:

**1. Forward Deployed Engineer (FDE).** Production-grade engineering, embedded with the customer. Writes code that ships to the customer's environment. Significant influence on the company's platform via field intelligence. The role we're focused on in this curriculum.

**2. Solutions Architect (SA).** Designs technical solutions for customers, often in pre-sales and early engagement. Less hands-on coding, more architecture diagrams and high-level design. Some SA roles are very FDE-like (Anthropic uses "Solutions Architect" for some FDE-flavored positions); others are more advisory.

**3. Sales Engineer (SE).** Pre-sales technical role. Demos the product. Answers prospect questions. Builds custom POCs. Less customer-embedded; more meeting-driven. Often the first technical voice the prospect hears.

**4. Customer Engineer / Customer Success Engineer.** Post-sale, ongoing customer technical relationship. Less project-shaped, more relationship-shaped. Helps the customer get more value out of the platform over time.

**5. Implementation Engineer / Implementation Specialist.** Deploys the product to specific customers. More repeatable than FDE work — less custom code, more configuration. Often the role at companies whose product has standard deployment patterns.

</Section>

<Section label="Where the lines blur">

The roles aren't crisp. A few examples of where they overlap:

- **FDE-shaped Solutions Architects.** At Anthropic, some "Solutions Architect" postings describe what other companies would call FDE — embedded customer engineering. The title varies; the work is similar.
- **Pre-sales-leaning FDEs.** At some startups, an FDE is involved in pre-sales POCs as well as post-sales delivery. They wear an SE hat for new prospects.
- **Customer-engineering-leaning Implementation roles.** At established SaaS companies, "Customer Engineer" sometimes covers what others call Implementation — long-term relationship plus standard deployment.
- **Applied AI Engineer.** A 2023-2024 coinage. Sometimes overlaps with FDE (customer-facing applied AI work). Sometimes is a platform-engineering role (building AI features for the product). The title's meaning depends on the company.

When applying for jobs, read the job description carefully. The title is misleading; the listed responsibilities are the truth.

</Section>

<Section label="A simple decision matrix">

If you're trying to figure out which role a job posting actually represents, ask:

- *Does the role write production code for customer environments?* Yes → FDE-shaped. No → likely SA, SE, or implementation.
- *Is the role pre-sale or post-sale?* Pre-sale → SE-shaped. Post-sale → could be any of FDE, SA, CE, Implementation.
- *Is the work project-shaped (engagement-bound) or relationship-shaped (continuous)?* Project → FDE. Relationship → CE.
- *How custom is each customer engagement?* Highly custom → FDE. Standardized → Implementation.

</Section>

<Section label="Comp, briefly">

Compensation differs across these roles. Approximate 2026 ranges (US, base salary, at established AI labs and high-tier AI startups):

| Role | Base range |
|------|------------|
| Sales Engineer | $130-200K |
| Implementation Engineer | $130-200K |
| Customer Engineer / Success Engineer | $140-210K |
| Solutions Architect | $160-280K (FDE-shaped SA roles top higher) |
| Forward Deployed Engineer | $200-400K |
| Applied AI Engineer | $200-400K |

FDE and Applied AI are the highest-paid because the bar is highest. Senior FDEs at Anthropic, OpenAI, and Palantir routinely clear $400K total comp.

</Section>

<Section label="Which one should you target?">

Depends on what you want.

- *If you want maximum technical depth + customer engagement + comp:* FDE.
- *If you want technical depth without the customer-facing part:* product engineering or platform engineering. Not what this curriculum prepares you for, but a fine choice.
- *If you want customer-facing work without deep coding:* SA or CE.
- *If you want pre-sales speed:* SE.

Most readers of this curriculum are FDE-targeted. The career path from any of these roles into FDE is real (especially from SA or strong SE backgrounds), but the depth of technical work needs to match.

</Section>

<FDEConnection>

When you apply, target FDE specifically. If a job is titled Solutions Architect or Applied AI Engineer but the responsibilities match FDE work, apply anyway — many of the highest-paying FDE-shape roles are titled differently. Conversely, some "FDE" titles at certain companies are actually closer to implementation work; read the job description to confirm.

A good cover letter mentions which shape the role appears to be and why your background fits *that specific shape*, not the title alone.

</FDEConnection>

<Connection
  back={[{ id: '01-2-customer-vs-product-engineering', title: 'FDE vs Product Engineering' }]}
  forward={[{ id: '01-4-comp-bands', title: 'Compensation in 2026' }]}
>

Next: compensation in detail — base, equity, signing bonus, total comp, by company tier and seniority.

</Connection>
