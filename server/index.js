const express = require('express');
const compression = require('compression')
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.APP_PORT || 8989;

const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.cert')
}

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/subscribe', (req, res) => {

});

app.post('/unsubscribe', (req, res) => {

});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

https.createServer(options, app).listen(8443, () => console.log('https ok'));
http.createServer(function (req, res) {
  console.log('request here', "https://" + req.headers['host'] + req.url);
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(PORT, () => console.log('http ok'));
