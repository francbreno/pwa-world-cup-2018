const http = require('http');
const push = require('./push');

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const {url, method} = request;

  // ENDPOINTS

  // Subscription
  if (method === 'POST' && url.match(/^\/subscribe\/?/)) {
    let body = [];

    request
      .on('data', chunk => body.push(chunk))
      .on('end', () => {
        res.end('Subscribed');
      });
  } // Public Key
  else if (url.match(/^\/key\/?/)) {
    // Get key from push
    const key = push.getKey();
    res.end(key);
  } else if ( method === 'POST' && url.match(/^\/push\/?/)) {
    let body = [];

    request
      .on('data', chunk => body.push(chunk))
      .on('end', () => {
        res.end('Push Sent');
      });
  } else {
    res.status = 404;
    res.end('Error: Unknown Request');
  }

}).listen(3333, () => console.log('Push-Server is up and running. Ready to send notifications'));