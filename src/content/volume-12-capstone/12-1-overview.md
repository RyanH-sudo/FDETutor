---
id: 12-1-overview
volume: volume-12-capstone
chapter: 1
number: 1
title: "Capstone Engagements — What You'll Build"
subtitle: "Twelve real customer-style projects, shipped to GitHub."
estimatedMinutes: 9
prerequisites: []
keyTerms: []
exerciseCount: 0
checkpoint: false
tags: [theory, capstone]
---

<Section label="The Opening">

Welcome to the final volume. The previous eleven taught concepts. This volume is twelve customer-style engagements you build end-to-end. Each one has a brief, a discovery doc, a system design, a build, an eval suite, a runbook, and a handoff document. Shipped to GitHub.

By the end you have twelve real artifacts you can point at in interviews.

</Section>

<Section label="The twelve engagements">

**Engagement 1: A simple internal-knowledge RAG.** A small RAG system over a curated set of documents (could be your own notes, or open-source documentation, or anything you have rights to). Demonstrates: end-to-end RAG pipeline, basic eval.

**Engagement 2: A customer-support triage classifier.** Given a synthetic dataset of support tickets, classify by category and urgency. Demonstrates: classification with LLM, structured outputs, eval framework.

**Engagement 3: A document-extraction pipeline.** Given PDFs (could be public 10-Ks, scientific papers, etc.), extract structured data. Demonstrates: PDF handling, structured output, validation.

**Engagement 4: An MCP server.** Build a working MCP server that exposes a useful tool to Claude. Demonstrates: MCP protocol, tool design, integration.

**Engagement 5: A multi-pass-generation report writer.** Take some structured data and generate a multi-page report using extraction → composition → review passes. Demonstrates: multi-pass patterns, narrative generation.

**Engagement 6: A compliance-aware deployment design.** Take a hypothetical customer and design (architecture sketches, written) a HIPAA-compliant RAG deployment. Demonstrates: compliance design, system architecture.

**Engagement 7: An eval framework for an existing system.** Take Engagement 1 and add a comprehensive eval suite — test sets, automated runners, regression detection. Demonstrates: eval engineering.

**Engagement 8: A cost-monitoring dashboard.** For Engagement 1 or 5, add cost tracking and a simple Grafana-or-similar dashboard. Demonstrates: production observability.

**Engagement 9: A customer-scoping document for a hypothetical engagement.** Pick a specific industry and write a real-world-style discovery doc for an imagined customer. Demonstrates: scoping discipline.

**Engagement 10: A live-debugging case study.** Take Engagement 1 (or any earlier project), introduce a deliberate bug, then write up the debugging process as a case study. Demonstrates: troubleshooting methodology, technical writing.

**Engagement 11: A presentation deck.** Pick any of the prior engagements and create an executive-level presentation deck (Google Slides, Keynote). Show ROI, risk, timeline. Demonstrates: executive communication.

**Engagement 12: A self-assessment.** Look back at the prior eleven engagements. Write a reflection on what you learned, what you'd do differently, what you're now confident in. Demonstrates: reflection, growth mindset.

</Section>

<Section label="What you produce per engagement">

Each engagement produces:

1. **A README.** What the project is, why it exists, how to run it. Polished.
2. **A discovery/scope doc.** What problem this solves, success metrics, constraints, scope.
3. **The actual code.** Working, runnable, in a Git repo.
4. **An eval suite.** Even small projects benefit from a test set and a quality measurement.
5. **A reflection.** What went well, what didn't, what you'd do differently.

Push to GitHub. Each engagement is its own repo. Make the README a polished public artifact.

</Section>

<Section label="Why this matters">

After twelve engagements, you have twelve projects you can point at in interviews. Each is a complete story:

- "Tell me about a time you scoped a customer engagement." → Engagement 9.
- "Walk me through an AI system you've built." → Any of Engagements 1-5.
- "How would you handle compliance constraints?" → Engagement 6.
- "What does your eval framework look like?" → Engagement 7.

Real artifacts beat abstract claims. By the end of Volume 12, you have artifacts.

</Section>

<Section label="The pace">

Don't rush. Each engagement is a 1-2 week effort. Twelve engagements at 1-2 weeks each is 12-24 weeks of project work. Spread across the curriculum, that's the rest of your year.

You don't have to finish Volume 12 in order. You can start Engagement 1 after Volume 5 if you want hands-on practice. You can do Engagement 9 (scoping) after Volume 2. The capstone projects integrate with the rest of the curriculum; they don't have to wait until the very end.

</Section>

<FDEConnection>

The capstone engagements are also an interview accelerator. As you finish each one, add it to your portfolio. Mention it on your LinkedIn. Reference it in cover letters. The portfolio compounds with the curriculum — by the time you're applying, you have artifacts that signal seriousness.

</FDEConnection>

<Connection>

The capstone volume continues with detailed briefs for each of the twelve engagements — what to build, what to document, what to put in the README.

</Connection>
