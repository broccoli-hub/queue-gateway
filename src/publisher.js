const AWS = require('aws-sdk');
const iotData = new AWS.IotData({ endpoint: process.env.IOT_ENDPOINT });

module.exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const topicName = body.topic || 'casaguate01/piso01/cuarto01/puerta/01';

    const params = {
        topic: topicName,
        payload: JSON.stringify({ message: body.message }),
        qos: 0
    };

    await iotData.publish(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Published successfully!' })
    };
  };
  