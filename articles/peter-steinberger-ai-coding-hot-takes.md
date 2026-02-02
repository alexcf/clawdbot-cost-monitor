# The Agentic Trap: Why Your AI Coding Workflow is Producing Slop

*Peter Steinberger (OpenClaw founder) drops truth bombs on AI coding - and most people are doing it wrong*

---

I just read an interview with Peter Steinberger, creator of OpenClaw (formerly Clawdbot), and he absolutely destroys the current AI coding meta.

No fancy orchestration. No Ralph loops. No MCPs. No 20-agent swarms with "mayors."

Just: **Human taste + AI execution = actual products**

Here's what he said that's making waves:

---

## ❌ The "Agentic Trap" - What DOESN'T Work

**1. Gastown / Complex Multi-Agent Systems**

Direct quote: *"I call it slop town... there's like a mayor and pcats and watchers and overseers... if you don't navigate them well, it's still going to be slop."*

Running 20+ agents simultaneously, all talking to each other, with sophisticated orchestration?

**That's not productivity. That's vanity metrics.**

People are competing on "my agent ran for 26 hours straight" instead of "I shipped something people want."

---

**2. Ralph Loops**

*"You give the AI one little thing, then you trash away all your context and start again. The ultimate token burn machine."*

Ralph loops (Reflect, Act, Learn, Plan, Repeat) sound smart on paper.

In practice? You're burning context, burning tokens, and producing code that "no sane person would design that way."

The output? **Ralph slop.** You can literally see it - no coherent vision, just feature stacking.

---

**3. MCPs / Fancy Tool Systems**

When asked about MCPs and complex tooling:

*"I don't use MCPs or any of that crap."*

He has very sophisticated personal CLI tools (controls his lights, checks flights, manages his bed temperature).

But for coding? **Simple terminals. That's it.**

Most orchestration systems give "the illusion of making you more productive, but really aren't."

---

**4. Over-Planning Up Front**

*"Plan mode was a hack that Anthropic had to add because the model is so trigger friendly."*

Instead of rigid specs and plan modes:

**Just have a conversation.**

"Let's discuss. Give me options."

Then actually look at what it built, feel it, iterate.

---

## ✅ What ACTUALLY Works

**1. Human in the Loop**

This is the money quote:

*"Your next prompt depends on what you see and feel and think about the current state of the project."*

AI doesn't have **taste** yet.

- They don't know what "feels right"
- They can't evolve a vision as they build
- They need human guidance at decision points

If you try to spec everything upfront and let it run for 24 hours, you get slop.

**The human-machine loop is non-negotiable for quality.**

---

**2. Simple Workflow**

*Note: This is Peter's personal setup - most people start with 1 agent and that works great.*

Peter's approach:
- Simple terminal(s) with AI coding assistant
- **No work trees, no fancy git flows, no orchestrators**
- Basic loop: explore → build → test → push
- That's it

**Why he uses multiple terminals:**
*"If you only work on one, it's very hard to get into the zone because it's just too slow... I need multiple ones to keep me hooked."*

He uses 5 terminals (clawdbot-1, 2, 3, 4, 5) so while one AI is thinking, he can switch to another and stay productive.

**But this is NOT required.** Most people (including many successful builders) work with just 1 agent perfectly fine.

The key insight isn't "use 5 terminals" - it's **"keep it simple."**

No orchestrators. No supervisors. No mission control.

Just: One or more simple terminals + human guidance = shipping code.

---

**3. Conversation > Prompting**

He doesn't "prompt" anymore. He **talks.**

Voice messages to WhatsApp. Screenshots of Discord conversations pasted into terminal.

"Can you read the code and write a new FAQ entry?"

"Let's discuss this feature. Give me options."

**Treat the AI like a smart collaborator, not a compiler.**

---

**4. Learning by Playing**

*"You have to play to understand how those little monsters work."*

People who:
1. Ignore AI for a year
2. Spend one day evaluating
3. Feed it an underspecced prompt
4. Get garbage
5. Write "AI sucks" blog posts

**They're missing the point.**

You have to:
- Explore
- Make mistakes
- Develop your prompting sense
- Learn the AI's "language"

It's like learning to code. You don't get good by reading. You get good by building.

---

## 🎯 The Real Workflow

**When Peter adds a feature:**

1. **Discord conversation** from user about bug/feature
2. **Screenshot or paste** it into terminal
3. **Discuss with AI**: "Let's explore this. What are our options?"
4. **Iterate** based on what he sees/feels
5. **Test locally**
6. **Ship to main**

Sometimes he has the AI scrape Discord help channels daily and identify pain points.

