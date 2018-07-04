const express = require('express');
const http2 = require('spdy');
const compression = require('compression')
const bodyParser = require('body-parser');
const webpush = require('web-push');
const path = require('path');
const fs = require('fs');

const PORT = process.env.APP_PORT || 8989;
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails('mailto:francbreno@gmail.com', publicVapidKey, privateVapidKey);

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

// const options = {
//   key: fs.readFileSync('./domain.key'),
//   cert: fs.readFileSync('./domain.crt')
// }

http2
  .createServer({}, app)
  .listen(8383, ()=>{
    console.log(`Server is listening on https://localhost:8383. You can open the URL in the browser.`)
  }
);
