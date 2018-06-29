const express = require('express');
var compression = require('compression')
const path = require('path');

const PORT = process.env.APP_PORT || 8989;

const app = express();

app.use(compression());
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