Then they fix the top ones.

**Human taste directing AI execution.**

---

## 💡 The Deeper Insight

*"I'm mostly limited by thinking about it... my thinking is the limiting factor."*

People are optimizing the wrong thing.

They're building:
- Fancy orchestrators
- Multi-agent swarms  
- Complex tool systems
- Automated planning modes

To solve a problem that **doesn't exist**.

**You're already fast enough.**

The bottleneck isn't AI execution speed. It's:
- Your vision clarity
- Your taste
- Your ability to guide
- Your decision-making

Spending 2 months building a "sophisticated orchestrator" to save 5 minutes per feature?

**You fell into the agentic trap.**

---

## 🚫 What to Avoid

1. **Slop metrics** - "My agent ran 26 hours!" Cool. Did it ship?
2. **Tool building** - Building tools to build tools to build tools
3. **Context churn** - Ralph loops throwing away expensive context
4. **Over-orchestration** - 20 agents with mayors and supervisors
5. **Spec obsession** - Trying to plan everything upfront
6. **Copy-pasting workflows** - Find your own path through exploration

---

## ✅ What to Do Instead

1. **Just talk to it** - Conversation, not rigid prompting
2. **Stay in the loop** - Guide with your taste and vision
3. **Keep it simple** - Split terminals > complex orchestration
4. **Iterate fast** - Build → feel → adjust → ship
5. **Develop your sense** - Learn by playing, not by reading
6. **Human taste + AI execution** - This is the formula

---

## The Punchline

Peter built OpenClaw (300K lines of TypeScript) entirely with AI.

It:
- Runs on every messaging platform
- Has 100% open source
- Growing community
- Shipping features daily

His workflow?
- No Ralph loops
- No MCPs
- No mission control
- No fancy orchestration

Just: **Simple terminals and human conversation.**

Meanwhile, others are spending months building "AI orchestrators" that produce slop.

---

## My Take

I've been building with AI for months now. This interview validated everything I've learned the hard way.

**The fancy stuff doesn't work.**

What works:
- Clear vision
- Human guidance  
- Simple tools
- Fast iteration

Your taste matters more than your orchestration.

Your vision matters more than your automation.

**The AI isn't the product. What you build with it is.**

Stop optimizing the wrong thing.

---

**Want to go deeper?**

Full interview: [https://www.youtube.com/watch?v=AcwK1Uuwc0U]

OpenClaw: [https://claw.bot]

---

**Hot take:** In 6 months, half the "AI coding framework" startups will be dead, and the winners will be the ones who kept it simple and shipped actual products.

Don't build orchestrators. Build products.

Don't optimize AI workflows. Optimize your thinking.

**The agentic trap is real. Don't fall for it.**

---

*What's your AI coding workflow? Are you in the trap? 👇*

---

## Twitter Thread Version (Alternative Format)

If you prefer to post as a thread instead of a long-form article, here's the condensed version:

**Tweet 1 (Hook):**
Peter Steinberger (OpenClaw founder) just destroyed the AI coding meta in one interview.

No Ralph loops. No MCPs. No 20-agent orchestrators.

Just: Human taste + AI execution = products

Here's what most people are getting wrong: 🧵

**Tweet 2:**
❌ The "Agentic Trap"

Building fancy orchestration systems instead of actual products.

"Gastown" with 20+ agents, mayors, watchers = "slop town"

Ralph loops that trash context = "ultimate token burn machine"

You're optimizing the wrong thing.

**Tweet 3:**
Peter's direct quote on MCPs and complex tooling:

"I don't use MCPs or any of that crap."

Most orchestration systems give "the illusion of making you more productive, but really aren't."

**Tweet 4:**
✅ What ACTUALLY works:

Simple tools. Human conversation. Fast iteration.

Build → feel → adjust → ship.

No orchestrators. No supervisors. No mission control.

(He uses multiple terminals to stay productive while AI thinks - but 1 works fine too!)

Simple approach + human taste = 300K lines of shipping code.

**Tweet 5:**
The money quote:

"Your next prompt depends on what you see and FEEL and THINK about the current state."

AI doesn't have taste yet. You do.

The human-machine loop is non-negotiable for quality.

**Tweet 6:**
Stop competing on "my agent ran 26 hours straight!"

Start shipping products people want.

Your thinking is the bottleneck. Not AI execution speed.

Optimize your vision. Not your orchestration.

**Tweet 7:**
Want the full breakdown?

👉 [Link to your article]

Or watch the full interview:
👉 [YouTube link]

Don't fall into the agentic trap. Keep it simple. Ship products.

---

END OF ARTICLE
