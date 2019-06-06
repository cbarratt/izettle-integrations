const request = require('request');

exports.postWebhook = (event, context, callback) => {
  const webhookUri = process.env.SLACK_WEBHOOK_URL;
  const slackIcon = process.env.SLACK_WEBHOOK_ICON;

  const options = {
    method: 'POST',
    url: webhookUri,
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      text: JSON.stringify(event.body) || 'empty message recieved',
      icon_emoji: `:${slackIcon}:`,
    },
    json: true,
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    console.log(body);
  });

  // return a 200 response so izettle know we are legit
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    }
  };

  callback(null, response);
};
