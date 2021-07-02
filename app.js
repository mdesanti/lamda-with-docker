var aws = require('aws-sdk');

exports.handler = function(event, context) {
  console.log('Hello!')
  console.log("REQUEST RECEIVED:\n" + JSON.stringify(event))
  return
}
