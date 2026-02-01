const fs = require('fs');
const path = require('path');
const os = require('os');

// Model pricing (per million tokens)
const MODEL_PRICING = {
  'anthropic/claude-sonnet-4-5': { input: 3.00, output: 15.00 },
  'anthropic/claude-sonnet-4': { input: 3.00, output: 15.00 },
  'anthropic/claude-opus-4': { input: 15.00, output: 75.00 },
  'anthropic/claude-3-5-sonnet-20241022': { input: 3.00, output: 15.00 },
  'anthropic/claude-3-5-sonnet': { input: 3.00, output: 15.00 },
  'openai/gpt-4': { input: 30.00, output: 60.00 },
  'openai/gpt-4-turbo': { input: 10.00, output: 30.00 },
  'openai/gpt-3.5-turbo': { input: 0.50, output: 1.50 },
};

// Default pricing for unknown models
const DEFAULT_PRICING = { input: 3.00, output: 15.00 };

function getSessionsPath() {
  const homeDir = os.homedir();
  return path.join(homeDir, '.clawdbot', 'agents', 'main', 'sessions', 'sessions.json');
}

function calculateCost(inputTokens, outputTokens, model) {
  const pricing = MODEL_PRICING[model] || DEFAULT_PRICING;
  
  const inputCost = (inputTokens / 1_000_000) * pricing.input;
  const outputCost = (outputTokens / 1_000_000) * pricing.output;
  
  return inputCost + outputCost;
}

function readSessionData() {
  try {
    const sessionsPath = getSessionsPath();
    
    if (!fs.existsSync(sessionsPath)) {
      return { error: 'Sessions file not found. Is Clawdbot running?' };
    }
    
    const data = fs.readFileSync(sessionsPath, 'utf8');
    const sessions = JSON.parse(data);
    
    return { sessions };
  } catch (error) {
    return { error: `Failed to read sessions: ${error.message}` };
  }
}

function analyzeUsage() {
  const result = readSessionData();
  
  if (result.error) {
    return { error: result.error };
  }
  
  const { sessions } = result;
  const analysis = {
    totalInputTokens: 0,
    totalOutputTokens: 0,
    totalCost: 0,
    byModel: {},
    sessions: []
  };
  
  for (const [sessionKey, session] of Object.entries(sessions)) {
    // Use totalTokens if available, otherwise fall back to individual counts
    let inputTokens = session.inputTokens || 0;
    let outputTokens = session.outputTokens || 0;
    
    // If totalTokens is present and significantly larger, use it with estimated split
    if (session.totalTokens && session.totalTokens > (inputTokens + outputTokens)) {
      const totalTokens = session.totalTokens;
      // Estimate: ~25% input, ~75% output (typical for AI conversations)
      inputTokens = Math.floor(totalTokens * 0.25);
      outputTokens = Math.floor(totalTokens * 0.75);
    }
    
    const model = session.model || 'unknown';
    const provider = session.modelProvider || 'unknown';
    const fullModel = provider !== 'unknown' ? `${provider}/${model}` : model;
    
    const cost = calculateCost(inputTokens, outputTokens, fullModel);
    
    analysis.totalInputTokens += inputTokens;
    analysis.totalOutputTokens += outputTokens;
    analysis.totalCost += cost;
    
    // Track by model
    if (!analysis.byModel[fullModel]) {
      analysis.byModel[fullModel] = {
        inputTokens: 0,
        outputTokens: 0,
        cost: 0,
        sessions: 0
      };
    }
    
    analysis.byModel[fullModel].inputTokens += inputTokens;
    analysis.byModel[fullModel].outputTokens += outputTokens;
    analysis.byModel[fullModel].cost += cost;
    analysis.byModel[fullModel].sessions += 1;
    
    // Session details
    analysis.sessions.push({
      key: sessionKey,
      model: fullModel,
      inputTokens,
      outputTokens,
      cost,
      lastUpdated: session.updatedAt || null
    });
  }
  
  return analysis;
}

module.exports = {
  analyzeUsage,
  calculateCost,
  MODEL_PRICING
};
