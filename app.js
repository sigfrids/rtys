const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const express = require('express');
const request = require('request');
const expressCli = express();

dotenv.load();

expressCli.use(bodyParser.json());
expressCli.use(bodyParser.urlencoded({
  extended: true
}));

expressCli.post('/match', (req, res) =>
  if (req.body.token !== process.env.SLACK_TOKEN) {
      return res.status(500).send('Nope');
    }
  if (req.body.text = "we shouldn't have") {
    return request.post({
      url: null,
      body: ":reidtoldya:"
    })
  }
)

expressCli.set('port', (process.env.PORT || 1337));
expressCli.listen(app.get('port'), () => console.log('Got request on :1337'));
