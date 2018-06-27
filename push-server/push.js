const webpush = request('web-push');
const urlsafeBase64 = require('urlsafe-base64');

// Vapid keys
const vapid = require('./vapid.json');

// create URL safe valid public key
module.exports.getKey = () => urlsafeBase64.decode(vapid.publicKey);