const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve os arquivos estáticos (HTML, CSS, JS, JSON) da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
