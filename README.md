# 💰 Clawdbot Cost Monitor

**Track your Clawdbot AI spending in real-time.**

Stop wondering how much your AI assistant costs. Get instant visibility into your token usage and costs across all models.

## The Problem

Clawdbot users have no idea what they're spending on AI:
- "I've been using this for 2 days, no clue what I've spent"
- "Is this going to cost me $5 or $500 this month?"
- Fear of surprise bills

## The Solution

A beautiful real-time dashboard showing:
- ✅ Total cost (all-time)
- ✅ Token usage (input/output breakdown)
- ✅ Cost by model (which models are expensive?)
- ✅ Per-session breakdown
- ✅ Live updates every 5 seconds

## Quick Start

```bash
# Install dependencies
cd clawdbot-cost-monitor
npm install

# Start the dashboard
npm start

# Open in your browser
# http://localhost:3939
```

## How It Works

1. Reads your Clawdbot session data from `~/.clawdbot/agents/main/sessions/sessions.json`
2. Calculates costs based on official model pricing
3. Displays everything in a clean, real-time dashboard
4. Updates automatically as you use Clawdbot

## Supported Models

- Claude Sonnet 4/4.5
- Claude Opus 4
- GPT-4/GPT-4 Turbo
- GPT-3.5 Turbo
- And more...

## Requirements

- Node.js 14+
- An active Clawdbot installation

## What's Next?

**v0.2 (Coming Soon):**
- Daily/weekly/monthly cost trends
- Cost alerts ("You've spent $X today")
- Export to CSV
- Historical data tracking

**v0.3 (Future):**
- Budget limits
- Cost projections
- Multi-agent tracking

## Pricing

**Currently:** Free and open source

**Future:** Optional $5/month for cloud-hosted version with historical data

## Built By

[@0xboko](https://x.com/0xboko) at [Blockstrata](https://blockstrata.co)

Built with ❤️ for the Clawdbot community.

## License

MIT
