import map from '@rex/sandbox/src/master/map'

export default (payload) =>
  map.set(
    payload['@unid'],
    document.createTextNode(payload.textContent)
  )
