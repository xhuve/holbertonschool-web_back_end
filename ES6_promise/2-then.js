module.exports = function handleResponseFromAPI(promise) {
  promise.then(() => ({
    status: 200,
    body: 'success',
  })).catch(() => new Error()).finally(() => {
    // eslint-disable-next-line no-console
    console.log('Got a response from the API');
  });
};
