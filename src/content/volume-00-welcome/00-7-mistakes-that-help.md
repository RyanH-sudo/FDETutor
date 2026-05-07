---
id: 00-7-mistakes-that-help
volume: volume-00-welcome
chapter: 1
number: 7
title: "The Mistakes That Help"
subtitle: "How to be friends with your own bad decisions."
estimatedMinutes: 10
prerequisites: [00-6-fde-mindset]
keyTerms: []
exerciseCount: 0
checkpoint: false
tags: [theory]
---

<Section label="The Opening">

You're going to make wrong calls. You'll over-scope a project that should have been smaller. You'll under-scope one that needed to be bigger. You'll commit to a timeline that turns out to be impossible. You'll recommend RAG when keyword search would have been better. Every FDE has done all of these. The good ones learned from them quickly. The bad ones made the same mistakes for years.

This lesson is about how to learn from mistakes — both small ones in this curriculum's exercises and the real ones you'll make later.

</Section>

<Section label="Errors aren't punishment, they're information">

When a customer pushes back on your scoping doc, when an executive asks a question you can't answer, when an eval fails — the natural reaction is defensive. Resist that. The pushback, the question, the failure are all *information* you didn't have a moment ago. Each one is a kindness in disguise.

The framing that helps: *the customer just told me something I needed to know*. Now I know. The next move depends on what I just learned.

</Section>

<Section label="The 'one change at a time' rule">

When something's broken in a customer system and you're trying to fix it: *change one thing, verify the effect, then change the next.*

The temptation in pressure is to change three things at once. Don't. If it works, you don't know which fixed it. If it doesn't, you've added new problems on top of the original.

This rule applies in scoping too. When the customer asks for "all of A, B, and C," the FDE move is often "let's start with A. We'll know much more after A is shipped, and B and C might look different in light of what we learn." One scope change at a time.

</Section>

<Section label="The capture-the-conversation principle">

In FDE work, the equivalent of network packet captures is *meeting notes*. When you're in a customer call and someone says something significant, write it down — verbatim if possible.

Why: because three weeks later, the customer's recollection of what was said will differ from yours, and the meeting notes are the truth. They're also invaluable when scope creeps and you need to remember whether something was actually agreed to or just discussed.

The format that works:

```
[date / call name]
Attendees: <list>
Decisions made:
  - <decision>
  - <decision>
Action items:
  - <person> to do <thing> by <date>
Open questions:
  - <question>
```

Send the notes to the customer after each call. They become the contemporaneous record. The number of FDE engagements that go sideways because of "they said X / no I didn't" disputes is depressingly high. Notes make those disputes resolvable.

</Section>

<Section label="The 'small reversible mistakes' principle">

There are two kinds of mistakes in engineering: reversible and irreversible. The first kind is cheap; the second kind is expensive.

Examples:
- **Reversible:** committing the wrong code (revert), running the wrong query (read-only, no data lost), proposing the wrong architecture (revise).
- **Irreversible:** dropping a production database, sending a misleading email to an executive, making a customer commitment you can't keep, deleting customer data.

The FDE discipline: be conservative on irreversible decisions. Get a second pair of eyes. Sleep on it. Confirm before sending. *Be aggressive on reversible ones.* Try things, see what happens, learn fast.

Most engineering wisdom is about distinguishing the two. New FDEs sometimes get this backwards — they're conservative on small reversible decisions (debating CSS class names) and aggressive on irreversible ones (sending a hot-headed email to a customer's CEO). Learn to invert.

</Section>

<Section label="The 'I was wrong' practice">

Saying "I was wrong" out loud, on a customer call, when you actually were wrong, is one of the highest-leverage moves in FDE work. It does several things at once:

1. Establishes you as honest. The customer will trust the next 12 months of your work more.
2. Resets the conversation. The disputed point is closed; the team can move on.
3. Models the behavior for the customer's team. They'll start saying it too.
4. Demonstrates calibration. You know your own knowledge boundaries.

Junior FDEs often try to defend wrong positions. It almost never works. The customer can usually tell, and even when they can't, the bad recommendation will surface later and the original mistake will compound with the dishonesty about it.

Senior FDEs say "you know what — I was wrong about that. Let me come back to you with a corrected view by end of day." It's the strongest possible move when actually wrong.

</Section>

<FDEConnection>

The most expensive mistakes I've heard FDEs describe are not technical. They're *commitment* mistakes — telling a customer "we can ship X by date Y" without enough information to know it's feasible, then having to walk it back two weeks later.

The fix is discipline at the moment of commitment: *what would I need to know to be sure of this date?* If the answer is anything substantive, push back. "I want to give you a real timeline. Let me come back tomorrow with a structured estimate after I look at A, B, C."

Customers respect a delayed-but-accurate commitment. They don't respect a fast commitment that gets revised. Slowness in commitment is a feature, not a bug.

</FDEConnection>

<Connection
  back={[{ id: '00-6-fde-mindset', title: 'The FDE Mindset' }]}
  forward={[{ id: '00-8-the-pact', title: 'The Pact' }]}
>

One more orientation lesson, and then Volume 1 begins.

</Connection>
