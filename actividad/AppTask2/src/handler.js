exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hola mundo desde la ESPE sede Santo Domingo",
      input: event
    }),
  };
};
