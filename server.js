const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const { analyzeUsage } = require('./cost-calculator');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 3939;
const UPDATE_INTERVAL = 5000; // Update every 5 seconds

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for current usage
app.get('/api/usage', (req, res) => {
  const analysis = analyzeUsage();
  res.json(analysis);
});

// WebSocket connection
wss.on('connection', (ws) => {
  console.log('Client connected');
  
  // Send initial data
  ws.send(JSON.stringify(analyzeUsage()));
  
  // Set up periodic updates
  const interval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(analyzeUsage()));
    }
  }, UPDATE_INTERVAL);
  
  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   💰 CLAWDBOT COST MONITOR                                     ║
║                                                                ║
║   Dashboard: http://localhost:${PORT}                            ║
║                                                                ║
║   Tracking your Clawdbot AI costs in real-time...             ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
  `);
});
