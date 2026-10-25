const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.send('<h1 style="color:green;text-align:center">NABA CONNECT IS LIVE! 🚀<br><br>Server yana aiki!</h1><p style="text-align:center">Taya murna!</p>');
});

app.listen(3000, ()=>{
  console.log('✅ LIVE on 3000');
});

