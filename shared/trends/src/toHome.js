import * as f from '@kuba/f'

export default (id) =>
  fetch(`${__settings.api.host}/trends/home/${id}`)
    .then(response => response.json())
    .then(snapshot => f.prop('response.trends', snapshot))
    .then(f.or(f.__, []))
