const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const webpush = require('web-push');

webpush.setVapidDetails(
  'mailto:francbreno@gmail.com',
  process.env.PUBLIC_VAPID_KEY,
  process.env.PRIVATE_VAPID_KEY,
);

const sendNotification = (subscription, data) => {
  console.log('sending new notification');
  webpush
    .sendNotification(subscription, JSON.stringify(data))
    .catch(err => console.log('error sending notification', err));
}

let subscription;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/subscription', (req, res) => {
  subscription = req.body;
  res.sendStatus(201);
  console.log('received new subscription', subscription);

  const notificationData = {
    title: 'Test Notification',
    body: 'The data that you not required, sir!',
    icon: 'https://api.fifa.com/api/v1/picture/tournaments-sq-4/254645_w'
  };

  sendNotification(subscription, notificationData);
});

app.delete('/subscription', (req, res) => {
  subscription = null;
  res.sendStatus(200);
});

app.listen(3000, () => console.log('push server is running'));