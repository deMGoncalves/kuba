export default (promise) =>
  promise
    .then(data => [null, data])
    .catch(error => [error, null])
