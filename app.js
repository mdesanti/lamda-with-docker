var aws = require('aws-sdk');

exports.handler = function(event, context) {
  console.log('Hello 2!')
  console.log("REQUEST RECEIVED:\n" + JSON.stringify(event))
  var res ={
    statusCode: 200,
    headers: {
        "Content-Type": "*/*"
    },
    body: JSON.stringify(event)
  };
  return res
}
