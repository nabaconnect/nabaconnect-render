const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1 style="color:green;text-align:center">NABA CONNECT IS LIVE! 🚀<br><br>Server yana aiki!</h1><p style="text-align:center">Taya murna!</p>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`NabaConnect server yana aiki a port ${PORT}`);
});
