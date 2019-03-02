const fetch = require('superagent');
const cors = require('cors')({ origin: 'http://localhost:3000' });

const getInstagramFeed = (request, response) =>
  cors(request, response, async () => {
    const access_token = '2923279734.817d113.bd9923b592db4ff58a70f81d9d8496d4';
    try {
      const feed = await fetch
        .get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${access_token}&count=15`)
        .timeout(5000)
        .set('Content-Type', 'application/javascript')
        .set('Accept', 'application/javascript');
      const result = JSON.stringify(feed.body.data);
      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).send(err);
    }
  });
module.exports = getInstagramFeed;
