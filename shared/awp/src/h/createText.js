import map from '@rex/awp/src/map'

export default (payload) =>
  map.set(
    payload['@unid'],
    document.createTextNode(payload.textContent)
  )
