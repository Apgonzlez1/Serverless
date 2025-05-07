const AWS = require("aws-sdk");

exports.actualizarTask = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  // Verifica si body está definido antes de parsear
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "No se recibió el body en la petición" }),
    };
  }

  const { titulo, descripcion } = JSON.parse(event.body);
  const { id } = event.pathParameters;

  await dynamoDB
    .update({
      TableName: "taskTable1",
      Key: { id },
      UpdateExpression: "set titulo = :titulo, descripcion = :descripcion",
      ExpressionAttributeValues: {
        ":titulo": titulo,
        ":descripcion": descripcion,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ mensaje: "Tarea actualizada correctamente" }),
  };
};
