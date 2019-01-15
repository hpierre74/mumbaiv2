const sendEmail = require('./sendEmail.utils');
const cors = require('cors')({ origin: true });

const sendEmailFromHttp = (request, response) =>
  cors(request, response, async () => {
    const body = {
      ...request.body,
      content: `
      <div>
        ${request.body.content}
      </div>
    `,
    };
    await sendEmail(body);

    return response.status(200).send('Mail sent');
  });

module.exports = sendEmailFromHttp;
