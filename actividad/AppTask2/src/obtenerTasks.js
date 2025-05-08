const AWS = require("aws-sdk");
exports.obtenerTaskPorId = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  const id = event.pathParameters.id;

  const result = await dynamoDB
    .get({
      TableName: "taskTable1",
      Key: { id },
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Item || { error: "Tarea no encontrada" }),
  };
};
