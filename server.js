const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(`${__dirname}/build`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(app.get('port'), () => {
  /* eslint-disable no-console */
  console.log('Express server started on port', app.get('port'));
});
