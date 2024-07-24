module.exports = async function handleResponseFromAPI(promise) {
  try {
    const response = await promise.resolve();
    return response;
  } catch (error) {
    return new Error();
  } finally {
    // eslint-disable-next-line no-console
    console.log('Got a response from the API');
  }
};
