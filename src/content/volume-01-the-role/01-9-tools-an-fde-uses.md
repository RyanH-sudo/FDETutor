---
id: 01-9-tools-an-fde-uses
volume: volume-01-the-role
chapter: 2
number: 9
title: "Tools an FDE Uses"
subtitle: "The actual toolkit, 2026 edition."
estimatedMinutes: 10
prerequisites: [01-8-success-and-failure-modes]
keyTerms: []
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

A walking tour of the typical FDE's toolkit. Not exhaustive — the tooling landscape changes fast — but representative of what's in 2026.

</Section>

<Section label="Code & development">

**Languages.** Python is dominant for AI engineering. JavaScript/TypeScript for frontend or any browser-side work. Some Go and Rust where performance matters. Occasionally bash and SQL.

**Editors.** VS Code with Copilot or Cursor with Composer is the modal setup. Vim/Neovim for the dedicated. Terminals: most engineers use a modern terminal (Wezterm, Alacritty, iTerm2).

**Version control.** Git, hosted on GitHub or the customer's GitLab/Bitbucket. PRs are the unit of change. Code review is universal.

**AI coding assistants.** Claude Code (this is what you're inside if you're an Anthropic FDE), Cursor, GitHub Copilot. Most FDEs use AI assistance heavily for boilerplate, exploration, and refactoring.

</Section>

<Section label="AI engineering specifically">

**LLM APIs.** Anthropic Claude API (`anthropic` Python SDK). OpenAI API (`openai` Python SDK). Both have similar shape; the SDK choice depends on which model you're targeting.

**Vector databases.** ChromaDB for local prototyping (free, embedded). Pinecone, Weaviate, or pgvector for production. Each has different tradeoffs.

**RAG frameworks.** LangChain or LlamaIndex are common but increasingly engineers prefer to write their own thin wrappers — the frameworks have a lot of API churn. The trend in 2026 is "use the SDK directly, write the orchestration yourself."

**Eval frameworks.** Internal eval suites are most common. Public frameworks: OpenAI's Evals, Promptfoo, Inspect (UK AI Safety Institute), DeepEval.

**Observability for AI.** LangSmith (LangChain's), Helicone, Phoenix (Arize), or custom solutions. The space is still evolving.

**Model Context Protocol.** Anthropic's MCP for connecting AI to tools/data. The MCP SDKs in Python and TypeScript are where this lives.

</Section>

<Section label="Infrastructure">

**Cloud providers.** AWS, Azure, GCP — most customers use one or two. AWS has the largest market share; Azure dominates in some sectors (gov, finance); GCP for some AI-native shops.

**Containers.** Docker for local development; Kubernetes for production sometimes (less universal in AI deployments — many run as serverless functions or simple Cloud Run / ECS / App Service).

**Infrastructure-as-code.** Terraform is the dominant IaC tool. Pulumi has fans (uses real programming languages). CloudFormation for AWS-only shops.

**CI/CD.** GitHub Actions is the default for most. GitLab CI for GitLab shops. CircleCI, Buildkite at some companies.

</Section>

<Section label="Customer-facing tools">

**Communication.** Slack with the customer (each customer typically has a shared channel with you). Email for formal communications. Zoom or Google Meet for calls.

**Documentation.** Notion or Confluence for internal docs. Customer-facing docs often live in their wiki (Confluence, SharePoint, internal Notion). Markdown files in the repo for engineering docs.

**Project tracking.** Linear or Jira at the company; customer-side might use Asana, Monday, or whatever the customer prefers. Some FDEs maintain a personal project plan in a Markdown file in the repo.

**Customer notes.** Notion is common for customer-relationship notes. Some FDEs use a personal CRM (Airtable, custom), others use the company's official CRM (Salesforce or HubSpot).

</Section>

<Section label="Things you'll learn per customer">

In addition to the FDE-standard toolkit, every customer brings tools you'll need to learn for that engagement:

- *Customer's identity provider.* Okta, Azure AD, Auth0, etc.
- *Customer's data warehouse.* Snowflake, Databricks, BigQuery, Redshift.
- *Customer's secrets management.* HashiCorp Vault, AWS Secrets Manager, Azure Key Vault.
- *Customer's monitoring.* Datadog, Splunk, New Relic, custom Prometheus/Grafana.
- *Customer's specific compliance tooling.* Vanta, Drata, ServiceNow, internal homegrown.
- *Customer's CI/CD specifics.* GitHub Actions configured a particular way, Jenkins, ArgoCD.

You don't need to know all of these in advance. You need to be comfortable learning them quickly. A senior FDE shows up at a new customer, reads their architecture docs in a day, and is operating in their stack within a week.

</Section>

<Section label="The 'AI as force multiplier' question">

In 2026, AI coding assistants are universal. FDEs use them constantly. Don't pretend you don't.

In an interview, the right framing is: "I use Claude / Cursor heavily for boilerplate and exploration. I direct the work, make architectural decisions, and verify the output. AI is the implementation layer; I'm the brain layer. This lets me move faster and focus my time on the parts that matter — understanding the customer's problem, making design tradeoffs, ensuring the system works in their environment."

This framing is honest, modern, and matches what AI labs themselves do internally. Anthropic's engineers use Claude Code daily; OpenAI's engineers use AI tools daily. The "I write everything from scratch by hand" framing is dated.

</Section>

<Connection
  back={[{ id: '01-8-success-and-failure-modes', title: 'Success and Failure Modes' }]}
  forward={[{ id: '01-10-volume-1-recap', title: 'Volume 1 Recap' }]}
>

Next: a checkpoint lesson recapping Volume 1 and previewing the customer-first thinking volume.

</Connection>
