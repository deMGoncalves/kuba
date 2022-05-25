export default (response) => (
  response.headers.set('Access-Control-Allow-Origin', '*'),
  response.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS'),
  response
)
