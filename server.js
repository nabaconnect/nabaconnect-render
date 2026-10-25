
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1 style="color:green;text-align:center">NABA CONNECT IS LIVE! 🚀<br><br>Server yana aiki!</h1><p style="text-align:center">Taya murna!</p>');
});

// Meta WhatsApp webhook verification
app.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token && token === VERIFY_TOKEN) {
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

// Receive WhatsApp webhook events
app.post('/webhook', (req, res) => {
  console.log('WhatsApp webhook event received');
  console.log(JSON.stringify(req.body));

  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`NabaConnect server yana aiki a port ${PORT}`);
});
