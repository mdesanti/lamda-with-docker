var aws = require('aws-sdk');

exports.handler = function(event, context) {
  console.log('Hello 2!')
  console.log("REQUEST RECEIVED:\n" + JSON.stringify(event))
  return
}
