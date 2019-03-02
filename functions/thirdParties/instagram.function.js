const functions = require('firebase-functions');
const fetch = require('superagent');
const hmacSha256 = require('crypto-js/hmac-sha256');
const cors = require('cors')({ origin: true });

const getInstagramFeed = (request, response) =>
  cors(request, response, async () => {
    const generateSigToken = (endpoint, params, secret) => {
      const sig = `${endpoint}|access_token=${params['access_token']}|count=${params['count']}`;

      return hmacSha256(sig, secret).toString();
    };

    const access_token = functions.config().instagram.access_token;
    const client_secret = functions.config().instagram.client_secret;
    const endpoint = '/media/recent/';
    const count = 15;
    const params = {
      access_token,
      count,
    };

    try {
      const sig = generateSigToken(endpoint, params, client_secret);
      const feed = await fetch
        .get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${access_token}&count=15&sig=${sig}`)
        .timeout(5000)
        .set('Content-Type', 'application/javascript')
        .set('Accept', 'application/javascript');

      const result = feed.body.data;

      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).send(err);
    }
  });

module.exports = getInstagramFeed;
