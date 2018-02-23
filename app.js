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

expressCli.get('/match', function(req, res) {
  console.log("Req on /match");
  if (req.body.type = "url_verification") {
    console.log("Got challenge request");
    return res.status(200).send(req.body.challenge);
  }
  if (req.body.text = "we shouldn't have") {
    return request.post({
      url: null,
      body: ":reidtoldya:"
    })
  }
});

expressCli.set('port', (process.env.PORT || 1337));
expressCli.listen(expressCli.get('port'), () => console.log('Listening on :1337'));
