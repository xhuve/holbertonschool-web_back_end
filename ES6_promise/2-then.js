module.exports = function handleResponseFromAPI(promise) {
  try {
    promise.resolve();
    return {
      status: 200,
      body: 'success',
    };
  } catch (error) {
    return new Error();
  } finally {
    // eslint-disable-next-line no-console
    console.log('Got a response from the API');
  }
};
